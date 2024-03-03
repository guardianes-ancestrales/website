import { Link } from "react-router-dom";

import logoHorizontal from "../../assets/logo-horizontal.svg";
import "./navbar.scss";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="p-4 flex justify-between items-center navbar">
      <Link to="/">
        <img
          src={logoHorizontal}
          className="h-12"
          alt="Guardianes ancestrales"
        />
      </Link>
      <div>
        <ul className="flex navbar-links">
          <li>
            <Link to="/acerca-de">Acerca de</Link>
          </li>
          <li>
            <Link to="/nuestro-equipo">Nuestro equipo</Link>
          </li>
          <li>Donaciones</li>
        </ul>
      </div>
    </nav>
  );
};
