"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BoxesCoreProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const BoxesCore: React.FC<BoxesCoreProps> = ({ className, ...rest }) => {
  const rows = 150;
  const cols = 100;

  const colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
    "--dark-gray-300",
    "--yellow-bright-300",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const renderedRows = useMemo(() => {
    return Array.from({ length: rows }, (_, i) => (
      <motion.div
        key={`row-${i}`}
        className="w-16 h-8 border-l border-slate-700 relative"
      >
        {Array.from({ length: cols }, (_, j) => (
          <motion.div
            whileHover={{
              backgroundColor: `var(${getRandomColor()})`,
              transition: { duration: 0 },
            }}
            animate={{
              transition: { duration: 2 },
            }}
            key={`col-${i}-${j}`}
            className="w-16 h-8 border-r border-t border-slate-700 relative"
          >
            {j % 2 === 0 && i % 2 === 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </motion.div>
    ));
  }, [rows, cols]);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
        className
      )}
      {...rest}
    >
      {renderedRows}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
