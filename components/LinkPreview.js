// components/LinkPreview.js

import Link from "next/link";

const LinkPreview = ({ title, description, imageUrl, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="text-black w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
      style={{
        textDecoration: "none",
      }}
    >
      <div className="object-cover h-full">
        <img
          src={imageUrl}
          alt="Link Preview"
          className="object-cover h-full w-[340px] m-0"
        />
      </div>
      <div className="p-4 w-[60%]">
        <h3 className="text-3xl font-bold leading-[2rem] mb-2 ">{title}</h3>
        <p className="text-base line-clamp-3 mb-2 ">{description}</p>
        <span className="mt-3 opacity-50 text-xs">&nbsp;{link}</span>
      </div>
    </Link>
  );
};

export default LinkPreview;
