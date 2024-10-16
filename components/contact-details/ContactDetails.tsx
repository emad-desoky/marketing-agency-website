"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { DotBackgroundDemo } from "../test";

const ContactDetails: React.FC = () => {
  const locations = [
    {
      title: "ALEX.",
      address: "121, Galal EL Desouky St, Wabour El Maya",
    },
    {
      title: "CAIRO",
      address: "Smart Village, KM 28 Cairo/Alex Desert Road",
    },
    {
      title: "BOSTON",
      address: "16 Noreen RD, MANSFIELD, MA 02048 USA",
    },
  ];

  return (
    <>
      <DotBackgroundDemo>
        <div
          id="ContactDetails"
          className="relative w-full max-w-[1200px] overflow-hidden flex flex-col items-center justify-center py-32"
        >
          {/* Contact Details Section */}
          <div className="relative z-20 h-[300px] flex flex-col md:flex-row bg-[rgba(255,255,255)] rounded-lg overflow-hidden">
            <div className="w-full md:w-1/4 bg-[rgb(255,228,0)] flex items-center justify-start md:justify-center">
              <h1
                className={cn(
                  "text-[40px] md:text-[45px] font-bold text-[rgb(43,43,43)] px-4 md:px-10 font-nourd leading-[50px] md:leading-[55px] tracking-[0.09em] text-center"
                )}
              >
                <span className="text-white tracking-wide text-[35px] md:text-[40px]">
                  CONTACT{" "}
                </span>
                DETAILS
              </h1>
            </div>
            <div className="w-full md:w-3/4 p-4 md:p-16 flex flex-col justify-start space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-lg leading-relaxed text-black space-y-4 md:space-y-4">
                {locations.map((location, index) => (
                  <React.Fragment key={location.title}>
                    <div className="text-center px-4">
                      <p className="text-black font-bold text-4xl md:text-5xl">
                        {location.title}
                      </p>
                      <p className="text-sm md:text-base">{location.address}</p>
                    </div>
                    {index < locations.length - 1 && (
                      <div className="flex items-center justify-center px-2">
                        <div className="h-24 w-px bg-black"></div>
                        {/* Taller vertical line */}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-black mt-4 text-center text-sm md:text-lg">
                Call us: +20 120 795 5561
              </p>
            </div>
          </div>
          {/* Map Section */}
        </div>
      </DotBackgroundDemo>
    </>
  );
};

export default ContactDetails;
