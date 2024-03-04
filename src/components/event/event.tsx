import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoIconOnly from "@/assets/logo-icon-only.svg";
import "./event.scss";

export const Event = (): JSX.Element => {
  const content = {
    title: "Guardianes Ancestrales",
    intro: "Un evento diseñado para los niños y niñas de La Guajira, Colombia.",
    description:
      "La meta de este evento es mejorar el acceso a la educación y proporcionar herramientas para fortalezer las habilidades academicas y socioemocionales de la niñez en esta comunidad. Este 27 de abril, tendremos un día de talleres interactivos y haremos entrega de donaciones.",

    donate: "Haz parte de este evento a través de tus donaciones.",
    cta: "Cómo donar",
  };

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
          <h2>{content.title}</h2>
          <p className="event__content-intro">{content.intro}</p>
          <p className="event__content-description">{content.description}</p>
          <p className="event__content-description">{content.donate}</p>
          <Link to="/donar">
            <Button className="event__content-cta">{content.cta}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
