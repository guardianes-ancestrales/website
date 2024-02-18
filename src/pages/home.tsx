import { Hero } from "../components/hero/hero";
import { Story } from "../components/story/story";
import { Event } from "../components/event/event";
import { Donate } from "../components/donate/donate";
import { Faq } from "../components/faq/faq";
import { Sponsors } from "../components/sponsors/sponsors";

export const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Story />
      <Event />
      <Donate />
      <Faq />
      <Sponsors />
    </>
  );
};
