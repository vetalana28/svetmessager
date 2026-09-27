import "./components/header/header.css"
import {Home} from "./pages/home/Home.tsx";
import {Routes, Route} from "react-router-dom"
import {Header} from "./components/header/Header.tsx";
import {Login} from "./pages/login/Login.tsx";


export const App = () => {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>


    </div>
  );
}