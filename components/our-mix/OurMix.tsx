import React, { useEffect, useState } from "react";
import imagePaths from "./ImagePaths"; // Adjust the path based on your folder structure

const OurMix = () => {
  // State for managing the images currently displayed
  const [images, setImages] = useState(imagePaths);

  useEffect(() => {
    // Function to randomly change an image in the grid
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

    // Set an interval to change the images randomly every 1 second
    const interval = setInterval(randomizeImages, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[rgb(43,43,43)] min-h-screen grid grid-cols-8 gap-0 py-10">
      {/* Row 1 */}
      <div className="col-span-8 flex h-[300px]">
        {images.slice(0, 8).map((image, index) => (
          <div key={index} className="flex-1 relative group">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-none transition-all duration-500"
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-white text-lg font-bold">{image.name}</h3>
              <p className="text-gray-300 text-sm">{image.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - 6 Pictures with box in between */}
      <div className="col-span-8 flex relative h-[300px]">
        {images.slice(8, 16).map((image, index) => (
          <div key={index} className="flex-1 relative group">
            <img
              src={image.src}
              alt={`Image ${index + 9}`}
              className="w-full h-full object-cover rounded-none transition-all duration-500"
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-white text-lg font-bold">{image.name}</h3>
              <p className="text-gray-300 text-sm">{image.position}</p>
            </div>
          </div>
        ))}
        {/* OUR MIX Box spanning two pictures */}
        <div className="absolute right-2/4 transform -translate-x-1/2 bg-[rgb(43,43,43)] rounded-lg shadow-lg w-[380px] h-full flex flex-col items-center justify-center z-10">
          <h2 className="text-[88px] font-bold text-white">OUR</h2>
          <span className="text-[88px] font-bold text-[rgb(255,228,0)]">
            MIX
          </span>
        </div>
      </div>

      {/* Row 3 - 8 Pictures */}
      <div className="col-span-8 flex h-[300px]">
        {images.slice(16, 24).map((image, index) => (
          <div key={index} className="flex-1 relative group">
            <img
              src={image.src}
              alt={`Image ${index + 15}`}
              className="w-full h-full object-cover rounded-none transition-all duration-500"
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-[rgb(255,228,0)] bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-white text-lg font-bold">{image.name}</h3>
              <p className="text-gray-300 text-sm">{image.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMix;
