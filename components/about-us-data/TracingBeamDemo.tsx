"use client";
import React from "react";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import { StickyScrollRevealDemo } from "./StickyScrollRevealDemo";

export function TracingBeamDemo() {
  return (
    // Outer wrapper div with background color for the whole component
    <TracingBeam>
      <StickyScrollRevealDemo />
    </TracingBeam>
  );
}

// const dummyContent = [
//   {
//     title: "About Us",
//     description: (
//       <>
//         <p>
//           TACTICS® is a fully integrated 360° digital marketing agency renowned
//           for its performance-driven approach. Since our inception in 2018, we
//           have established ourselves as industry leaders, founded by a team of
//           digital experts committed to delivering tailored solutions that align
//           perfectly with your budget, timeline, and quality standards.
//           Specializing primarily in real estate marketing solutions, we offer an
//           extensive array of services designed to elevate your real estate
//           company&#39;s online presence and market performance.
//         </p>
//       </>
//     ),
//     badge: "React",
//     image: "/AboutUs.jpg",
//   },
//   {
//     title: "Performance Excellence",
//     description: (
//       <>
//         <p>
//           At TACTICS®, we excel in translating strategic vision into tangible
//           results. Our dedicated team of digital marketing planners, media
//           buyers, graphic designers, content creators, digital strategists, and
//           technologists collaborate seamlessly to craft innovative campaigns
//           that drive measurable outcomes. We are driven by a relentless pursuit
//           of performance, focusing on enhancing conversion rates, expanding
//           organic reach, and optimizing ROI for our clients.
//         </p>
//       </>
//     ),
//     badge: "Changelog",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Strategic Insight",
//     description: (
//       <>
//         <p>
//           With deep industry knowledge and a commitment to strategic thought,
//           TACTICS® blends expertise from various disciplines to deliver precise
//           and impactful results. We leverage unique market insights and
//           cutting-edge technologies to stay ahead of industry trends, ensuring
//           that our clients receive unparalleled service and value.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//     image:
//       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Mission",
//     description: (
//       <>
//         <p>
//           Our mission is to empower businesses through data-driven digital
//           strategies that maximize growth and exceed expectations. We are
//           dedicated to providing superior quality deliverables that set new
//           standards in digital marketing excellence.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//     image: "/ourmission.jpg",
//   },
//   {
//     title: "Vision",
//     description: (
//       <>
//         <p>
//           Our vision is To redefine digital marketing by consistently delivering
//           exceptional performance and innovation, becoming the trusted partner
//           of choice for businesses seeking transformative growth in the digital
//           landscape.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//   },
//   {
//     title: "Core Values",
//     description: (
//       <>
//         <ul>
//           <li>
//             ● Performance Excellence: We are driven by measurable results and
//             continuous improvement.
//           </li>
//           <li>
//             ● Innovation: We embrace creativity and innovation to stay ahead of
//             the curve.
//           </li>
//           <li>
//             ● Integrity: We uphold the highest ethical standards in all our
//             interactions.
//           </li>
//           <li>
//             ● Collaboration: We foster a collaborative environment to harness
//             collective expertise.
//           </li>
//           <li>
//             ● Client-Centricity: Our clients&#39; success is at the heart of
//             everything we do.
//           </li>
//         </ul>
//       </>
//     ),
//     badge: "Launch Week",
//   },
// ];
