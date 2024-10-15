import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import SwiperCore from "swiper";

// Register the required modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const TheySay = () => {
  const slidesData = [
    {
      imgSrc: "/director1.jpg",
      quote:
        "“This is an amazing company that transformed our business! This is an amazing company that transformed our business! This is an amazing company that transformed our business!”",
      name: "John Doe",
      position: "Manager of Innovation",
      company: "TechCorp",
    },
    {
      imgSrc: "/director2.jpg",
      quote: "“Their creativity and professionalism exceeded expectations.”",
      name: "Jane Smith",
      position: "Marketing Director",
      company: "Creative Agency",
    },
    {
      imgSrc: "/director3.jpg",
      quote: "“I have never worked with such a talented group of people.”",
      name: "Michael Lee",
      position: "CTO",
      company: "FutureTech",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 } // Adjust this value based on when you want the animation to start
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="TheySay"
      className="bg-gradient-to-r from-[rgb(43,43,43)] via-[rgb(43,43,43)] to-[rgb(43,43,43)] py-16 md:py-24 flex justify-center relative"
      ref={sectionRef} // Attach ref to the container
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <Image
          src="/element2.png"
          alt="Background Element Left"
          width={150} // Adjust the size as needed
          height={100}
          className="object-contain"
        />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <Image
          src="/element2.png"
          alt="Background Element Right"
          width={150} // Adjust the size as needed
          height={100}
          className="object-contain"
        />
      </div>

      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-[1250px] xl:h-[420px] bg-white border-4 border-black rounded-lg shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <motion.div
          className="w-full md:w-2/4 bg-[rgb(43,43,43)] flex items-center border-black justify-start md:justify-center mt-2 mb-2 ml-2"
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Trigger based on visibility
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[90px] font-nourd leading-tight tracking-normal text-white p-5 md:p-10">
            THEY{" "}
            <span className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px] font-bold text-[rgb(255,228,0)]">
              SAY
            </span>
          </h1>
        </motion.div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-4 md:p-12">
          <Swiper
            spaceBetween={30} // Adjusted space for responsiveness
            slidesPerView={1}
            pagination={{ clickable: true }} // Enable pagination
            autoplay={{ delay: 5000 }} // Optional: autoplay configuration
            loop={true} // Enable looping of slides
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex flex-col md:flex-row items-start space-x-4 p-4 md:p-6 bg-[rgb(43,43,43)] rounded-lg h-auto transition-transform hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  } // Trigger based on visibility
                  transition={{ duration: 0.8 }}
                >
                  {/* Image */}
                  <div>
                    <Image
                      src={slide.imgSrc}
                      alt={slide.name}
                      width={120} // Adjust image size for smaller screens
                      height={120} // Adjust image size for smaller screens
                      className="rounded-full object-cover"
                    />
                  </div>

                  {/* Quote and Person Information */}
                  <div className="flex-1">
                    {/* Quote */}
                    <div className="bg-white p-10  rounded-lg border-2 border-[rgb(255,228,0)]">
                      <p className="text-sm md:text-lg lg:text-xl italic text-black font-nourd leading-6 md:leading-8">
                        {slide.quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
                {/* Person Information */}
                <motion.div
                  className="text-right text-black space-y-2 px-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                  } // Trigger based on visibility
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-sm md:text-lg lg:text-xl font-semibold font-nourd leading-tight tracking-tight">
                    {slide.name}
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl text-black font-nourd leading-tight tracking-tight">
                    {slide.position}
                  </p>
                  <p className="text-sm md:text-lg lg:text-xl text-black font-nourd leading-tight tracking-tight">
                    {slide.company}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TheySay;
