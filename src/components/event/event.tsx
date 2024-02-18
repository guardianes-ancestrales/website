import { Button } from "@/components/ui/button";
import logoVertical from "../../assets/logo-vertical.svg";

export const Event = (): JSX.Element => {
  return (
    <section className="py-16 container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p className="mt-4 md:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nunc magna, suscipit ut tellus ut, pulvinar vestibulum justo.
          </p>
          <p className="mt-2 md:mt-4">
            Proin vel pretium sem, sed finibus diam. Etiam a metus et massa
            aliquet condimentum. Nam rhoncus velit sit amet lacus egestas, a
            iaculis elit semper. Aliquam erat volutpat.
          </p>
          <Button className="mt-4 md:mt-6 w-40" variant="outline">
            Dona
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={logoVertical}
            className="h-96"
            alt="Guardianes ancestrales"
          />
        </div>
      </div>
    </section>
  );
};
