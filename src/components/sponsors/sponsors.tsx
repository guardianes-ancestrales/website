import "./sponsors.scss";

export const Sponsors = (): JSX.Element => {
  const sponsors = [
    {
      title: "Comunidades",
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
      ],
    },
    {
      title: "Patrocinadores",
      items: [
        {
          name: "Jonnathan Arias",
          logo: "logo-jonathan-a.png",
          url: "mailto:jonnathan1806@gmail.com",
        },
        {
          name: "Colombia Dev",
          logo: "logo-col-dev.svg",
          url: "https://www.jsconf.co/",
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
