import { useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoHorizontal from "@/assets/logo-horizontal.svg";
import logoHorizontalWhite from "@/assets/logo-horizontal-white.svg";
import "./navbar.scss";

export type NavbarTheme = "light" | "dark";

export const Navbar = ({
  theme = "light",
}: {
  theme?: NavbarTheme;
}): JSX.Element => {
  const buttonRef = useRef<HTMLElement>(null);

  const routes = [
    { route: "/", id: "#about", label: "Acerca de" },
    { route: "/donar", label: "Donar" },
    { route: "/", id: "#faq", label: "Preguntas frecuentes" },
    { route: "/", id: "#sponsors", label: "Patrocinadores" },
  ];

  const toggleMenuOnMobile = () => {
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    buttonRef.current?.classList.toggle("navbar--active");

    document.body.style.overflow == "hidden"
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <nav className={`navbar navbar--${theme}`} ref={buttonRef}>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-line" />
      </div>
      <Link to="/">
        <img
          src={theme === "light" ? logoHorizontal : logoHorizontalWhite}
          className="h-12"
          alt="Guardianes ancestrales"
        />
      </Link>
      <ul className="navbar__links">
        {routes.map((element, index) => {
          return (
            <li key={index} className="navbar__item">
              {element.id ? (
                <HashLink
                  smooth
                  to={element.route + element.id}
                  onClick={toggleMenuOnMobile}
                >
                  {element.label}
                </HashLink>
              ) : (
                <Link to={element.route} onClick={toggleMenuOnMobile}>
                  {element.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
