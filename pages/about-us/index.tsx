import { Slider } from "@/components/about-us-data/Slider";
import { StickyScrollRevealDemo } from "@/components/about-us-data/StickyScrollRevealDemo";
import { TracingBeamDemo } from "@/components/about-us-data/TracingBeamDemo";
import GetInTouch from "@/components/contact-us/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

// import { StickyScrollRevealDemo } from "../../components/about-us-data/StickyScrollRevealDemo";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <StickyScrollRevealDemo />
      {/* <TracingBeamDemo /> */}
      <GetInTouch />
    </>
  );
};

export default AboutUs;
