import logoHorizontal from "../../assets/logo-horizontal.svg";
import "./navbar.scss";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="p-4 flex justify-between items-center shadow-md">
      <img src={logoHorizontal} className="h-12" alt="Guardianes ancestrales" />
      <div>
        <ul className="flex navbar-links">
          <li>Acerca de</li>
          <li>Nuestro equipo</li>
          <li>Donaciones</li>
        </ul>
      </div>
    </nav>
  );
};
