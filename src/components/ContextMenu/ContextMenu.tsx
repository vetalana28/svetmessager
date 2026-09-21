import type {ContextMenuItem} from "../../types/contextMenuType.ts";

import type {MouseEvent} from "react"
import "./context-menu.css"


interface MenuOptions {
  items: ContextMenuItem[];
  position: {
    x: number;
    y: number;
  }
}

export const ContextMenu = ({items, position}: MenuOptions) => {


  const handleContextButtonClick = (e: MouseEvent<HTMLDivElement>, onClick: () => void) => {
    e.stopPropagation()
    e.preventDefault();
    onClick()
  }

  return <>
    <div className="">
      <div className={"context-menu"} style={{position: "fixed", top: position.y + "px", left: position.x + "px"}}>
        {
          items.map((item: ContextMenuItem) => (
            item.type === "item" ?
              <div className={"context-menu__button"} onMouseDown={(e) => handleContextButtonClick(e, item.onClick)}><img
                src={`/icons/${item.icon}.svg`}
                alt="a"/> {item.text}</div>
              :
              <div className={"context-menu__separator"}/>
          ))
        }
      </div>
    </div>
  </>
}