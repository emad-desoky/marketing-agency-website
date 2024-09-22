import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Register the required modules
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Partners: React.FC = () => {
  const slidesData = Array.from({ length: 4 }, (_, index) => (
    <SwiperSlide key={index}>
      <div className="grid grid-cols-5 grid-rows-2 gap-10 p-4">
        {Array.from({ length: 15 }, (_, clientIndex) => (
          <img
            key={clientIndex}
            src={`/client${index * 10 + clientIndex + 1}.png`} // Constructing the image path
            alt={`Client ${index * 10 + clientIndex + 1}`}
            className="w-20 object-cover" // Adjusted size for better visibility
          />
        ))}
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-900 py-24 flex justify-center">
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <div className="w-full md:w-1/4 bg-gray-800 p-4 flex items-center justify-start md:justify-center mt-2 mb-2 ml-2">
          <h1 className="text-[50px] font-bold text-white">
            Partners <span className="px-16">of</span> SUCCESS
          </h1>
        </div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-12">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto scroll
            pagination={{ clickable: true }} // Enable pagination
          >
            {slidesData}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
