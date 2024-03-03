import heroBackground from "../../assets/hero.jpg";
import "./hero.scss";

export const Hero = (): JSX.Element => {
  const content = {
    title: "Guardianes Ancestrales",
    subtitle:
      "Fortaleciendo el futuro a través de la educación y la tradición.",
  };
  return (
    <section className="py-16 hero flex items-center">
      <img
        className="hero__background"
        src={heroBackground}
        aria-hidden="true"
      />
      <div className="mr-6 ml-6 md:mr-8 md:ml-8 hero__text-container">
        <h1 className="mb-4 drop-shadow-md hero__title">{content.title}</h1>
        <h2 className="hero__subtitle">{content.subtitle}</h2>
      </div>
    </section>
  );
};
