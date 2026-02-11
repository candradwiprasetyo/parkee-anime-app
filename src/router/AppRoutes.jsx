import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeListPage from "../features/anime-list/components/AnimeListPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimeListPage />} />
        <Route path="/anime/:id" element={<div>Anime Detail Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
