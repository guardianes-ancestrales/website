import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import "./eventBanner.scss";

export const EventBanner = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="event-banner">
      <div className="event-banner__container">
        <div className="event-banner__date-badge">
          {t("eventBanner.date")}
        </div>
        <h2 className="event-banner__title">{t("eventBanner.title")}</h2>
        <p className="event-banner__subtitle">{t("eventBanner.subtitle")}</p>
        <Link to="/donar">
          <Button className="event-banner__cta">{t("eventBanner.cta")}</Button>
        </Link>
      </div>
    </section>
  );
};
