import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/MovingBorder2";

const Partners: React.FC = () => {
  // Create slides data
  const slidesData = Array.from({ length: 3 }, (_, index) => (
    <SwiperSlide key={`partners-slide-${index}`}>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 p-2 sm:p-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        {Array.from({ length: 12 }, (_, clientIndex) => (
          <motion.div
            key={clientIndex}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
              rotate: 5,
              boxShadow: "0 4px 20px rgba(255, 228, 0, 0.5)",
            }}
            className="flex justify-center items-center rounded-2xl"
          >
            <Image
              src={`/client${index * 6 + clientIndex + 1}.png`}
              alt={`Client ${index * 6 + clientIndex + 1}`}
              width={80} // Adjusted image width for small screens
              height={60} // Adjusted image height for small screens
              className="object-contain opacity-90 transition duration-300 bg-white rounded-2xl"
              sizes="(max-width: 640px) 40px, (max-width: 768px) 75px, 100px"
              quality={75}
              placeholder="blur"
              blurDataURL={`/client${index * 7 + clientIndex + 1}.png`}
            />
          </motion.div>
        ))}
      </motion.div>
    </SwiperSlide>
  ));

  return (
    <div
      id="Partners"
      className="bg-gradient-to-b from-[#1A1A1A] to-[#2B2B2B] py-10 sm:py-20 flex justify-center"
    >
      <Button
        id={Math.random}
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="2rem"
        className="flex-1 text-white border-[rgb(43,43,43)]"
      >
        {/* Left side (Title section) */}
        <motion.div
          className="bg-[rgb(43,43,43)] border-4 flex font-nourd leading-[40px] sm:leading-[50px] items-center justify-center sm:justify-start h-[150px] sm:h-[200px] md:h-[300px] p-2 sm:p-4 md:p-6 lg:ml-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[25px] sm:text-[35px] md:text-[50px] font-nourd text-white drop-shadow-lg text-center sm:text-left">
            PARTNERS{" "}
            <span className="px-2 sm:px-4 md:px-14 text-[rgb(255,228,0)]">
              OF
            </span>
            <span className="text-[#FFE400]"> SUCCESS</span>
          </h1>
        </motion.div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-4 sm:p-6">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
          >
            {slidesData}
          </Swiper>
        </div>
      </Button>
    </div>
  );
};

export default Partners;
