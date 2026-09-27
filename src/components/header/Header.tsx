// import type {ReactNode} from "react";
import "./header.css"
import {Link} from "react-router-dom";


export  const Header  = () => {
    return <header>
        <div className="header__container container">
            <a href="" className="header__logo">VetMessager</a>

            <nav className="header__nav">
                <Link className="header-link active" to="/">Главная</Link>
                <Link className="header-link" to="/features">Лента</Link>
                <Link className="header-link" to="#">Моя страница</Link>
                <Link className="header-link" to="#">Чат</Link>
            </nav>
            <Link to="/login" className="header__button">Войти</Link>
        </div>
    </header>
}

