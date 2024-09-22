import { TracingBeamDemo } from "@/components/about-us-data/TracingBeamDemo";
import GetInTouch from "@/components/contact-us/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <TracingBeamDemo />
      <GetInTouch />
    </>
  );
};

export default AboutUs;
