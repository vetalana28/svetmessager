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
      icon: "trash.svg",
      text: "Удалить сообщение",
      onClick: () => {
        console.log("deleted")
      }
    },
    {
      icon: "edit.svg",
      text: "Редачить",
      onClick: () => {
        console.log("edited")
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

  const [item, setItem] = useState(false)

  return <>
    <div className="min-h-screen" onMouseDown={closeContextModal} onContextMenu={openContextModal}>

      <button onClick={() => setItem(!item)}>asads</button>
      {item && <div>item show</div>}

      {
        isOpenContextModal && <ContextMenu items={chatContextMenu} position={cursorPosition}/>
      }
    </div>
  </>
}