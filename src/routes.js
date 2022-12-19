import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Ajuda from "./pages/Ajuda";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/ajuda" element={<Ajuda />}></Route>
            </Routes>
        </BrowserRouter>
    )
}