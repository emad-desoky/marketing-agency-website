// components/Section.tsx
import React from "react";
import { LampDemo } from "@/components/ui/lamp";
import { TimelineDemo } from "./TimeLineData";

const Section = () => {
  return (
    <div className="relative">
      {/* Lamp Section */}
      <div>
        <LampDemo />
      </div>

      {/* Timeline Section */}
      <div>
        <TimelineDemo />
      </div>
    </div>
  );
};

export default Section;
