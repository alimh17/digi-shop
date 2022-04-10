import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { specialOffers } from "../../../../data/special_offers";

import { replacePrice } from "../../../../utils/replacePrice";

import "./special_offers.css";

const SpecialOffers = () => {
  return (
    <section className="bg-gradient-to-tr from-cyan-500 to-blue-500 flex mt-10 flex-col">
      <div className="w-full flex md:justify-between justify-center md:h-24">
        <span className="flex justify-center items-center md:p-8">
          <h2 className="text-2xl text-white">پیشنهاد ویژه دیجی شاپ</h2>
        </span>
        <span className="hidden md:flex justify-center items-center p-8">
          <h2 className="text-2xl text-white bg-blue-500 p-5 rounded-full">
            مشاهده همه
          </h2>
        </span>
      </div>
      <div className="flex md:p-10">
        <Swiper
          className="swiper_offer"
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          pagination={{ dynamicBullets: true }}
        >
          {specialOffers.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center cursor-pointer bg-white "
            >
              <img
                src={item.img}
                className="md:relative md:top-36 hover:top-0 transition-all duration-300 ease-out md:h-full  md:w-full h-1/2 w-1/2 "
              />
              <div className="md:relative bottom-16 bg-white rounded-md w-full text-center p-3 ">
                <div className="w-full border-b py-3">
                  <p className="md:text-2xl text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <span className="flex justify-center items-center">
                    <p className="bg-rose-500 rounded-full text-white md:text-2xl text-sm  p-2">
                      12%
                    </p>
                  </span>
                  <span className="flex justify-center items-center">
                    <p className="line-through md:p-3 md:m-3 md:text-2xl p-2">
                      {replacePrice(item.price)}
                    </p>
                    <p className="md:p-3 md:m-3 md:text-2xl p-2">
                      {replacePrice(item.offer)}{" "}
                      <span className="px-2">تومان</span>
                    </p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <span className="flex justify-center items-center p-8">
            <h2 className="text-2xl text-white bg-blue-500 p-5 rounded-full">
              مشاهده همه
            </h2>
          </span> */}
        </Swiper>
      </div>
    </section>
  );
};

export default SpecialOffers;
