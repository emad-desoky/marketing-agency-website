import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image"; // Import Next.js Image component

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Register the required modules
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Partners: React.FC = () => {
  // Create slides data with 7 images per slide
  const slidesData = Array.from({ length: 3 }, (_, index) => (
    <SwiperSlide key={`partners-slide-${index}`}>
      <div className="grid grid-cols-7 gap-6 p-4">
        {Array.from({ length: 7 }, (_, clientIndex) => (
          <Image
            key={clientIndex}
            src={`/client${index * 6 + clientIndex + 1}.png`} // Adjusted the path for 21 images (3 slides)
            alt={`Client ${index * 6 + clientIndex + 1}`}
            width={100} // Set appropriate width
            height={75} // Set appropriate height
            className="object-cover" // Use object-cover for styling
            sizes="(max-width: 640px) 50px, (max-width: 768px) 75px, 100px" // Responsive sizes
            quality={75} // Optimize quality
            placeholder="blur" // Placeholder for loading
            blurDataURL={`/client${index * 7 + clientIndex + 1}.png`} // Use a low-quality image for blur effect
          />
        ))}
      </div>
    </SwiperSlide>
  ));

  return (
    <div id="Partners" className="bg-[rgb(43,43,43)] py-12 flex justify-center">
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-[rgb(43,43,43)] rounded-lg shadow-lg overflow-hidden mt-8">
        {/* Left side (fixed) */}
        <div className="bg-[rgb(43,43,43)] p-6 flex items-center justify-start md:justify-center mt-2 mb-2 ml-2 border-4 border-[rgb(255,228,0)]">
          <h1 className="text-[40px] font-bold text-white">
            Partners <span className="px-4 text-[rgb(255,228,0)]">of</span>
            <span className="text-[rgb(255,228,0)]"> SUCCESS</span>
          </h1>
        </div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-6">
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
