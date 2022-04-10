import React, { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { banners } from "../../../../data/banners";

import "./styles.css";

const Slider = () => {
  const swiperRef = useRef(null);
  return (
    <Swiper
      className="swiper"
      autoHeight={true}
      slidesPerView={1}
      ref={swiperRef}
      tag="section"
      rewind={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ type: "progressbar" }}
    >
      {banners.map((item, index) => (
        <SwiperSlide tag="div" key={index} className="swiper-slide">
          <img alt="" src={item} className="h-full" />
        </SwiperSlide>
      ))}
      <div className="absolute bottom-0 md:bottom-1 z-10 mx-3 flex">
        <BsChevronRight
          className="text-xl md:text-4xl md:mx-5 mx-2 text-white cursor-pointer"
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
        <BsChevronLeft
          className="text-xl md:text-4xl md:mx-5 mx-2 text-white cursor-pointer"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
      </div>
    </Swiper>
  );
};

export default Slider;
