import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Producto from "./pages/Producto";
import Tutorial from "./pages/Tutorial";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Página principal */}
          <Route path="/" element={<Catalogo />} />

          {/* Página secundaria (CMS / inspiración) */}
          <Route path="/tutoriales" element={<Home />} />

          {/* Detalles */}
          <Route path="/producto/:slug" element={<Producto />} />
          <Route path="/tutorial/:id" element={<Tutorial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
