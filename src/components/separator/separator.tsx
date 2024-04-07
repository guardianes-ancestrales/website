import houseIcon from "@/assets/illustrations/house-icon.svg";
import "./separator.scss";

export const Separator = (): JSX.Element => (
  <div className="separator">
    <img
      className="separator__icon separator__icon--left"
      src={houseIcon}
      aria-hidden="true"
    />
    <img className="separator__icon" src={houseIcon} aria-hidden="true" />
    <img
      className="separator__icon separator__icon--right"
      src={houseIcon}
      aria-hidden="true"
    />
    <hr className="separator__horizontal" />
  </div>
);
