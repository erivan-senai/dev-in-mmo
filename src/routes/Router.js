import { Routes, Route } from "react-router-dom";

//import das páginas
import { Pagegames, Pagenews } from "../components/Pages";

export const Router = () => {
    <Routes>
        <Route path="/" exact element={<Pagegames />} />
        <Route path="/pagenews" element={<Pagenews />} />
    </Routes>
}