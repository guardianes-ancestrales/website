import "./hero.scss";

export const Hero = (): JSX.Element => {
  return (
    <section className="py-16 hero flex items-center">
      <div className="container">
        <h1 className="hero__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc
          magna, suscipit ut tellus ut, pulvinar vestibulum justo.
        </h1>
      </div>
    </section>
  );
};
