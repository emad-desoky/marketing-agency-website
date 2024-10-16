"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { DotBackgroundDemo } from "../test";

const OurStory: React.FC = () => {
  const router = useRouter();
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  const handleFullStoryClick = () => {
    router.push("/story");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start("visible");
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
    <DotBackgroundDemo>
      <section
        id="OurStory"
        ref={sectionRef}
        className="relative w-full flex items-center justify-center py-20"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="relative px-2 py-2 z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-auto bg-[rgba(255,255,255)] rounded-lg shadow-lg overflow-hidden"
        >
          {/* Animated Left Side Box */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scale: 0.8 },
              visible: { scale: 1, transition: { duration: 0.8 } },
            }}
            className="w-full md:w-[380px] bg-[rgb(255,228,0)] h-[300px] p-16 flex items-center justify-center"
          >
            <h1 className="text-[80px] text-[rgb(43,43,43)] font-nourd font-semibold leading-tight">
              <span className="text-white text-[105px]">OUR</span> STORY
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
            <p className="text-lg leading-tight text-black">
              Once upon a time, a group of young graduates decided to join
              forces to create something different!
              <br />
              <br />
              <strong className="text-black">“X”</strong> for unknown,{" "}
              <strong className="text-black">“Lab”</strong> for innovation; and
              so was founded Xlab in 2000.
              <br />
              <br />
              Finally, we discovered our strength:{" "}
              <span className="text-black">The Mix of Art and Technology</span>
              .<br />
              <br />
              Between <strong className="text-black">Digital tools</strong>,
              <strong className="text-black"> Advertising Manufacturing</strong>
              , and <strong className="text-black">Creative Art</strong>, lied
              our dream.
            </p>

            {/* Button with Animation */}
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[rgb(255,228,0)] text-black py-2 px-4 rounded hover:bg-[rgb(255,228,0)] hover:text-black transition-opacity"
                aria-label="Read the full story"
                onClick={handleFullStoryClick}
              >
                Full Story
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Positioned image on bottom-right */}
        <Image
          src="/element1.png"
          alt="Decorative Element"
          width={150} // Set desired size
          height={150}
          className="absolute bottom-0 right-0 z-10 lg:translate-x-28"
        />
      </section>
    </DotBackgroundDemo>
  );
};

export default OurStory;
