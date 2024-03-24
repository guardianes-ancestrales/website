import { Thermometer } from "@/components/thermometer/thermometer";
import heroBackground from "@/assets/hero.jpg";
import logoTextOnly from "@/assets/logo-text-only.svg";
import "./hero.scss";
import { useTranslation } from "react-i18next";

export const Hero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <img
        className="hero__background"
        src={heroBackground}
        aria-hidden="true"
      />
      <div className="hero__container">
        <div className="hero__text-container">
          <h1 className="hero__title">
            <img
              src={logoTextOnly}
              className="hero__title-logo"
              alt="Guardianes ancestrales"
            />
          </h1>
          <h2 className="hero__subtitle">{t("hero.subtitle")}</h2>
        </div>
      </div>
      <Thermometer />
    </section>
  );
};
