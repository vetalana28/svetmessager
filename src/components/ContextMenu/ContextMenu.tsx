import type {ContextMenuItem} from "../../types/contextMenuType.ts";

interface MenuOptions {
  items: ContextMenuItem[];
  position: {
    x: number;
    y: number;
  }
}

export const ContextMenu = ({items, position}: MenuOptions) => {

  return <>
    <div className="">
      <div className={"context-menu"} style={{position: "fixed", top: position.y+"px", left: position.x+"px"}}>
        {
          items.map((item: ContextMenuItem) => (
            <div onClick={item.onClick}>{item.icon} {item.text}</div>
          ))
        }
      </div>
    </div>
  </>
}