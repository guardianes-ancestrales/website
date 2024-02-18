import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Donate } from "./components/donate/donate";
import { Faq } from "./components/faq/faq";

import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Donate />
      <Faq />
    </>
  );
}

export default App;
