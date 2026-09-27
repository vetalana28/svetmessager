import "./components/header/header.css"
import {Home} from "./pages/home/Home.tsx";
import {Routes, Route} from "react-router-dom"
import {Header} from "./components/header/Header.tsx";
import {Register} from "./pages/register/Register.tsx";



export const App = () => {
    return (
        <div>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>


        </div>
    );
}