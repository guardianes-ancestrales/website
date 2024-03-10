import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./faq.scss";

export const Faq = (): JSX.Element => {
  const { t } = useTranslation();

  const faqItems = [
    "donations",
    "hygiene",
    "clothes1",
    "clothes2",
    "books1",
    "books2",
    "toys",
    "money",
  ];

  return (
    <section className="faq" id="faq">
      <h2 className="faq__title">{t("faq.title")}</h2>
      <Accordion className="faq__container" type="single" collapsible>
        {faqItems.map((item, index) => {
          return (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="faq__subtitle">
                {t(`faq.items.${item}.question`)}
              </AccordionTrigger>
              <AccordionContent>
                {t(`faq.items.${item}.answer`)}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};
