import {useState, type MouseEvent as ReactMouseEvent, useEffect} from "react";
import {ContextMenu} from "../../components/ContextMenu/ContextMenu.tsx";
import type {ContextMenuItem} from "../../types/contextMenuType.ts";

export const Chat = () => {

  const [isOpenContextModal, setIsOpenContextModal] = useState<boolean>(false)
  const [cursorPosition, setCursorPosition] = useState<{
    x: number
    y: number
  }>({
    x: 100,
    y: 100,
  })

  const chatContextMenu: ContextMenuItem[] = [
    {
      type: "item",
      icon: "edit",
      text: "Редачить",
      onClick: () => {
        console.log("edited")
      }
    },
    {
      type: "separator"
    },
    {
      type: "item",
      icon: "trash",
      text: "Удалить сообщение",
      onClick: () => {
        console.log("deleted")
      }
    }
  ]

  const openContextModal = (e: ReactMouseEvent<HTMLDivElement>) => {
    setIsOpenContextModal(!isOpenContextModal);
    e.preventDefault();
    e.stopPropagation();
  }

  const closeContextModal = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    if (isOpenContextModal) {
      setIsOpenContextModal(false);
    }
  }

  useEffect(() => {
    const followCursor = (event: MouseEvent) => {
      if (isOpenContextModal) return
      const x = event.clientX;
      const y = event.clientY;

      setCursorPosition({
        x, y
      })
    }

    document.addEventListener('mousemove', followCursor)

    return () => document.removeEventListener('mousemove', followCursor)
  }, [isOpenContextModal])

  return <>
    <div className="min-h-screen" onMouseDown={closeContextModal} onContextMenu={openContextModal}>


      {
        isOpenContextModal && <ContextMenu items={chatContextMenu} position={cursorPosition}/>
      }
    </div>
  </>
}