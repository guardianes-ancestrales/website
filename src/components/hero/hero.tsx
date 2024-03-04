import { Thermometer } from "@/thermometer/thermometer";
import heroBackground from "@/assets/hero.jpg";
import logoTextOnly from "@/assets/logo-text-only.svg";
import "./hero.scss";

export const Hero = (): JSX.Element => {
  const content = {
    title: "Guardianes Ancestrales",
    subtitle:
      "Fortaleciendo el futuro de la comunidad indigena Wayuu a través de la educación y la tradición.",
  };

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
          <h2 className="hero__subtitle">{content.subtitle}</h2>
        </div>
      </div>
      <Thermometer />
    </section>
  );
};
