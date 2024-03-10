import { useTranslation } from "react-i18next";
import "./donate.scss";

export const Donate = (): JSX.Element => {
  const { t } = useTranslation();

  const categories = ["money", "items", "sponsorship"];

  return (
    <section className="donate">
      <div className="donate__container">
        <h2 className="donate__title">{t("donate.section.title")}</h2>
        <p className="donate__description">{t("donate.section.description")}</p>
        <div className="donate__list">
          {categories.map((element, index) => {
            return (
              <div className="donate__list-item-container" key={index}>
                <div className="donate__list-item">
                  <h3 className="donate__list-item-title">
                    <span className="donate__list-item-title-decor" />
                    {t(`donate.section.${element}.title`)}
                  </h3>
                  <p
                    className="donate__list-item-description"
                    dangerouslySetInnerHTML={{
                      __html: t(`donate.section.${element}.description`),
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
