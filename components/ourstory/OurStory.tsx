"use client";
import React from "react";
import { useRouter } from "next/router"; // Import useRouter
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

const OurStory: React.FC = () => {
  const router = useRouter(); // Initialize router
  const backgroundGradient =
    "bg-gradient-to-r from-[rgb(43,43,43)] via-[rgb(255,228,0)] to-[rgb(43,43,43)]";
  const titleClasses = cn("text-4xl font-bold text-black");
  const descriptionClasses = "text-lg leading-relaxed text-neutral-300";

  const handleFullStoryClick = () => {
    router.push("/story"); // Navigate to the "story" page
  };

  return (
    <section
      id="OurStory"
      className={`relative w-full overflow-hidden ${backgroundGradient} flex items-center justify-center py-16`}
    >
      <div
        className={`absolute inset-0 w-full h-full ${backgroundGradient} z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none`}
      />
      <Boxes className="absolute inset-[-250px] z-20" />

      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-[rgb(34,34,34)] rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/4 bg-[rgb(255,228,0)] p-6 flex items-center justify-start md:justify-center">
          <h1 className={titleClasses}>Our Story</h1>
        </div>

        <div className="w-full md:w-3/4 p-8 flex flex-col justify-between space-y-4">
          <p className={descriptionClasses}>
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
            .
            <br />
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

          <div className="flex justify-end">
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-all"
              aria-label="Read the full story"
              onClick={handleFullStoryClick} // Add onClick handler
            >
              Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
