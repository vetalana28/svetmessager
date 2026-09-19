// import type {ReactNode} from "react";
import "./header.css"
import {Link} from "react-router-dom";

export  const Header  = () => {
    return <header>

        <div className="header__container container">

            <img src="../src/assets/react.svg" alt="Logo"/>

            <nav className="header__nav">
                <Link className="header-link active" to="/">Home</Link>
                <Link className="header-link" to="/features">Features</Link>
                <Link className="header-link" to="#">Pricing</Link>
                <Link className="header-link" to="#">Blog</Link>
            </nav>

            <a className="header__btn">Get started</a>
        </div>
    </header>
}

