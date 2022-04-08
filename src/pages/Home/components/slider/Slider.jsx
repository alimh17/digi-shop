import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Slider = () => {
  return (
    <Splide
      options={{
        type: "fade",
        width: "100%",
        height: "70vh",
        gap: "1rem",
        lazyLoad: "nearby",
        autoplay: true,
      }}
    >
      <SplideSlide className="flex justify-center items-center w-full ">
        <img alt="" src="/images/banners/1.jpg" className="h-full" />
      </SplideSlide>
      <SplideSlide className="flex justify-center items-center w-full ">
        <img alt="" src="/images/banners/2.jpg" className="h-full" />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
