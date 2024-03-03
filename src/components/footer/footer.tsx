import igLogo from "../../assets/instagram-logo.png";
import "./footer.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className="p-8 text-center bg-zinc-200">
      <p>
        Guardianes Ancestrales 2024 | guardianesancestralesdev@gmail.com |{" "}
        <a href="https://www.instagram.com/guardianes_ancestralesdev/">
          <img className="footer-ig" src={igLogo} />
        </a>
      </p>
    </footer>
  );
};
