import { Slider } from "@/components/about-us-data/Slider";
import { TracingBeamDemo } from "@/components/about-us-data/TracingBeamDemo";
import GetInTouch from "@/components/contact-us/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <TracingBeamDemo />
      <GetInTouch />
    </>
  );
};

export default AboutUs;
