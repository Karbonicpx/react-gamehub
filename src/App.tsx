import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage"; // exemplo

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal */}
        <Route index element={<HomePage/>} />

        {/* Exemplo de outra rota */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}