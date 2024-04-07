import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import logoIconOnly from "@/assets/guardianes-logos/logo-icon-only.svg";
import "./event.scss";

export const Event = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="event">
      <div className="event__container">
        <div className="event__media">
          <img
            src={logoIconOnly}
            className="event__media-logo"
            alt="Guardianes ancestrales"
          />
        </div>
        <div className="event__content">
          <h2>{t("event.title")}</h2>
          <p className="event__content-intro">{t("event.intro")}</p>
          <p className="event__content-description">{t("event.description")}</p>
          <p className="event__content-description">{t("event.donate")}</p>
          <Link to="/donar">
            <Button className="event__content-cta">{t("event.cta")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
