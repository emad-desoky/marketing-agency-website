import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TheySay = () => {
  const slidesData = [
    {
      imgSrc: "/director1.jpg", // Ensure this image is located in the public folder
      quote:
        "“This is an amazing company that transformed our business! This is an amazing company that transformed our business! This is an amazing company that transformed our business! This is an amazing company that transformed our business! ”",
      name: "John Doe",
      position: "Manager of Innovation",
      company: "TechCorp",
    },
    {
      imgSrc: "/director2.jpg", // Update this path if needed
      quote: "“Their creativity and professionalism exceeded expectations.”",
      name: "Jane Smith",
      position: "Marketing Director",
      company: "Creative Agency",
    },
    {
      imgSrc: "/path-to-image3.jpg", // Update this path if needed
      quote: "“I have never worked with such a talented group of people.”",
      name: "Michael Lee",
      position: "CTO",
      company: "FutureTech",
    },
    // Add more slide data for a total of 6 slides
  ];

  return (
    <div className="bg-black py-24 flex justify-center">
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <div className="w-full md:w-1/4 bg-gray-700 p-4 flex items-center justify-start md:justify-center  mt-2 mb-2 ml-2">
          <h1 className="text-5xl font-bold text-white">What They Say</h1>
        </div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4 p-12">
          <Swiper spaceBetween={50} slidesPerView={1}>
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg shadow-md">
                  {/* Image */}
                  <div>
                    <img
                      src={slide.imgSrc} // Images from public folder
                      alt={slide.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>

                  {/* Quote and Person Information */}
                  <div className="flex-1">
                    {/* Quote */}
                    <div className="bg-gray-800 p-2 rounded-lg">
                      <p className="text-lg italic text-white">{slide.quote}</p>
                    </div>
                  </div>
                </div>
                {/* Person Information */}
                <div className="text-right text-white space-y-2 px-2">
                  <p className="text-xl font-semibold">{slide.name}</p>
                  <p className="text-sm text-gray-400">{slide.position}</p>
                  <p className="text-sm text-gray-400">{slide.company}</p>
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
