import { useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoHorizontal from "@/assets/logo-horizontal.svg";
import logoHorizontalWhite from "@/assets/logo-horizontal-white.svg";
import translationIcon from "@/assets/translation-icon.svg";
import "./navbar.scss";
import { useTranslation } from "react-i18next";

export type NavbarTheme = "light" | "dark";

export const Navbar = ({
  theme = "light",
}: {
  theme?: NavbarTheme;
}): JSX.Element => {
  const { t, i18n } = useTranslation();
  const buttonRef = useRef<HTMLElement>(null);

  const routes = [
    { route: "/", id: "#about", label: t("navbar.about") },
    { route: "/donar", label: t("navbar.donate") },
    { route: "/", id: "#faq", label: t("navbar.faq") },
    { route: "/", id: "#sponsors", label: t("navbar.sponsors") },
    { route: "/acerca-de", label: t("navbar.team") },
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

  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
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
        {i18n.language === "es" ? (
          <li className="navbar__item" onClick={() => toggleLanguage("en")}>
            <button
              className="navbar__item-button"
              title="Translate page to english"
            >
              English&nbsp;
              <img src={translationIcon} className="h-5" aria-hidden="true" />
            </button>
          </li>
        ) : (
          <li
            className="navbar__item navbar__item--icon"
            onClick={() => toggleLanguage("es")}
          >
            <button
              className="navbar__item-button"
              title="Traducir página al español"
            >
              Español&nbsp;
              <img src={translationIcon} className="h-5" aria-hidden="true" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
