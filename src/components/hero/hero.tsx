import heroBackground from "../../assets/hero.jpg";
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
      <div className="hero__text-container">
        <h1 className="hero__title">{content.title}</h1>
        <h2 className="hero__subtitle">{content.subtitle}</h2>
      </div>
    </section>
  );
};
