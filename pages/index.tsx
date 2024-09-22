import Achievements from "@/components/achievements/Achievements";
import ExpandableCardDemo from "@/components/our-edge/ExpandableCardDemo";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import { OurStory } from "@/components/ourstory/OurStory";
import Partners from "@/components/partners/Partners";
import TheySay from "@/components/they-say/TheySay";
import OurMix from "@/components/our-mix/OurMix";
import OurValues from "@/components/our-values/OurValues";
import { ContactDetails } from "@/components/contact-details/ContactDetails";
import { GetInTouch } from "@/components/contact-us/GetInTouch";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurStory />
      <Achievements />
      <TheySay />
      <ExpandableCardDemo />
      <Partners />
      <OurMix />
      <OurValues />
      <ContactDetails />
      <GetInTouch />
    </>
  );
}
