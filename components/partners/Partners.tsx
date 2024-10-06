import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/MovingBorder2";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Partners: React.FC = () => {
  // Create slides data
  const slidesData = Array.from({ length: 3 }, (_, index) => (
    <SwiperSlide key={`partners-slide-${index}`}>
      <motion.div
        className="grid grid-cols-5 gap-6 p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        {Array.from({ length: 10 }, (_, clientIndex) => (
          <motion.div
            key={clientIndex}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
              rotate: 5,
              boxShadow: "0 4px 20px rgba(255, 228, 0, 0.5)",
            }}
            className="flex justify-center items-center"
          >
            <Image
              src={`/client${index * 6 + clientIndex + 1}.png`}
              alt={`Client ${index * 6 + clientIndex + 1}`}
              width={100}
              height={75}
              className="object-contain opacity-90 transition duration-300"
              sizes="(max-width: 640px) 50px, (max-width: 768px) 75px, 100px"
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
      className="bg-gradient-to-b from-[#1A1A1A] to-[#2B2B2B] py-20 flex justify-center"
    >
      <Button
        id={Math.random}
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="2rem"
        className="flex-1 text-white border-[rgb(43,43,43)]"
      >
        {/* Left side (fixed) */}
        <motion.div
          className="bg-[#2B2B2B] py-4 ml-8 rounded-3xl flex font-nourd leading-[70px] items-center justify-start md:justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[60px] font-bold text-white drop-shadow-lg">
            Partners <span className="px-14">of</span>
            <span className="text-[#FFE400]"> SUCCESS</span>
          </h1>
        </motion.div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-6">
          <Swiper
            spaceBetween={20}
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
