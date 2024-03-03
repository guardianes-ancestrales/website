import media from "@/assets/story-guajira.jpg";
import "./story.scss";

export const Story = (): JSX.Element => {
  const content = {
    title: "El pueblo Wayuú",
    intro:
      "Los Wayuú, o guajiros, son el pueblo indígena mas grande de colombia, mayoritariamente ubicados en La Guajira y con una población estimada de 380.000 personas.",
    description:
      "Tan solo el 11% de esta comunidad vive en cabeceras municipales, lo que significa que el acceso a la educación es limitado. Guardianes Ancestrales es una iniciativa que busca cerrar estas brechas educativas.",
  };

  return (
    <section className="story">
      <div className="story__container">
        <div className="story__media">
          <img
            src={media}
            className="story__media-image"
            alt="Guardianes ancestrales"
          />
        </div>
        <div className="story__content">
          <h2>{content.title}</h2>
          <p className="story__content-intro">{content.intro}</p>
          <p className="story__content-description">{content.description}</p>
        </div>
      </div>
    </section>
  );
};
