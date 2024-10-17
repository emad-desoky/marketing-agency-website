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
        <title>Tactics Digital Agency</title> {/* Set the page title */}
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
