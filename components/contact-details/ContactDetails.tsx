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
        <div className="relative w-full overflow-hidden flex flex-col items-center justify-center py-16">
          {/* Contact Details Section */}
          <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-[rgba(34,34,34,0.8)] rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="w-full md:w-1/4 bg-[rgb(255,228,0)] p-6 flex items-center justify-start md:justify-center">
              <h1
                className={cn(
                  "text-4xl font-bold text-[rgb(43,43,43)] px-10 font-nourd leading-[46px]"
                )}
              >
                CONTACT DETAILS
              </h1>
            </div>
            <div className="w-full md:w-3/4 p-8 flex flex-col justify-start space-y-6">
              <div className="flex justify-between items-center text-lg leading-relaxed text-neutral-300 space-y-2">
                {locations.map((location, index) => (
                  <React.Fragment key={location.title}>
                    <div className="text-center px-4">
                      <p className="text-[rgb(255,228,0)] font-bold text-2xl">
                        {location.title}
                      </p>
                      <p>{location.address}</p>
                    </div>
                    {index < locations.length - 1 && (
                      <div className="flex items-center justify-center px-2">
                        <div className="h-16 w-px bg-white"></div>
                        {/* Taller vertical line */}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-white mt-4 text-center">
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
