import { Navbar } from "./components/navbar/navbar";
import { Donate } from "./components/donate/donate";
import { Faq } from "./components/faq/faq";

import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Donate />
      <Faq />
    </>
  );
}

export default App;
