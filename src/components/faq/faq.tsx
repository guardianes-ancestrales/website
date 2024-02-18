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
      title:
        "Magna labore consectetur magna ipsum cillum aute excepteur eu fugiat aliqua?",
      answer:
        "Fugiat voluptate dolore sit Lorem mollit est mollit in qui proident mollit sint non. Cupidatat sit anim sint officia. Nostrud ipsum labore aliquip dolor sunt. Id pariatur aliquip dolore eiusmod reprehenderit ad minim adipisicing aliqua qui esse ipsum.",
    },
    {
      title:
        "Magna labore consectetur magna ipsum cillum aute excepteur eu fugiat aliqua?",
      answer:
        "Fugiat voluptate dolore sit Lorem mollit est mollit in qui proident mollit sint non. Cupidatat sit anim sint officia. Nostrud ipsum labore aliquip dolor sunt. Id pariatur aliquip dolore eiusmod reprehenderit ad minim adipisicing aliqua qui esse ipsum.",
    },
    {
      title:
        "Magna labore consectetur magna ipsum cillum aute excepteur eu fugiat aliqua?",
      answer:
        "Fugiat voluptate dolore sit Lorem mollit est mollit in qui proident mollit sint non. Cupidatat sit anim sint officia. Nostrud ipsum labore aliquip dolor sunt. Id pariatur aliquip dolore eiusmod reprehenderit ad minim adipisicing aliqua qui esse ipsum.",
    },
  ];

  return (
    <section className="py-16 container">
      <h2 className="text-center">FAQ</h2>
      <Accordion type="single" className="mt-4 md:mt-6" collapsible>
        {faqItems.map((element, index) => {
          return (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="faq__subtitle">
                {element.title}
              </AccordionTrigger>
              <AccordionContent>{element.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};
