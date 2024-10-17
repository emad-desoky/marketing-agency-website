import dynamic from "next/dynamic";
import Head from "next/head";
import LinkPreview from "@/components/LinkPreview";

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
          content="https://tactics-digital-agency.vercel.app/slide1.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://marketing-agency-website-psi.vercel.app/"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Tactics Digital Agency" />
        <meta
          name="twitter:description"
          content="Tactics Digital Agency for all media buying services"
        />
        <meta
          name="twitter:image"
          content="https://tactics-digital-agency.vercel.app/slide1.png"
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

      {/* Add the LinkPreview component */}
      <div className="p-4">
        <LinkPreview
          title="Tactics Digital Agency"
          description="Tactics Digital Agency for all media buying services"
          imageUrl="https://tactics-digital-agency.vercel.app/slide1.png" // Ensure this URL is correct and accessible
          link="https://marketing-agency-website-psi.vercel.app/"
        />
      </div>
    </>
  );
}
