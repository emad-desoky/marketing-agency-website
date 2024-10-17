import dynamic from "next/dynamic";
import Head from "next/head";

const Navbar = dynamic(() => import("@/components/navbar/Navbar"));
const Hero = dynamic(() => import("@/components/hero/Hero"));
const OurStory = dynamic(() => import("@/components/ourstory/OurStory"));
const Achievements = dynamic(
  () => import("@/components/achievements/Achievements")
);
const TheySay = dynamic(() => import("@/components/they-say/TheySay"));
const ExpandableCardDemo = dynamic(
  () => import("@/components/our-edge/ExpandableCardDemo")
);
const Partners = dynamic(() => import("@/components/partners/Partners"));
const OurMix = dynamic(() => import("@/components/our-mix/OurMix"));
const OurValues = dynamic(() => import("@/components/our-values/OurValues"));
const ContactDetails = dynamic(
  () => import("@/components/contact-details/ContactDetails")
);
const GetInTouch = dynamic(() => import("@/components/contact-us/GetInTouch"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Tactics Digital Agency</title>
        <meta
          name="description"
          content="Tactics Digital Agency for all media buying services"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Tactics Digital Agency" />
        <meta
          property="og:description"
          content="Tactics Digital Agency for all media buying services"
        />
        <meta
          property="og:image"
          content="/https://tactics-digital-agency.vercel.app/logo.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="/https://tactics-digital-agency.vercel.app/logo.jpg"
        />
        <meta name="twitter:title" content="Tactics Digital Agency" />
        <meta
          name="twitter:description"
          content="Tactics Digital Agency for all media buying services"
        />
        <meta
          name="twitter:image"
          content="/https://tactics-digital-agency.vercel.app/logo.jpg"
        />
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
