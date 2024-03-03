import houseIcon from "../../assets/house-icon.svg";
import "./separator.scss";

export const Separator = (): JSX.Element => (
  <div className="separator">
    <img className="separator__icon" src={houseIcon} aria-hidden="true" />
    <hr className="separator__horizontal" />
  </div>
);
