import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import OurStory from "@/components/ourstory/OurStory";
import Achievements from "@/components/achievements/Achievements";
import TheySay from "@/components/they-say/TheySay";
import ExpandableCardDemo from "@/components/our-edge/ExpandableCardDemo";
import Partners from "@/components/partners/Partners";
import OurMix from "@/components/our-mix/OurMix";
import OurValues from "@/components/our-values/OurValues";
import ContactDetails from "@/components/contact-details/ContactDetails";
import GetInTouch from "@/components/contact-us/GetInTouch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tactics Digital</title> {/* Set the page title */}
        <meta
          name="description"
          content="WELCOME TO OUR DIGITAL AGENCY WE"
        />{" "}
        {/* Set the page description */}
        <meta property="og:title" content="TACTICS DIGITAL AGENCY." />{" "}
        {/* Open Graph title */}
        <meta
          property="og:description"
          content="A brief description of your page........"
        />{" "}
        {/* Open Graph description */}
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1727279146711-c5be10449b70?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />{" "}
        {/* Open Graph image */}
        <meta property="og:url" content="https://yourwebsite.com" />{" "}
        {/* Open Graph URL */}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        {/* Twitter card type */}
        <meta name="twitter:title" content="Your Page Title" />{" "}
        {/* Twitter title */}
        <meta
          name="twitter:description"
          content="A brief description of your page."
        />{" "}
        {/* Twitter description */}
        <meta
          name="twitter:image"
          content="https://plus.unsplash.com/premium_photo-1727279146711-c5be10449b70?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />{" "}
        {/* Twitter image */}
      </Head>

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
