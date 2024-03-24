import { Separator } from "@/components/separator/separator";
import { useTranslation } from "react-i18next";

import pictureRinaPlata from "@/assets/pictures/rina-plata.jpeg";
import pictureTeam from "@/assets/pictures/team.jpg";
import "./aboutTeam.scss";

export const AboutTeam = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="about-team">
      <h1 className="about-team__title">{t("about.title")}</h1>
      <p className="about-team__subtitle">{t("about.subtitle")}</p>

      <div className="about-team__container">
        <div className="about-team__content">
          <h2 className="about-team__subtitle">Rina Plata</h2>
          {Array.from(Array(5).keys()).map((i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: t(`about.rina.${i}`),
              }}
            />
          ))}
        </div>
        <div className="about-team__media">
          <img className="about-team__media-image" src={pictureRinaPlata} />
        </div>
      </div>

      <Separator />

      <div className="about-team__container">
        <div className="about-team__media">
          <img className="about-team__media-image" src={pictureTeam} />
        </div>
        <div className="about-team__content">
          <h2 className="about-team__subtitle">{t("about.team.title")}</h2>
          <p>{t("about.team.intro")}</p>
          <p>{t("about.team.thanks")}</p>
        </div>
      </div>
    </section>
  );
};
