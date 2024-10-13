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
      {/* Add SEO meta tags here */}
      <Head>
        {/* Title for the home page */}
        <title>
          Tactics Digital Agency - Elevate Your Business with Digital Strategy
        </title>

        {/* Meta description */}
        <meta
          name="description"
          content="Tactics Digital Agency offers digital marketing services, including SEO, social media, and web design. Elevate your business with our tailored strategies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Tactics Digital Agency - Elevate Your Business"
        />
        <meta
          property="og:description"
          content="Discover digital marketing strategies that help businesses grow. From SEO to social media and web design, Tactics Digital Agency is your partner in success."
        />
        <meta property="og:image" content="/images/hero-banner.jpg" />
        <meta
          property="og:url"
          content="https://tactics-digital-marketing.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tactics Digital Agency - Elevate Your Business"
        />
        <meta
          name="twitter:description"
          content="Explore our digital marketing services, including SEO and web design. Boost your business with Tactics Digital Agency."
        />
        <meta name="twitter:image" content="/images/hero-banner.jpg" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://tactics-digital-marketing.vercel.app/"
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
