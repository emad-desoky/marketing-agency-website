import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick"; // Hook to detect outside clicks
import { cards } from "./Cards"; // Adjust the path as necessary
import ReactDOM from "react-dom"; // Import ReactDOM for portals
import classNames from "classnames";
import { Button } from "../ui/MovingBorders";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const [loading, setLoading] = useState(true); // Loading state for images
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Use useInView hook to detect if the section is in view
  const inViewRef = useRef(null); // Create a ref for the section
  const inView = useInView(inViewRef, {
    once: true, // Only trigger the animation once
    margin: "0px 0px -20% 0px", // Adjust margins as needed
  });

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    if (active) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Disable scroll when modal is active
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  // Close modal on outside click
  useOutsideClick(ref, () => setActive(null));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 } // Adjust this value based on when you want the animation to start
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cardClass =
    "relative flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-3xl shadow-lg border transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-opacity-90";

  return (
    <BackgroundBeamsWithCollision>
      <div
        id="OurEdge"
        ref={sectionRef}
        className="App relative w-full flex leading-tight flex-col items-start justify-start py-24 bg-gradient-to-b from-[rgba(43,43,43,0.7)] via-[rgba(58,48,48,0.20)] to-[rgba(41,34,34,0.7)] min-h-[80px]"
      >
        <motion.div
          ref={inViewRef} // Attach the inView ref here
          initial={{ opacity: 0, y: 20 }} // Initial state before in view
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible
          exit={{ opacity: 0, y: 20 }} // Exit animation
          transition={{ duration: 0.5 }} // Duration for entrance and exit
        >
          <div className="relative z-20 flex items-start justify-start w-full max-w-full px-10 space-x-4">
            {/* Title Card */}
            <Button
              id={Math.random}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="2rem"
              className="flex-1 text-white border-[rgb(43,43,43)] mt-[5px]"
            >
              <motion.div
                initial={{ scale: 0.8 }} // Initial scale for entrance animation
                animate={
                  isVisible
                    ? { opacity: 1, x: 0, scale: 1 }
                    : { opacity: 0, x: -100, scale: 1 }
                } // Conditional animation
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-[110px] font-nourd text-[rgb(255,228,0)] dark:text-neutral-200 leading-[100px]">
                  <span className="text-white">OUR</span> EDGE
                </h2>
              </motion.div>
            </Button>

            {/* </motion.div> */}
            {/* Cards Section */}
            <div className="flex flex-wrap justify-start gap-6 w-auto max-w-full">
              <AnimatePresence>
                {active && (
                  <>
                    {/* Create a backdrop with blur effect */}
                    {ReactDOM.createPortal(
                      <>
                        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-[50]" />
                        <div className="fixed inset-0 grid place-items-center z-[100]">
                          {/* Close button for mobile */}
                          <motion.button
                            aria-label="Close"
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                              opacity: 0,
                              transition: { duration: 0.05 },
                            }}
                            className="absolute top-2 right-2 lg:hidden bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                          >
                            {/* Add CloseIcon here if needed */}
                          </motion.button>

                          {/* Modal Window */}
                          <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[1100px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden z-[200]" // Increase the max height
                            initial={{ scale: 0 }} // Scale down for entrance
                            animate={{ scale: 1 }} // Scale to normal on entrance
                            exit={{ scale: 0 }} // Scale down on exit
                            transition={{ duration: 0.5 }} // Duration for scale animation
                          >
                            {/* Swiper for images */}
                            <motion.div
                              layoutId={`image-${active.title}-${id}`}
                            >
                              <Swiper
                                spaceBetween={10} // Space between slides
                                pagination={{ clickable: true }} // Enable pagination
                                navigation // Enable navigation buttons
                                loop // Enable looping of slides
                                className="mySwiper" // Custom class for styling
                              >
                                {active.images.map((image, index) => (
                                  <SwiperSlide key={index}>
                                    <Image
                                      priority
                                      objectFit="contain"
                                      width={50}
                                      height={50} // Update this value to increase the height
                                      src={image}
                                      alt={`${active.title} image ${index + 1}`}
                                      quality={80}
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      className="w-full h-[400px] lg:h-[480px] sm:rounded-tr-lg sm:rounded-tl-lg object-fill object-top" // Adjusted height for mobile and desktop
                                      onLoadingComplete={() =>
                                        setLoading(false)
                                      } // Update loading state
                                      onError={(e) =>
                                        (e.currentTarget.src =
                                          "/path/to/fallback/image.jpg")
                                      } // Error handling
                                    />
                                    {loading && (
                                      <div className="loader">Loading...</div>
                                    )}
                                    {/* Loader or placeholder */}
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </motion.div>

                            {/* Modal Content */}
                            <div className="flex flex-col justify-between p-4 flex-grow overflow-auto">
                              <div>
                                <motion.h3
                                  layoutId={`title-${active.title}-${id}`}
                                  className="font-semibold text-white dark:text-neutral-200 text-lg"
                                >
                                  {active.title}
                                </motion.h3>
                                <motion.p
                                  layoutId={`description-${active.description}-${id}`}
                                  className="text-white dark:text-white text-sm mt-1"
                                >
                                  {active.description}
                                </motion.p>
                              </div>

                              <motion.a
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                href={active.ctaLink}
                                target="_blank"
                                className="mt-4 px-4 py-2 text-sm rounded-full font-bold bg-[rgb(255,228,0)] text-black"
                              >
                                {active.ctaText}
                              </motion.a>

                              {/* Card Content */}
                              <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-white text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 dark:text-neutral-400"
                                style={{
                                  maxHeight: "300px", // Increase maxHeight for more content visibility
                                  overflowY: "auto",
                                }}
                              >
                                {typeof active.content === "function"
                                  ? active.content()
                                  : active.content}
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </>,
                      document.body // Render the modal to the body
                    )}
                  </>
                )}
              </AnimatePresence>

              {/* Display all cards */}
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-[80px]">
                {cards.map((card, index) => {
                  const bgColor =
                    (Math.floor(index / 4) + index) % 2 === 0
                      ? "bg-gradient-to-r from-[rgb(255,228,0)] via-[rgb(255,228,0)] to-[rgb(255,228,0)] border-t border-[rgb(255,228,0)]"
                      : "bg-gradient-to-r from-[rgb(255,228,0)] via-[rgb(255,228,0)] to-[rgb(255,228,0)] border-t border-[rgb(255,228,0)]";

                  return (
                    <motion.li
                      key={card.title}
                      layout
                      onClick={() => setActive(card)}
                      className={classNames(
                        cardClass,
                        bgColor,
                        "w-[200px] h-[200px] " // Updated dimensions for smaller and wider cards
                      )}
                      initial={{ opacity: 0, y: 20 }} // Initial state before in view
                      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible
                      exit={{ opacity: 0, y: 20 }} // Exit animation
                      transition={{ duration: 0.5 }} // Duration for entrance and exit
                    >
                      <Image
                        src={card.src}
                        alt={card.title}
                        width={350} // Updated width for the image
                        height={125} // Updated height for the image
                        quality={70}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="w-full h-32 object-cover transition-opacity duration-300 rounded-3xl"
                        onError={(e) =>
                          (e.currentTarget.src = "/path/to/fallback/image.jpg")
                        } // Error handling
                      />
                      <div className="relative z-10 flex flex-col items-center p-4">
                        <h3 className="text-xl font-bold text-green-900 text-center leading-tight tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-xs text-black font-bold leading-tight tracking-tight text-center mt-1">
                          {card.description}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
                <div
                  className="text-white text-lg md:text-xl font-semibold mt-12 justify-end"
                  style={{
                    minHeight: "2.5em", // Adjust this value based on the font size
                    minWidth: "0em", // Adjust this value to fit the longest text
                    overflow: "hidden", // Ensure no content spills over
                  }}
                ></div>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
