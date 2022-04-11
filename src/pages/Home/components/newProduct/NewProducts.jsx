import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { specialOffers } from "../../../../data/special_offers";
import { replacePrice } from "../../../../utils/replacePrice";

const NewProducts = () => {
  return (
    <section className=" mt-5 rounded-lg">
      <div className="md:border-2 shadow-sm md:rounded-lg md:m-3">
        <h2 className="md:p-5 md:text-4xl md:font-bold text-lg p-2">
          محصولات جدید
        </h2>
      </div>
      <div className="bg-white">
        <Swiper
          className={`best_selling_swiper bg-white`}
          modules={[Pagination, Navigation, Autoplay]}
          rewind={true}
          tag="div"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          spaceBetween={5}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 6,
            },
          }}
        >
          {specialOffers.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`best_product_slide bg-white flex flex-col rounded-lg border-2`}
            >
              <img
                src={item.img}
                alt="best selling product"
                className="h-2/3 w-full"
              />
              <span className="h-1/3 ">
                <p className="text-xs  text-gray-500 p-2 md:text-xl border-b-2 border-b-rose-500">
                  {item.desc}
                </p>
                <p className="p-1 md:p-3 md:text-xl text-center">
                  {replacePrice(item.price)} تومان
                </p>
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProducts;
