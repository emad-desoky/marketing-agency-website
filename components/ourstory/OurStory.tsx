"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function OurStory() {
  return (
    <div
      id="OurStory"
      className="relative w-full overflow-hidden  bg-[rgb(255,228,0)] flex items-center justify-center py-16"
    >
      <div className="absolute inset-0 w-full h-full bg-[rgb(255,228,0)]  z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Background animation (optional) */}
      <Boxes className="absolute inset-[-250px] z-20" />

      {/* Wide Card */}
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-[rgb(34,34,34)] rounded-lg shadow-lg overflow-hidden">
        {/* Title section - 1/4 width */}
        <div className="w-full md:w-1/4 bg-[rgb(255,228,0)] p-6 flex items-center justify-start md:justify-center">
          <h1 className={cn("text-4xl font-bold text-black")}>Our Story</h1>
        </div>

        {/* Description section - 3/4 width */}
        <div className="w-full md:w-3/4 p-8 flex flex-col justify-between space-y-4">
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
            .
            <br />
            <br />
            Between{" "}
            <strong className="text-[rgb(255,228,0)]">
              Digital tools
            </strong>,{" "}
            <strong className="text-[rgb(255,228,0)]">
              Advertising Manufacturing
            </strong>
            , and{" "}
            <strong className="text-[rgb(255,228,0)]">Creative Art</strong>,
            lied our dream.
          </p>

          {/* Full Story Button */}
          <div className="flex justify-end">
            <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-all">
              Full Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
