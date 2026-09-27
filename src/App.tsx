import {Route, Routes} from "react-router-dom";
import {Chat} from "./pages/chat/Chat.tsx";

export const App = () => {

  return <div>
    <header>
      <div className="header__container container">
        <a href="" className="headerlogo">VetMessager</a>
        <ul className="headernav">
          <li><a href="#">Главная</a></li>
          <li><a href="#">Лента</a></li>
          <li><a href="#">Моя страница</a></li>
          <li><a href="#">Чат</a></li>
        </ul>
        <a href="" className="headerbutton">Войти</a>
      </div>
    </header>
    <Routes>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
  </div>
}

