import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

import { mobiles } from "../../../../../../../../../data/mobiles";

const Apple = ({ Enter, Leave, mobile }) => {
  return (
    <div
      className="flex items-center p-5 hover:text-rose-500 transition-all duration-200 border-b  w-1/3"
      onMouseEnter={() => Enter(1)}
      onMouseLeave={() => Leave(1)}
    >
      <span className="max-w-md w-32 ">اپل</span>
      <BsChevronLeft />
      <div
        className=" hidden absolute w-3/6 left-1/3 top-0 h-full border-2 border-gray-300 rounded-lg"
        style={mobile[1] ? { display: "flex" } : { display: "none" }}
      >
        <div className="flex flex-col gap-2  w-full overflow-auto">
          {mobiles[0].apple.map((item, index) => (
            <span
              key={index}
              className="w-full border-b-2 border-gray-300 flex h-1/3 bg-white rounded-lg"
            >
              <div className="w-2/3 flex flex-col justify-around">
                <span className="">
                  <h2 className="p-2 text-gray-600 font-sans text-2xl">
                    {item.name}
                  </h2>
                  <p className="p-2  text-gray-400 font-sans text-xl">
                    {item.desc}
                  </p>
                </span>
                <Link
                  to="/"
                  className="  text-rose-500 w-24 relative right-2/3 text-center flex items-center"
                >
                  جزئیات
                  <BsChevronLeft />
                </Link>
              </div>
              <span className="flex justify-center items-center px-3">
                <img src={item.img} className="w-full h-full rounded-lg" />
              </span>
            </span>
          ))}
          <div className="flex justify-center p-9">
            <h2 className="text-2xl">بیشتر...</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;
