import React, { ReactNode } from "react";

export function DotBackgroundDemo({ children }: { children: ReactNode }) {
  return (
    <div className="h-auto w-full dark:bg-black bg-[rgb(255,228,0)] dark:bg-dot-white/[5] bg-dot-black/[5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[rgb(255,228,0)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* Content goes inside */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
