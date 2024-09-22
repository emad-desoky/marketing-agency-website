import React, { useEffect, useState } from "react";
import Image from "next/image";

const achievementsData = [
  {
    title: "sqm Outdoor Signs",
    target: 500,
  },
  {
    title: "Shops Branded",
    target: 600,
  },
  {
    title: "Campaigns",
    target: 500,
  },
  {
    title: "Happy Clients",
    target: 500,
  },
  {
    title: "Online Spending",
    target: 150,
  },
  {
    title: "Published Websites",
    target: 200,
  },
  {
    title: "Digital Projects",
    target: 500,
  },
  {
    title: "Xlab Family",
    target: 303,
  },
];

const Achievements = () => {
  return (
    <div className="bg-black p-20 space-y-12">
      {" "}
      {/* Added space-y-8 for vertical spacing */}
      <div className="grid grid-cols-4 gap-12 py-7">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="text-center text-white flex flex-col items-center"
          >
            <Image
              src="/client2.png" // Correct path to the image
              alt={achievement.title}
              width={100} // Set desired width
              height={100} // Set desired height
              className="mb-4"
            />
            <Counter target={achievement.target} />
            <h2 className="mt-2 text-lg">{achievement.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 100;
    const end = target;
    const duration = 0.1; // Adjust duration for animation speed
    const incrementTime = (duration / end) * 1; // Update every incrementTime milliseconds

    const interval = setInterval(() => {
      if (start < end) {
        start++;
        setCount(start);
      } else {
        clearInterval(interval);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [target]);

  return <h1 className="text-4xl font-bold">{count}</h1>;
};

export default Achievements;
