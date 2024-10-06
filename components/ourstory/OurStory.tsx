"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";

const OurStory: React.FC = () => {
  const router = useRouter();
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);
  const [hasScrolledToSection, setHasScrolledToSection] = useState(false);

  const handleFullStoryClick = () => {
    router.push("/story");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start("visible");
          setHasScrolledToSection(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section
      id="OurStory"
      ref={sectionRef}
      className="relative w-full flex items-center justify-center py-24 bg-[url('/pixels.jpg')] bg-repeat"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="relative px-2 py-1 z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-auto bg-[rgba(34,34,34,0.8)] rounded-lg shadow-lg overflow-hidden"
      >
        {/* Animated Left Side Box */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { scale: 0.8 },
            visible: { scale: 1, transition: { duration: 0.8 } },
          }}
          className="w-full md:w-[380px] bg-[rgb(236,189,8)] h-[310px] p-16 mt-2 border-4 flex items-center justify-center"
        >
          <h1 className="text-[90px] text-[rgb(43,43,43)] font-nourd font-semibold leading-tight">
            <span className="text-white">OUR</span> Story
          </h1>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
          }}
          className="w-full md:w-3/4 p-8 flex flex-col justify-between space-y-6"
        >
          <p className="text-lg leading-relaxed text-neutral-300">
            Once upon a time, a group of young graduates decided to join forces
            to create something different!
            <br />
            <br />
            <strong className="text-white">“X”</strong> for unknown,{" "}
            <strong className="text-white">“Lab”</strong> for innovation; and so
            was founded Xlab in 2000.
            <br />
            <br />
            Finally, we discovered our strength:{" "}
            <span className="text-[rgb(255,228,0)]">
              The Mix of Art and Technology
            </span>
            .<br />
            <br />
            Between{" "}
            <strong className="text-[rgb(255,228,0)]">Digital tools</strong>,
            <strong className="text-[rgb(255,228,0)]">
              {" "}
              Advertising Manufacturing
            </strong>
            , and{" "}
            <strong className="text-[rgb(255,228,0)]">Creative Art</strong>,
            lied our dream.
          </p>

          {/* Button with Animation */}
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-yellow-500 hover:text-black transition-all"
              aria-label="Read the full story"
              onClick={handleFullStoryClick}
            >
              Full Story
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurStory;
