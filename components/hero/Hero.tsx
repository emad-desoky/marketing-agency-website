import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Data } from "./Data";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust delay for smoother effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-[660px] w-full transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } mt-20`} // Push down by the height of the navbar
    >
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full"
      >
        {Data.map((item, index) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill" // Fills the container completely
              objectFit="cover" // Ensures the image covers the container
              quality={75} // Optimize image quality for faster loading
              loading={index === 0 ? "eager" : "lazy"} // Eager load the first image, lazy load the rest
              priority={index === 0} // Prioritize the first image for faster initial loading
              className="absolute inset-0"
            />
            <div className="absolute bottom-10 left-10 text-white px-6 md:px-16">
              <h2 className="text-3xl md:text-5xl font-bold">{item.title}</h2>
              <p className="text-lg md:text-2xl mt-2 text-[rgb(255,228,0)]">
                {item.description}
              </p>
            </div>
            <button className="absolute bottom-10 right-10 text-[rgb(174,174,174)] font-bold px-6 py-3 border-2 border-[rgb(112,112,112)] rounded-full cursor-pointer text-sm md:text-lg mt-10 hover:text-[rgb(236,137,38)] hover:border-[rgb(236,137,38)] transition-all duration-300 hover:scale-105">
              Explore Work
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
