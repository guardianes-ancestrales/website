import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Story } from "@/components/story/story";
import { Event } from "@/components/event/event";
import { Donate } from "@/components/donate/donate";
import { Faq } from "@/components/faq/faq";
import { Sponsors } from "@/components/sponsors/sponsors";
import { Separator } from "@/components/separator/separator";

export const Home = (): JSX.Element => {
  return (
    <>
      <Navbar theme="dark" />
      <Hero />
      <Story />
      <Separator />
      <Event />
      <Donate />
      <Faq />
      <Separator />
      <Sponsors />
    </>
  );
};
