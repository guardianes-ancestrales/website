export const Donate = (): JSX.Element => {
  const donationList = [
    {
      title: "Dinero",
      text: "Occaecat sunt ex commodo est ullamco mollit pariatur esse ut nostrud. Lorem officia officia Lorem amet consequat esse. ",
    },
    {
      title: "Elementos",
      text: "Occaecat sunt ex commodo est ullamco mollit pariatur esse ut nostrud. Lorem officia officia Lorem amet consequat esse. ",
    },
    {
      title: "Lista de Deseos",
      text: "Occaecat sunt ex commodo est ullamco mollit pariatur esse ut nostrud. Lorem officia officia Lorem amet consequat esse. ",
    },
    {
      title: "Patrocinio",
      text: "Occaecat sunt ex commodo est ullamco mollit pariatur esse ut nostrud. Lorem officia officia Lorem amet consequat esse. ",
    },
  ];

  return (
    <section className="p-16 container">
      <h2 className="text-center">Apoyanos</h2>
      <p className="mt-4 md:mt-6 text-center">
        Elit eiusmod voluptate esse nulla labore sint sint duis consectetur amet
        proident.
      </p>
      <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {donationList.map((element) => {
          return (
            <div className="p-3 border-solid rounded-md	bg-zinc-200 shadow-md">
              <h3 className="mb-1">{element.title}</h3>
              <p>{element.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
