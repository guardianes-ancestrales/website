import { Separator } from "@/components/separator/separator";
import pictureRinaPlata from "@/assets/pictures/rina-plata.jpeg";
import pictureTeam from "@/assets/pictures/team.jpg";
import "./aboutTeam.scss";

export const AboutTeam = (): JSX.Element => {
  return (
    <section className="about-team">
      <h1 className="about-team__title">¿Quienes somos?</h1>
      <p className="about-team__subtitle">¡Conócenos!</p>
      {/* about rina */}
      <div className="about-team__container">
        <div className="about-team__content">
          <h2 className="about-team__subtitle">Rina Plata</h2>{" "}
          <p>
            Rina Plata es una apasionada desarrolladora frontend, amante de los
            gatos y orgullosamente indígena Wayuu de San Juan del Cesar, La
            Guajira, Colombia, que no solo brilla en el mundo tecnológico como
            estudiante de ingeniería de software en el Tecnológico de Antioquia
            y trabajando como desarrolladora en Syspotec, sino que también es la
            fuerza impulsora detrás de esta iniciativa.{" "}
          </p>
          <p>
            {" "}
            Además de su destacado desempeño profesional, Rina es Embajadora de
            WIDS (Women in Data Science) Medellín y Women Techmakers,
            comprometida en promover la participación femenina en la ciencia de
            datos y tecnología. Es miembro activo de las comunidades Tech
            Community y PionerasDev, compartiendo valiosos conocimientos y
            experiencias.
          </p>
          <p>
            {" "}
            Guiada por su amor por su cultura y raíces, Rina lidera con orgullo
            Guardianes Ancestrales, un evento que existe gracias a su visión y
            deseo de llevar conocimiento y apoyo a su comunidad en La Guajira.
            Este proyecto está dedicado a preservar el conocimiento ancestral y
            representa un esfuerzo significativo para fortalecer los lazos
            culturales y educativos.
          </p>
          <p>
            {" "}
            Su compromiso se extiende al proyecto{" "}
            <a href="https://api-colombia.com/" target="blank">
              API Colombia
            </a>
            , donde contribuye al acceso público de información valiosa sobre el
            país a través de una API RESTful.{" "}
          </p>
          <p>
            {" "}
            Organizadora de eventos tecnológicos y ponente, Rina comparte
            generosamente su experiencia, dejando una huella inspiradora en la
            comunidad tecnológica. Su historia es un testimonio de pasión,
            dedicación y la capacidad de marcar la diferencia, no solo en el
            mundo tecnológico, sino también en el impacto positivo que puede
            tener en su propia comunidad.
          </p>
        </div>
        <div className="about-team__media">
          <img className="about-team__media-image" src={pictureRinaPlata} />
        </div>
      </div>
      <Separator />

      {/* about team */}
      <div className="about-team__container">
        <div className="about-team__media">
          <img className="about-team__media-image" src={pictureTeam} />
        </div>
        <div className="about-team__content">
          <h2 className="about-team__subtitle">Equipo</h2>{" "}
          <p>
            Detrás de Rina existe un gran equipo que trabaja cada día, de manera
            voluntaria, para apoyar esta hermosa iniciativa y llevarle alegría a
            muchos niños y niñas de La Guajira.
          </p>
          <p>
            {" "}
            Gracias infinitas a Miguel Teherán, Carolina Castañeda, Valentina
            Pinzón, Sandy Atencio, Sara Nieto, Valentina Ariza, Vrilli Castro,
            Elizabeth Rangel, Verónica Rodríguez, Kaky Rodríguez, Maris Botero,
            María "Maka" Hernández, Greysy Rodríguez, Marian Villa, Rosario
            Casas, Manuela Castrillón, Sebastián Vargas, y muchas personas más
            que día a día nos apoyan con un granito de arena.
          </p>
        </div>
      </div>
    </section>
  );
};
