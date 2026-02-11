import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeListPage from "../features/anime-list/components/AnimeListPage";
import AnimeDetailPage from "../features/anime-detail/components/AnimeDetailPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimeListPage />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
