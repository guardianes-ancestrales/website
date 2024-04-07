import nequiQR from "@/assets/pictures/qr-code-nequi.png";
import "./donateDetails.scss";

export const DonateDetails = (): JSX.Element => {
  const donateItems = [
    "Libros(ciencia, matematicas, español..)",
    "Ropa",
    "Calculadoras",
    "Tablets",
    "Binoculares",
    "Telescopio",
    "Lapiceros",
    "Lapices",
    "Colores",
    "Borradores",
    "Sacapuntas",
    "Legos",
    "Globo mapa mundi",
    "Computadores o recursos tecnológicos",
    "Microescopio",
    "Lupas",
    "Atlas geográfico",
    "Cuadernos y libretas",
    "Bolsos",
    "uegos didácticos para el aprendizaje interactivo",
    "Mapas físicos y políticos",
    "Material didáctico para aprender matemáticas, como regletas y juegos Geometrico",
    "Rompecabezas con temáticas educativas",
    "Marcadores",
    "Kits de arte y manualidades",
    "Diccionarios",
    "Cuentos y libros de literatura infantil",
    "Linternas solares para facilitar el estudio en áreas con poca luz",
    "Enciclopedias infantiles",
    "Juegos de mesa que fomenten el pensamiento estratégico y la resolución de problemas",
    "Globos terráqueos interactivos con información geográfica y cultural",
    "Tijeras escolares de punta roma",
    "Pegamento en barra",
    "Blocs de dibujo y pintura",
    " Crayones",
  ];

  const content = {
    title: "Donar",
    description: "Descubre como puedes ser parte de este proyecto:",
    donations: {
      title: "Donaciones físicas",
      description: "Algunas ideas de elementos que puedes donar:",
    },
    money: {
      title: "Donaciones económicas",
      vaki: {
        title: "Vaki",
        description: "Dona desde $5.000COP a través de Vaki",
      },
      nequi: {
        title: "Nequi",
        description: "Dona a través de Nequi utilizando el siguiente código QR",
      },
    },
    sponsor: {
      title: "Patrocina",
      description: `¡Buscamos empresas que deseen patrocinarnos!<br/>
      Comunícate con nosotros a través del correo <a href="mailto:guardianesancestralesdev@gmail.com">guardianesancestralesdev@gmail.com</a> para conocer los planes de patrocinio.`,
    },
  };

  return (
    <div className="donate-details">
      <h1 className="donate-details__title">{content.title}</h1>
      <p className="donate-details__description-main">{content.description}</p>

      {/* donate items */}
      <section className="donate-details__section">
        <h2 className="donate-details__subtitle">{content.donations.title}</h2>
        <p className="donate-details__description">
          {content.donations.description}
        </p>
        <ul className="donate-details__list">
          {donateItems.map((item) => {
            return <li className="donate-details__list-item">{item}</li>;
          })}
        </ul>
      </section>

      {/* donate money */}
      <section className="donate-details__section">
        <h2 className="donate-details__subtitle">{content.money.title}</h2>
        {/* vaki */}
        <div>
          <h3 className="donate-details__subtitle-small">
            {content.money.vaki.title}
          </h3>
          <p className="donate-details__description">
            {content.money.vaki.description}
          </p>
          <iframe
            id="vakiIframe"
            title="Guardianes Ancestrales"
            src="https://vaki.co/iframe/Jgub9KCub7NQrS6yJjvB"
            className="donate-details__iframe"
          ></iframe>
        </div>

        {/* nequi */}
        <div>
          <h3 className="donate-details__subtitle-small" id="nequi">
            {content.money.nequi.title}
          </h3>
          <p className="donate-details__description">
            {content.money.nequi.description}
          </p>
          <img src={nequiQR} className="donate-details__qr" />
        </div>
      </section>

      {/* become a sponsor */}
      <section className="donate-details__section">
        <h2 className="donate-details__subtitle">{content.sponsor.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: content.sponsor.description }} />
      </section>
    </div>
  );
};
