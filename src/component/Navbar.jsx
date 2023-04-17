import View from "../pages/View";
import Edit from "../pages/Edit";
import Add from "../pages/Add";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/add" element={<Add/>}></Route>
                    <Route path="/" element={<View/>}></Route>
                    <Route path="/edit" element={<Edit/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navbar;