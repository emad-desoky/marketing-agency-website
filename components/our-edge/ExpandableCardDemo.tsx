import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cards } from "./Cards"; // Adjust the path as necessary
import ReactDOM from "react-dom"; // Import ReactDOM for portals
import classNames from "classnames";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const [loading, setLoading] = useState(true); // Loading state for images
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = active ? "hidden" : "auto";

    // Cleanup blur effect on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const cardClass =
    "relative flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-3xl shadow-lg border border-neutral-700 dark:border-neutral-800 transition-all duration-300 transform hover:scale-110 hover:shadow-xl bg-opacity-90";

  return (
    <div
      id="OurEdge"
      className="relative w-full flex leading-tight flex-col items-start justify-start py-16 bg-[url('https://t4.ftcdn.net/jpg/03/14/05/87/360_F_314058713_HGBgljEmqYzaepE4RvkcvHl7FybCf94m.jpg')] bg-no-repeat bg-cover bg-left min-h-screen"
    >
      <div className="relative z-20 flex items-start justify-start w-full max-w-full px-8">
        <motion.div className="bg-[rgb(236,189,8)] opacity-95 rounded-5xl shadow-lg w-[500px] h-[300px] flex items-center mt-72 justify-start mr-8 border-4 border-white ">
          <h2 className="text-[110px] ml-20 font-nourd text-black dark:text-neutral-200 ">
            <span className="text-white">OUR</span> EDGE
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-start gap-6 w-auto max-w-full">
          <AnimatePresence>
            {active && (
              <>
                {/* Create a backdrop with blur effect */}
                {ReactDOM.createPortal(
                  <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[50]" />
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                      <motion.button
                        aria-label="Close"
                        key={`button-${active.title}-${id}`}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.05 } }}
                        className="absolute top-2 right-2 lg:hidden bg-white rounded-full h-6 w-6"
                        onClick={() => setActive(null)}
                      >
                        {/* Add CloseIcon here */}
                      </motion.button>
                      <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-black dark:bg-neutral-900 sm:rounded-3xl overflow-hidden z-[200]"
                      >
                        <motion.div layoutId={`image-${active.title}-${id}`}>
                          <Image
                            priority
                            width={200}
                            height={200}
                            src={active.src}
                            alt={active.title}
                            quality={80}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                            onLoadingComplete={() => setLoading(false)} // Update loading state
                            onError={(e) =>
                              (e.currentTarget.src =
                                "/path/to/fallback/image.jpg")
                            } // Error handling
                          />
                          {loading && <div className="loader">Loading...</div>}{" "}
                          {/* Loader or placeholder */}
                        </motion.div>
                        <div className="flex flex-col justify-between p-4 flex-grow">
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
                          <div className="pt-4 flex-grow overflow-y-auto">
                            <motion.div
                              layout
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-white text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 dark:text-neutral-400"
                              style={{ maxHeight: "200px", overflowY: "auto" }}
                            >
                              {typeof active.content === "function"
                                ? active.content()
                                : active.content}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </>,
                  document.body // Render the modal to the body
                )}
              </>
            )}
          </AnimatePresence>

          {/* Cards with updated dimensions */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {cards.map((card, index) => {
              const bgColor =
                (Math.floor(index / 4) + index) % 2 === 0
                  ? "light-gradient"
                  : "dark-gradient";

              return (
                <motion.li
                  key={card.title}
                  layout
                  onClick={() => setActive(card)}
                  className={classNames(
                    cardClass,
                    bgColor,
                    "w-[320px] h-[250px] shadow-2xl shadow-black bg-black"
                  )}
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={300}
                    height={150}
                    quality={70}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="w-full h-50 object-cover transition-opacity duration-300 rounded-3xl"
                    onError={(e) =>
                      (e.currentTarget.src = "/path/to/fallback/image.jpg")
                    } // Error handling
                  />
                  <div className="relative z-10 flex flex-col items-center p-7">
                    <h3 className="text-lg font-semibold text-white dark:text-neutral-200 text-center font-nourd leading-tight tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[rgb(255,228,0)] font-bold dark:text-neutral-400 leading-tight tracking-tight font-nourd text-center mt-1">
                      {card.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
