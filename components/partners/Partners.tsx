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
      <div className="grid grid-cols-5 gap-6 p-4">
        {Array.from({ length: 15 }, (_, clientIndex) => (
          <img
            key={clientIndex}
            src={`/client${index * 10 + clientIndex + 1}.png`} // Constructing the image path
            alt={`Client ${index * 10 + clientIndex + 1}`}
            className="w-25 h-15 object-cover" // Adjusted size for better visibility
          />
        ))}
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="bg-[rgb(43,43,43)] py-12 flex justify-center">
      {" "}
      {/* Reduced vertical padding */}
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-[rgb(43,43,43)] rounded-lg shadow-lg overflow-hidden mt-8">
        {/* Left side (fixed) */}
        <div className="bg-[rgb(43,43,43)] p-6 flex items-center justify-start md:justify-center mt-2 mb-2 ml-2 border-4">
          {" "}
          {/* Reduced padding */}
          <h1 className="text-[40px] font-bold text-white">
            {" "}
            {/* Reduced font size */}
            Partners <span className="px-4 text-[rgb(255,228,0)]">of</span>{" "}
            <span className="text-[rgb(255,228,0)]">SUCCESS</span>
          </h1>
        </div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-6">
          {" "}
          {/* Reduced padding */}
          <Swiper
            spaceBetween={20} // Adjusted space between slides
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
