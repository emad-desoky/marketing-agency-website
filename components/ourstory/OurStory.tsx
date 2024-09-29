"use client";
import React from "react";
import { useRouter } from "next/router";

const OurStory: React.FC = () => {
  const router = useRouter();

  const handleFullStoryClick = () => {
    router.push("/story"); // Ensure this route exists
  };

  return (
    <section
      id="OurStory"
      className="relative w-full flex items-center justify-center py-24 bg-[url('/pixels.jpg')] bg-repeat" // Keeping the original background
    >
      <div className="relative px-2 py-1 z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-auto bg-[rgba(34,34,34,0.8)] rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-[380px] bg-[rgb(236,189,8)] h-[310px] p-16 mt-2 border-4 flex items-center justify-center">
          <h1 className="text-[90px] text-[rgb(43,43,43)] font-nourd font-semibold leading-tight">
            <span className="text-white">OUR</span> Story
          </h1>
        </div>

        <div className="w-full md:w-3/4 p-8 flex flex-col justify-between space-y-6">
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

          <div className="flex justify-end">
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-transform transform hover:scale-105"
              aria-label="Read the full story"
              onClick={handleFullStoryClick}
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
