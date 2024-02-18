import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Event } from "./components/event/event";
import { Donate } from "./components/donate/donate";
import { Faq } from "./components/faq/faq";

import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Event />
      <Donate />
      <Faq />
    </>
  );
}

export default App;
