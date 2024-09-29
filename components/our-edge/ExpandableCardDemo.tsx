import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cards } from "./Cards"; // Adjust the path as necessary

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const cardClass =
    "relative flex flex-col items-center justify-center cursor-pointer overflow-hidden rounded-3xl shadow-lg border border-neutral-700 dark:border-neutral-800 transition-all duration-300 transform hover:scale-110 hover:shadow-xl";

  return (
    <div
      id="OurEdge"
      className="relative w-full flex items-center justify-center py-16 bg-[url('/pixels.jpg')] bg-repeat min-h-screen"
    >
      {" "}
      {/* Updated Background */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div className="bg-[rgb(43,43,43)] opacity-95 rounded-5xl shadow-lg w-[500px] h-[520px] flex items-center justify-center mr-4 mt-10 border-4 border-gray-800">
          <h2 className="text-[100px] px-[120px] font-bold text-black dark:text-neutral-200">
            OUR EDGE
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center max-w-2xl w-full py-10">
          <AnimatePresence>
            {active && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 z-10"
                />
                <div className="fixed inset-0 grid place-items-center z-[100]">
                  <motion.button
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
                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
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
                      />
                    </motion.div>
                    <div className="flex flex-col justify-between p-4 flex-grow">
                      <div>
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-semibold text-neutral-800 dark:text-neutral-200 text-lg"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-sm mt-1"
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
                        className="mt-4 px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                      >
                        {active.ctaText}
                      </motion.a>
                      <div className="pt-4 flex-grow overflow-y-auto">
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-neutral-600 text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 dark:text-neutral-400"
                          style={{ maxHeight: "200px", overflowY: "auto" }} // Adjust maxHeight as needed
                        >
                          {typeof active.content === "function"
                            ? active.content()
                            : active.content}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((card, index) => {
              const bgColor =
                (Math.floor(index / 4) + index) % 2 === 0
                  ? "bg-[rgb(0,0,0)]"
                  : "bg-[rgb(43,43,43)]";

              return (
                <motion.li
                  key={card.title}
                  layout
                  onClick={() => setActive(card)}
                  className={`${cardClass} ${bgColor}`}
                >
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={200}
                    height={200}
                    quality={70}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="w-full h-40 object-cover transition-opacity duration-300 rounded-3xl"
                  />
                  <div className="relative z-10 flex flex-col items-center p-2">
                    <h3 className="text-lg font-semibold text-white dark:text-neutral-200 text-center">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[rgb(255,228,0)] font-bold dark:text-neutral-400 text-center mt-1">
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
