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
  const shareUrl = "https://marketing-agency-website-mu.vercel.app/";
  const whatsappMessage = encodeURIComponent("Check out our site!");
  const whatsappLink = `https://api.whatsapp.com/send?text=${whatsappMessage} ${shareUrl}`;

  return (
    <>
      <Head>
        <title>Tactics Digital</title>
        <meta name="description" content="WELCOME TO OUR DIGITAL AGENCY WE" />
        <meta property="og:title" content="TACTICS DIGITAL AGENCY." />
        <meta
          property="og:description"
          content="A brief description of your page"
        />
        <meta
          property="og:image"
          content="https://plus.unsplash.com/premium_photo-1727279146711-c5be10449b70?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" /> {/* Added og:type */}
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />{" "}
        {/* Replace with your actual App ID */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta
          name="twitter:description"
          content="A brief description of your page."
        />
        <meta
          name="twitter:image"
          content="https://plus.unsplash.com/premium_photo-1727279146711-c5be10449b70?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
      >
        Share on WhatsApp
      </a>
    </>
  );
}
