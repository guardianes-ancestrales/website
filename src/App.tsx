import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Story } from "./components/story/story";
import { Event } from "./components/event/event";
import { Donate } from "./components/donate/donate";
import { Faq } from "./components/faq/faq";
import { Sponsors } from "./components/sponsors/sponsors";

import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Event />
      <Donate />
      <Faq />
      <Sponsors />
    </>
  );
}

export default App;
