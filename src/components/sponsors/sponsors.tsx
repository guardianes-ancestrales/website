export const Sponsors = (): JSX.Element => {
  const sponsors = [
    {
      title: "comunidades",
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
      title: "patrocinadores",
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
    <section className="py-16 container">
      {sponsors.map((section) => {
        return (
          <div>
            <h2 className="text-center">{section.title}</h2>
            <div className="mt-4 md:mt-6 flex flex-wrap  items-center justify-center">
              {section.items.map((sponsor, index) => {
                return (
                  <div key={index} className="p-5 basis-1/2 md:basis-1/4">
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
