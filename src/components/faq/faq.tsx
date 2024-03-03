import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./faq.scss";

export const Faq = (): JSX.Element => {
  const faqItems = [
    {
      title: "¿A dónde puedo enviar las donaciones?",
      answer:
        "Puedes llevar las donaciones a los eventos de tecnología en los que estamos presente, los vamos a anunciar en nuestro Instagram. También puedes enviarlos a varias direcciones físicas en Medellín-Colombia, escríbenos a nuestro instagram o al correo y coordinamos la entrega.",
    },
    {
      title: "¿Puedo donar productos de higiene personal?",
      answer:
        "Si, con excepción de copas menstruales, puedes donar cualquier producto de higiene personal.",
    },
    {
      title: "¿Puedo donar ropa usada?",
      answer: "Si, si la prenda se encuentra en buen estado.",
    },
    {
      title: "¿Puedo donar ropa para diferentes edades?",
      answer: "Si, también puedes donar ropa para adultos.",
    },
    {
      title: "¿Puedo donar solo un libro?",
      answer:
        "Claro que si! Todas las ayudas suman, si tienes un libro, un cuaderno que no usas, una calculadora, una camisa, cada elemento suma.",
    },
    {
      title: "¿Qué tipo de libros puedo donar?",
      answer:
        "Todo tipo de libros, el objetivo es dejar una biblioteca para los niños dado que ellos no tienen acceso a este tipo de material educativo, algunas ideas son: libros de matemáticas, ciencia, tecnología, literatura, material educativo para que los niños aprendan a leer y escribir, diccionarios.",
    },
    {
      title: "¿Puedo donar juguetes?",
      answer:
        "Si, recibimos juguetes nuevos o usados que estén en buen estado.",
    },
    {
      title: "¿Puedo donar dinero?",
      answer:
        "Si, no importa el valor, tu aporte puede cambiar vidas. Tenemos varias alternativas para las donaciones monetarias, puedes donar a través de nuestro Vaki o Nequi utilizando este código QR.",
    },
  ];

  return (
    <section className="faq">
      <h2 className="faq__title">FAQ</h2>
      <Accordion className="faq__container" type="single" collapsible>
        {faqItems.map((item, index) => {
          return (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="faq__subtitle">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};
