import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component
import imagePaths from "./ImagePaths"; // Adjust the path based on your folder structure

const OurMix = () => {
  const [images, setImages] = useState(imagePaths);

  useEffect(() => {
    const randomizeImages = () => {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const randomIndex = Math.floor(Math.random() * newImages.length);
        const randomImage =
          imagePaths[Math.floor(Math.random() * imagePaths.length)];
        newImages[randomIndex] = randomImage;
        return newImages;
      });
    };

    const interval = setInterval(randomizeImages, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="OurMix"
      className="bg-[rgb(43,43,43)] min-h-screen grid grid-cols-8 gap-0 py-10 sm:grid-cols-4 xs:grid-cols-2"
    >
      {/* Row 1 - 6 Images */}
      <div className="col-span-8 sm:col-span-4 xs:col-span-2 flex h-[300px] flex-wrap">
        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className="flex-1 relative group sm:w-1/2 xs:w-full h-[150px] sm:h-[200px] md:h-[300px]"
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-none transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Responsive sizes
              quality={75} // Optimize quality
              placeholder="blur" // Placeholder for loading
              blurDataURL={image.src} // Use a low-quality version for blur
              loading="lazy" // Enable lazy loading
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-black text-lg font-bold mt-40 font-nourd">
                {image.name}
              </h3>
              <p className="text-gray-300 text-sm font-nourd leading-3">
                {image.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - 6 Images with "OUR MIX" Box */}
      <div className="col-span-8 sm:col-span-4 xs:col-span-2 flex relative h-[300px] flex-wrap">
        {images.slice(6, 12).map((image, index) => (
          <div
            key={index}
            className="flex-1 relative group sm:w-1/2 xs:w-full h-[150px] sm:h-[200px] md:h-[300px]"
          >
            <Image
              src={image.src}
              alt={`Image ${index + 7}`}
              layout="fill"
              objectFit="cover"
              className="rounded-none transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              quality={75}
              placeholder="blur"
              blurDataURL={image.src}
              loading="lazy" // Enable lazy loading
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-black text-lg mt-40 font-bold font-nourd leading-3">
                {image.name}
              </h3>
              <p className="text-black text-sm font-nourd">{image.position}</p>
            </div>
          </div>
        ))}

        {/* "OUR MIX" Box spanning two pictures */}
        <div className="absolute right-2/4 transform -translate-x-1/2 bg-[rgb(43,43,43)] rounded-lg shadow-lg w-[300px] sm:w-[350px] md:w-[380px] h-full flex flex-col items-center justify-center z-10">
          <h2 className="text-[44px] sm:text-[64px] md:text-[88px] font-bold text-black font-nourd leading-tight tracking-tight">
            OUR
          </h2>
          <span className="text-[44px] sm:text-[64px] md:text-[88px] font-bold text-[rgb(255,228,0)] font-nourd tracking-tight leading-tight">
            MIX
          </span>
        </div>
      </div>

      {/* Row 3 - 3 Images */}
      <div className="col-span-8 sm:col-span-4 xs:col-span-2 flex h-[300px] flex-wrap">
        {images.slice(12, 15).map((image, index) => (
          <div
            key={index}
            className="flex-1 relative group sm:w-1/2 xs:w-full h-[150px] sm:h-[200px] md:h-[300px]"
          >
            <Image
              src={image.src}
              alt={`Image ${index + 13}`}
              layout="fill"
              objectFit="cover"
              className="rounded-none transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              quality={75}
              placeholder="blur"
              blurDataURL={image.src}
              loading="lazy" // Enable lazy loading
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-black leading-3 font-nourd text-lg font-bold mt-40">
                {image.name}
              </h3>
              <p className="text-black text-sm">{image.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMix;
