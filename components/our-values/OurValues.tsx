import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image"; // Import Next.js Image component

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Register the required modules
import SwiperCore from "swiper";
import { px } from "framer-motion";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const OurValues: React.FC = () => {
  // Data for 4 images located in the public folder
  const slidesData = [
    { src: "/hello.png", alt: "Client 1" },
    { src: "/hello.png", alt: "Client 2" },
    { src: "/hello.png", alt: "Client 3" },
    { src: "/hello.png", alt: "Client 4" },
  ];

  return (
    <div
      id="OurValues"
      className="bg-[rgb(43,43,43)] py-12 flex justify-center"
    >
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <div className="w-full md:w-1/4 bg-[rgb(43,43,43)] border-4 border-gray-950 flex items-center justify-start md:justify-center ">
          <h1 className="text-[50px] font-bold text-white px-6">
            OUR <span className="text-[rgb(255,228,0)]">VALUES</span>
          </h1>
        </div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4">
          <Swiper
            spaceBetween={0} // No space between slides
            slidesPerView={1} // Show one slide at a time
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto scroll
            pagination={{ clickable: true }} // Enable pagination
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[400px]">
                  {" "}
                  {/* Adjust height as needed */}
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    objectFit="cover" // Ensures the image covers the container
                    quality={100} // Optional: for better image quality
                    height={5000}
                    width={5000}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
