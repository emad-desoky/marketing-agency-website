import dynamic from "next/dynamic";
import Head from "next/head"; // Import Head component

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

        {/* Meta description to summarize the company and what it offers */}
        <meta
          name="description"
          content="Tactics Digital Agency provides top-notch digital marketing solutions, including SEO, social media management, and web design to help businesses grow and thrive in the digital age."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph meta tags */}
        <meta
          property="og:title"
          content="Tactics Digital Agency - Elevate Your Business"
        />
        <meta
          property="og:description"
          content="Discover our innovative digital marketing strategies that help businesses succeed online. From SEO to social media and web design, Tactics Digital Agency is your partner in digital growth."
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
          content="Top digital marketing strategies to help your business succeed online. Explore our services in SEO, social media, and web design."
        />
        <meta name="twitter:image" content="/images/hero-banner.jpg" />

        {/* Add canonical tag to avoid duplicate content issues */}
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
