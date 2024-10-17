// components/LinkPreview.jsx

import React from "react";
import Image from "next/image";

const LinkPreview = ({ title, description, imageUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
    >
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 bg-gray-900 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </a>
  );
};

export default LinkPreview;
