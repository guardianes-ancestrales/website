import { useTranslation } from "react-i18next";
import "./lastEdition.scss";

export const LastEdition = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="last-edition">
      <div className="last-edition__container">
        <div className="last-edition__content">
          <h2>{t("about.lastEdition.title")}</h2>
          <p className="last-edition__content-description">
            {t("about.lastEdition.description")}
          </p>
        </div>
        <div className="last-edition__media">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rqLdIDUGiw4?si=BSE9Gq_btRI1qoWi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
