import { LastEdition } from "@/components/lastEdition/lastEdition";
import { Navbar } from "@/components/navbar/navbar";
import { AboutTeam } from "@/components/aboutTeam/aboutTeam";
import { Separator } from "@/components/separator/separator";

export const About = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <AboutTeam />
      <Separator />
      <LastEdition />
    </>
  );
};
