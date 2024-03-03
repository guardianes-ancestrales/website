import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Team } from "./pages/team";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="acerca-de" element={<About />} />
        <Route path="nuestro-equipo" element={<Team />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
