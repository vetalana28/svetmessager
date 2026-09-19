import type {ReactNode} from "react";
import "./mybutton.css"

interface BtnProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export const MyButton = ({onClick, className, children}: BtnProps) => {
    return <button className={`button ${className}`} onClick={onClick}>{children}</button>
}
