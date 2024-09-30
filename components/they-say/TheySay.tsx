import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import SwiperCore from "swiper";
// Register the required modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const TheySay = () => {
  const slidesData = [
    {
      imgSrc: "/director1.jpg",
      quote:
        "“This is an amazing company that transformed our business!This is an amazing company that transformed our business!This is an amazing company that transformed our business!This is an amazing company that transformed our business!This is an amazing company that transformed our business!”",
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
      imgSrc: "/director2.jpg",
      quote: "“I have never worked with such a talented group of people.”",
      name: "Michael Lee",
      position: "CTO",
      company: "FutureTech",
    },
    // Additional slide data can go here
  ];

  return (
    <div
      id="TheySay"
      className="bg-gradient-to-r from-[rgb(43,43,43)] via-[rgb(43,43,43)] to-[rgb(43,43,43)] py-24 flex justify-center"
    >
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-[1200px] bg-white border-4 border-black rounded-lg shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <div className="w-full md:w-1/4 bg-[rgb(43,43,43)] p-4 flex items-center border-4 border-black justify-start md:justify-center mt-2 mb-2 ml-2">
          <h1 className="text-5xl font-nourd leading-tight tracking-tight font-bold text-[rgb(255,228,0)]">
            <span className=" p-10 text-white">WHAT</span> THEY SAY
          </h1>
        </div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-12">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }} // Enable pagination
            autoplay={{ delay: 5000 }} // Optional: autoplay configuration
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-start space-x-4 p-6 bg-[rgb(43,43,43)] rounded-lg h-auto">
                  {/* Image */}
                  <div>
                    <Image
                      src={slide.imgSrc}
                      alt={slide.name}
                      width={200}
                      height={150}
                      className="rounded-full object-cover"
                    />
                  </div>

                  {/* Quote and Person Information */}
                  <div className="flex-1">
                    {/* Quote */}
                    <div className="bg-white p-2 rounded-lg border-2 border-[rgb(255,228,0)]">
                      <p className="text-2xl italic text-black font-nourd leading-8">
                        {slide.quote}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Person Information */}
                <div className="text-right text-black space-y-2 px-2">
                  <p className="text-2xl font-semibold font-nourd leading-tight tracking-tight">
                    {slide.name}
                  </p>
                  <p className="text-xl text-black font-nourd leading-tight tracking-tight">
                    {slide.position}
                  </p>
                  <p className="text-xl text-black font-nourd leading-tight tracking-tight">
                    {slide.company}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TheySay;
