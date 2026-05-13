import { useTranslation } from "react-i18next";
import "./sponsors.scss";

export const Sponsors = (): JSX.Element => {
  const { t } = useTranslation();

  const communities = {
    title: t("communities"),
    items: [
      {
        name: "Pioneras Developers",
        logo: "logo-pioneras.png",
        url: "https://www.instagram.com/pionerasdev/",
      },
      {
        name: "Geek Girls",
        logo: "logo-ggl.png",
        url: "https://www.instagram.com/geekgirlslatam/",
      },
      {
        name: "Pyladies",
        logo: "logo-pyladies.png",
        url: "https://www.instagram.com/pyladiesmed/",
      },
      {
        name: "DataSoul",
        logo: "logo-datasoul.png",
        url: "https://www.linkedin.com/in/datasoul-podcast-7a6895316/",
      },
    ],
  };

  const sponsorsGroup = {
    title: t("sponsors"),
    items: [
      // {
      //   name: "Colombia Dev",
      //   logo: "logo-col-dev.svg",
      //   url: "https://www.jsconf.co/",
      // },
      // {
      //   name: "Gorilla Logic",
      //   logo: "logo-gorilla-logic.png",
      //   url: "https://gorillalogic.com/",
      // },
      // {
      //   name: "Growth Acceleration Partners",
      //   logo: "logo-gap.png",
      //   url: "https://www.growthaccelerationpartners.com/",
      // },
      // {
      //   name: "SoftServe",
      //   logo: "logo-soft-serve.png",
      //   url: "https://www.softserveinc.com/",
      // },
      // {
      //   name: "Jonnathan Arias",
      //   logo: "logo-jonathan-a.png",
      //   url: "mailto:jonnathan1806@gmail.com",
      // },
      // {
      //   name: "Miguel Teheran",
      //   logo: "logo-mteheran.svg",
      //   url: "https://mteheran.dev/",
      // },
      {
        name: "MILL5",
        logo: "logo-mill5.webp",
        url: "https://www.linkedin.com/company/mill5/posts/?feedView=all",
      },
      {
        name: "Fotografer",
        logo: "logo-fotografer.jpeg",
        url: "https://www.instagram.com/fotografer_ph?igsh=MXBldHZ6bnByeHo2aQ==",
      },
      {
        name: "Juan Alvares",
        logo: "juan-alvares.jpg",
      },
    ],
  };

  function getImage(imageName: string) {
    const imageUrl = new URL(
      `../../assets/sponsors/${imageName}`,
      import.meta.url,
    ).href;

    return imageUrl;
  }

  const sections = [sponsorsGroup, communities];

  return (
    <section className="sponsors" id="sponsors">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="sponsors__title">{section.title}</h2>
          <div className="sponsors__section">
            {section.items.map((sponsor, index) => (
              <div key={index} className="sponsors__item">
                {sponsor.url ? (
                  <a href={sponsor.url} target="_blank" rel="noreferrer">
                    <img
                      className={`sponsors__logo sponsors__logo--${sponsor.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      src={getImage(sponsor.logo)}
                      alt={`${sponsor.name} logo`}
                    />
                  </a>
                ) : (
                  <img
                    className={`sponsors__logo sponsors__logo--${sponsor.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    src={getImage(sponsor.logo)}
                    alt={`${sponsor.name} logo`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
