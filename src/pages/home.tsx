import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Story } from "@/components/story/story";
import { Event } from "@/components/event/event";
import { Donate } from "@/components/donate/donate";
import { Faq } from "@/components/faq/faq";
import { Sponsors } from "@/components/sponsors/sponsors";
import { Separator } from "@/components/separator/separator";
import { EventBanner } from "@/components/eventBanner/eventBanner";
import { LastEdition } from "@/components/lastEdition/lastEdition";

export const Home = (): JSX.Element => {
  return (
    <>
      <Navbar theme="dark" />
      <Hero />
      <EventBanner />
      <Story />
      <Separator />
      <Event />
      <Donate />
      <Faq />
      <Separator />
      <Sponsors />
      <Separator />
      <LastEdition />
    </>
  );
};
