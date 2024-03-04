import { useRef } from "react";
import { Link } from "react-router-dom";
import logoHorizontalWhite from "@/assets/logo-horizontal-white.svg";
import "./navbar.scss";

export const Navbar = (): JSX.Element => {
  const buttonRef = useRef<HTMLElement>(null);

  const routes = [
    { route: "/", id: "#about", label: "Acerca de" },
    { route: "/donar", label: "Donar" },
    { route: "/", id: "#faq", label: "Preguntas frecuentes" },
    { route: "/", id: "#sponsors", label: "Patrocinadores" },
  ];

  const scrollToSection =
    (sectionId: string) => (event: { preventDefault: () => void }) => {
      event.preventDefault();
      const isMobile = window.innerWidth < 1024;

      const section = document.querySelector(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        if (isMobile) {
          toggleMenu();
        }
      }
    };

  const toggleMenu = () => {
    buttonRef.current?.classList.toggle("navbar--active");

    document.body.style.overflow == "hidden"
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <nav className="navbar" ref={buttonRef}>
      <div className="navbar__toggle">
        <span className="navbar__toggle-line" onClick={toggleMenu} />
      </div>
      <Link to="/">
        <img
          src={logoHorizontalWhite}
          className="h-12"
          alt="Guardianes ancestrales"
        />
      </Link>
      <ul className="navbar__links">
        {routes.map((element, index) => {
          return (
            <li key={index} className="navbar__item">
              <Link
                to={element.route}
                onClick={element.id ? scrollToSection(element.id) : undefined}
              >
                {element.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
