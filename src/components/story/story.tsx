import { useTranslation } from "react-i18next";
import media from "@/assets/story-guajira.jpg";
import "./story.scss";

export const Story = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="story" id="about">
      <div className="story__container">
        <div className="story__media">
          <img
            src={media}
            className="story__media-image"
            alt="Guardianes ancestrales"
          />
        </div>
        <div className="story__content">
          <h2>{t("story.title")}</h2>
          <p className="story__content-intro">{t("story.intro")}</p>
          <p className="story__content-description">{t("story.description")}</p>
        </div>
      </div>
    </section>
  );
};
