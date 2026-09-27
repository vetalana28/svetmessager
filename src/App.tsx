import "./components/header/header.css"
import {Home} from "./pages/home/Home.tsx";
import {Features} from "./pages/Features/Features.tsx";
import {Routes, Route} from "react-router-dom"
import {Header} from "./components/header/Header.tsx";



export const App = () => {
    return (
        <div>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/features" element={<Features/>}/>
            </Routes>


        </div>
    );
}