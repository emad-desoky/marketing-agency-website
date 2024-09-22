"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function ContactDetails() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[rgb(43,43,43)] via-[rgb(255,228,0)] to-[rgb(43,43,43)] flex items-center justify-center py-16">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[rgb(43,43,43)] via-[rgb(255,228,0)] to-[rgb(43,43,43)] z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {/* Background animation (optional) */}
      <Boxes className="absolute inset-[-250px] z-0" />

      {/* Wide Card */}
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-[rgb(43,43,43)] rounded-lg shadow-lg overflow-hidden">
        {/* Title section - 1/4 width */}
        <div className="w-full md:w-1/4 bg-[rgb(255,228,0)] p-6 flex items-center justify-start md:justify-center">
          <h1 className={cn("text-4xl font-bold text-[rgb(43,43,43)] px-10")}>
            CONTACT DETAILS
          </h1>
        </div>

        {/* Info section - 3/4 width */}
        <div className="w-full md:w-3/4 p-8 flex flex-col justify-start space-y-6">
          {/* New contact information */}
          <div className="text-lg leading-relaxed text-neutral-300 space-y-2">
            <p className="text-[rgb(255,228,0)] font-bold text-2xl">ALEX.</p>
            <p>121, Galal EL Desouky St, Wabour El Maya</p>
            <p className="text-[rgb(255,228,0)] font-bold text-2xl">CAIRO</p>
            <p>Smart Village,KM 28 Cairo/Alex Desert Road</p>
            <p className="text-[rgb(255,228,0)]  font-bold text-2xl">BOSTON</p>
            <p>16 Noreen RD,MANSFIELD, MA 02048 USA</p>
            <p className="text-white">Call us: +20 120 795 5561</p>
          </div>
        </div>
      </div>
    </div>
  );
}
