import { useTranslation } from "react-i18next";
import guajira2024 from "@/assets/pictures/LaGuajira-2024.png";
import alejandria2025 from "@/assets/pictures/libro-alejandria-2025.png";
import starlink2026 from "@/assets/pictures/entrega-starlink-2026.png";
import "./lastEdition.scss";

type EditionMedia =
  | { type: "image"; src: string; position?: string }
  | { type: "video"; src: string };

interface Edition {
  year: string;
  media: EditionMedia;
  location: string;
  description: string;
}

export const LastEdition = (): JSX.Element => {
  const { t } = useTranslation();

  const editions: Edition[] = [
    {
      year: "2026",
      media: { type: "image", src: starlink2026 },
      location: t("about.lastEdition.edition3.location"),
      description: t("about.lastEdition.edition3.description"),
    },
    {
      year: "2025",
      media: { type: "image", src: alejandria2025, position: "top center" },
      location: t("about.lastEdition.edition2.location"),
      description: t("about.lastEdition.edition2.description"),
    },
    {
      year: "2024",
      media: { type: "image", src: guajira2024 },
      location: t("about.lastEdition.edition1.location"),
      description: t("about.lastEdition.edition1.description"),
    },
    {
      year: "2021–2022",
      media: {
        type: "video",
        src: "https://www.youtube.com/embed/rqLdIDUGiw4?si=BSE9Gq_btRI1qoWi",
      },
      location: t("about.lastEdition.edition0.location"),
      description: t("about.lastEdition.edition0.description"),
    },
  ];

  return (
    <section className="last-edition">
      <div className="last-edition__container">
        <h2 className="last-edition__title">{t("about.lastEdition.title")}</h2>
        <div className="last-edition__grid">
          {editions.map((edition) => (
            <div key={edition.year} className="last-edition__card">
              <div className="last-edition__card-media">
                {edition.media.type === "video" ? (
                  <>
                    <iframe
                      src={edition.media.src}
                      title={edition.location}
                      className="last-edition__card-video"
                      style={{ border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                    <span className="last-edition__card-year">
                      {edition.year}
                    </span>
                  </>
                ) : (
                  <>
                    <img
                      src={edition.media.src}
                      alt={edition.location}
                      className="last-edition__card-image"
                      style={
                        edition.media.type === "image" && edition.media.position
                          ? { objectPosition: edition.media.position }
                          : undefined
                      }
                    />
                    <div className="last-edition__card-overlay">
                      <span className="last-edition__card-year">
                        {edition.year}
                      </span>
                      <h3 className="last-edition__card-location">
                        {edition.location}
                      </h3>
                    </div>
                  </>
                )}
              </div>
              <div className="last-edition__card-content">
                {edition.media.type === "video" && (
                  <h3 className="last-edition__card-location--below">
                    {edition.location}
                  </h3>
                )}
                <p className="last-edition__card-description">
                  {edition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
