import { useTranslation } from "react-i18next";
import "./sponsors.scss";

export const Sponsors = (): JSX.Element => {
  const { t } = useTranslation();

  const sponsors = [
    {
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
          name: "Digital Diaspora",
          logo: "logo-dd.png",
          url: "https://www.instagram.com/digitaldiaspora.la/",
        },
        {
          name: "Pyladies",
          logo: "logo-pyladies.png",
          url: "https://www.instagram.com/pyladiesmed/",
        },
        {
          name: "Tech Community",
          logo: "logo-tech-community.png",
          url: "https://www.instagram.com/techcommunity.col/",
        },
      ],
    },
    {
      title: t("sponsors"),
      items: [
        {
          name: "Colombia Dev",
          logo: "logo-col-dev.svg",
          url: "https://www.jsconf.co/",
        },
        {
          name: "Gorilla Logic",
          logo: "logo-gorilla-logic.png",
          url: "https://gorillalogic.com/",
        },
        {
          name: "Growth Acceleration Partners",
          logo: "logo-gap.png",
          url: "https://www.growthaccelerationpartners.com/",
        },
        {
          name: "SoftServe",
          logo: "logo-soft-serve.png",
          url: "https://www.softserveinc.com/",
        },
        {
          name: "Jonnathan Arias",
          logo: "logo-jonathan-a.png",
          url: "mailto:jonnathan1806@gmail.com",
        },
        {
          name: "Miguel Teheran",
          logo: "logo-mteheran.svg",
          url: "https://mteheran.dev/",
        },
        {
          name: "MILL5",
          logo: "logo-mill-5.png",
          url: "https://www.mill5.com/",
        },
      ],
    },
  ];

  function getImage(imageName: string) {
    const imageUrl = new URL(
      `../../assets/sponsors/${imageName}`,
      import.meta.url,
    ).href;

    return imageUrl;
  }

  return (
    <section className="sponsors" id="sponsors">
      {sponsors.map((section, index) => {
        return (
          <div key={index}>
            <h2 className="sponsors__title">{section.title}</h2>
            <div className="sponsors__section">
              {section.items.map((sponsor, index) => {
                return (
                  <div key={index} className="sponsors__item">
                    <a href={sponsor.url} target="_blank">
                      <img
                        src={getImage(sponsor.logo)}
                        alt={`${sponsor.name} logo`}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
