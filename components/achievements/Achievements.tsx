"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const achievementsData = [
  { title: "sqm Outdoor Signs", target: 50 },
  { title: "Shops Branded", target: 60 },
  { title: "Campaigns", target: 50 },
  { title: "Happy Clients", target: 50 },
  { title: "Online Spending", target: 15 },
  { title: "Published Websites", target: 20 },
  { title: "Digital Projects", target: 50 },
  { title: "Xlab Family", target: 30 },
];

const Achievements: React.FC = () => {
  return (
    <div className="relative bg-[rgb(43,43,43)] p-6 md:p-12 lg:p-24 space-y-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/element4.jpg" // Correct path to the background image
          alt="Background Element"
          layout="fill"
          objectFit="cover" // Ensures the image covers the entire div
          className="opacity-10" // Adjust opacity as needed
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 gap-x-[0px] py-7 z-10" // Responsive grid
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
      >
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="text-center text-white flex font-nourd flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Image
              src="/client2.png" // Correct path to the image
              alt={achievement.title}
              width={100} // Adjusted width for responsiveness
              height={75} // Adjusted height for responsiveness
              className="mb-4 bg-white"
            />
            <Counter target={achievement.target} />
            <h2 className="mt-2 text-[20px] sm:text-[25px] md:text-[30px]">
              {achievement.title}
            </h2>{" "}
            {/* Responsive font size */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = target;
      const duration = 2000; // Animation duration
      const incrementTime = Math.floor(duration / end);

      const interval = setInterval(() => {
        if (start < end) {
          start++;
          setCount(start);
        } else {
          clearInterval(interval);
        }
      }, incrementTime);
    }
  }, [isVisible, target]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-[rgb(255,228,0)]">
        {count}
      </h1>{" "}
      {/* Responsive font size */}
    </motion.div>
  );
};

export default Achievements;
