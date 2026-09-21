import {Route, Routes} from "react-router-dom";
import {Chat} from "./pages/chat/Chat.tsx";

export const App = () => {

    return <div>
        <Routes>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
    </div>
}

