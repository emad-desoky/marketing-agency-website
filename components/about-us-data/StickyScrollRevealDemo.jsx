"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Performance Excellence",
    description:
      "At TACTICS®, we excel in translating strategic vision into tangible results. Our dedicated team of digital marketing planners, media buyers, graphic designers, content creators, digital strategists, and technologists collaborate seamlessly to craft innovative campaigns that drive measurable outcomes. We are driven by a relentless pursuit of performance, focusing on enhancing conversion rates, expanding organic reach, and optimizing ROI for our clients.",
    content: (
      <div className="h-full w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Performance Excellence
      </div>
    ),
  },
  {
    title: "About us",
    description:
      "TACTICS® is a fully integrated 360° digital marketing agency renowned for its performance-driven approach. Since our inception in 2018, we have established ourselves as industry leaders, founded by a team of digital experts committed to delivering tailored solutions that align perfectly with your budget, timeline, and quality standards. Specializing primarily in real estate marketing solutions, we offer an extensive array of services designed to elevate your real estate company's online presence and market performance",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/AboutUs.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Strategic Insight",
    description:
      "With deep industry knowledge and a commitment to strategic thought, TACTICS® blends expertise from various disciplines to deliver precise and impactful results. We leverage unique market insights and cutting-edge technologies to stay ahead of industry trends, ensuring that our clients receive unparalleled service and value.",
    content: (
      <div className="h-full font-nourd text-xl w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Strategic Insight
      </div>
    ),
  },
  {
    title: "Mission",
    description:
      "Our mission is to empower businesses through data-driven digital strategies that maximize growth and exceed expectations. We are dedicated to providing superior quality deliverables that set new standards in digital marketing excellence.",
    content: (
      <div className="h-full w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Mission
      </div>
    ),
  },
  {
    title: "Vision",
    description:
      "Our vision is To redefine digital marketing by consistently delivering exceptional performance and innovation, becoming the trusted partner of choice for businesses seeking transformative growth in the digital landscape.",
    content: (
      <div className="h-full w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Vision
      </div>
    ),
  },
  {
    title: "Core Values",
    description:
      "● Performance Excellence: We are driven by measurable results and continuous improvement.● Innovation: We embrace creativity and innovation to stay ahead of the curve. ● Integrity: We uphold the highest ethical standards in all our interactions. ● Collaboration: We foster a collaborative environment to harness collective expertise.● Client-Centricity: Our clients' success is at the heart of everything we do.",
    content: (
      <div className="h-full w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Core Values
      </div>
    ),
  },
  {
    title: "CEO Message",
    description:
      "As CEO of TACTICS®, I am proud to lead a team of passionate professionals dedicated to driving impactful results for our clients. We are committed to leveraging our expertise and strategic insights to navigate the complexities of digital marketing with agility and innovation. Our goal is to empower businesses to thrive in an increasingly competitive digitallandscape.",
    content: (
      <div className="h-full p-4 w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        CEO Message
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
