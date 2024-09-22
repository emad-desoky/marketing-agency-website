import React from "react";
import Image from "next/image"; // Import the Image component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // Correct import
import { Data } from "./Data";

const Hero: React.FC = () => {
  return (
    <div className="h-screen">
      <Swiper
        modules={[Navigation, Pagination]} // Pass the modules here
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            <Image
              src={item.image} // Use the Image component
              alt={item.title}
              layout="fill" // Use layout fill to cover the slide
              objectFit="cover" // Maintain aspect ratio and cover the slide
              className="absolute inset-0"
            />
            <div className="absolute bottom-10 left-10 text-white px-16">
              <h2 className="text-5xl font-bold">{item.title}</h2>
              <p className="text-2xl mt-2 text-[rgb(255,228,0)]">
                {item.description}
              </p>
            </div>
            <button className="absolute bottom-10 right-10 text-[rgb(174,174,174)] font-bold px-6 py-3 border-2 border-[rgb(112,112,112)] rounded-full cursor-pointer text-lg mt-10 hover:text-[rgb(236,137,38)] hover:border-[rgb(236,137,38)] transition-all duration-300 hover:scale-105">
              Explore Work
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
