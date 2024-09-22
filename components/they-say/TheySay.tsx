import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Register the required modules
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const TheySay = () => {
  const slidesData = [
    {
      imgSrc: "/director1.jpg",
      quote:
        "“This is an amazing company that transformed our business! This is an amazing company that transformed our business! This is an amazing company that transformed our business! This is an amazing company that transformed our business!”",
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
      imgSrc: "/path-to-image3.jpg",
      quote: "“I have never worked with such a talented group of people.”",
      name: "Michael Lee",
      position: "CTO",
      company: "FutureTech",
    },
    // Add more slide data for a total of 6 slides
  ];

  return (
    <div className="bg-[rgb(43,43,43)] py-24 flex justify-center">
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-[1200px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <div className="w-full md:w-1/4 bg-[rgb(43,43,43)] p-4 flex items-center justify-start md:justify-center mt-2 mb-2 ml-2">
          <h1 className="text-5xl font-bold text-[rgb(255,228,0)]">
            What They Say
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
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg h-auto">
                  {/* Image */}
                  <div>
                    <img
                      src={slide.imgSrc}
                      alt={slide.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>

                  {/* Quote and Person Information */}
                  <div className="flex-1">
                    {/* Quote */}
                    <div className="bg-[rgb(43,43,43)] p-2 rounded-lg border-2 border-[rgb(255,228,0)]">
                      <p className="text-2xl italic text-blue-200">
                        {slide.quote}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Person Information */}
                <div className="text-right text-[rgb(43,43,43)] space-y-2 px-2">
                  <p className="text-2xl font-semibold">{slide.name}</p>
                  <p className="text-xl text-[rgb(43,43,43)]">
                    {slide.position}
                  </p>
                  <p className="text-xl text-[rgb(43,43,43)]">
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
