import "./donate.scss";

export const Donate = (): JSX.Element => {
  const content = {
    title: "Apóyanos",
    description:
      "¿Quieres ser parte de este proyecto y ayudar a cambiar las vidas de los niños de las comunidades indigenas? Puedes apoyarnos de muchas formas:",
  };
  const donationList = [
    {
      title: "Dinero",
      text: `Puedes enviar donaciones económicas desde $5.000COP a través de <a href='https://vaki.co/es/vaki/Jgub9KCub7NQrS6yJjvB' target="blank">Vaki </a> o Nequi escaneando el código QR que encuentras <a href='https://guardianesancestrales.com/donar#nequi' target="blank">acá</a>.
      <br/>El dinero recaudado será invertido en la compra de elementos para la biblioteca que se donará el día del evento.`,
    },
    {
      title: "Elementos",
      text: `Dona elementos educativos, libros, juguetes, ropa, o útiles escolares. <br/>
      Para coordinar la entrega (en la ciudad de Medellín-Colombia) escríbenos a <a href="mailto:guardianesancestralesdev@gmail.com">guardianesancestralesdev@gmail.com</a> o envíanos un mensaje por <a href="https://www.instagram.com/guardianes_ancestralesdev/" target="blank">Instagram</a><br/>
      Encuentra <a href='https://guardianesancestrales.com/donar' target="blank">acá</a> una lista de ideas de cosas que puedes donar.
      `,
    },
    {
      title: "Patrocinio",
      text: `¡Buscamos empresas que deseen patrocinarnos!<br/>
      Comunícate con nosotros a través del correo <a href="mailto:guardianesancestralesdev@gmail.com">guardianesancestralesdev@gmail.com</a> para conocer los planes de patrocinio`,
    },
  ];

  return (
    <section className="donate">
      <div className="donate__container">
        <h2 className="donate__title">{content.title}</h2>
        <p className="donate__description">{content.description}</p>
        <div className="donate__list">
          {donationList.map((element, index) => {
            return (
              <div className="donate__list-item-container" key={index}>
                <div className="donate__list-item">
                  <h3 className="donate__list-item-title">
                    <span className="donate__list-item-title-decor" />
                    {element.title}
                  </h3>
                  <p
                    className="donate__list-item-description"
                    dangerouslySetInnerHTML={{ __html: element.text }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
