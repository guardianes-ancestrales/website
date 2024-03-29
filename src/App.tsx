import { Footer } from "./components/footer/footer";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Team } from "./pages/team";
import { Donate } from "./pages/donateDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./styles/main.scss";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="acerca-de" element={<About />} />
        <Route path="nuestro-equipo" element={<Team />} />
        <Route path="donar" element={<Donate />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
