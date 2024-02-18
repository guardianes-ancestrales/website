import { Navbar } from "./components/navbar/navbar";
import { Donate } from "./components/donate/donate";
import { Faq } from "./components/faq/faq";
import { Sponsors } from "./components/sponsors/sponsors";

import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Donate />
      <Faq />
      <Sponsors />
    </>
  );
}

export default App;
