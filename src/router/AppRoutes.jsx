import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Anime List Page</div>} />
        <Route path="/anime/:id" element={<div>Anime Detail Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
