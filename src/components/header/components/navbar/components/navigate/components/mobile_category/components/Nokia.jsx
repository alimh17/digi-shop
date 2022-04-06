import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { mobiles } from "../../../../../../../../../data/mobiles";
import { replacePrice } from "../../../../../../../../../utils/replacePrice";

const Nokia = ({ Enter, Leave, mobile }) => {
  return (
    <div
      className="flex items-center p-5 hover:text-rose-500 transition-all duration-200 border-b  w-1/3"
      onMouseEnter={() => Enter(4)}
      onMouseLeave={() => Leave(4)}
    >
      <span className="max-w-md w-32 ">نوکیا</span>
      <BsChevronLeft />
      <div
        className=" hidden absolute w-3/6 left-1/3 top-0 h-full border-2 border-gray-300 rounded-lg"
        style={mobile[4] ? { display: "flex" } : { display: "none" }}
      >
        <div className="flex flex-col gap-2  w-full overflow-auto">
          {mobiles[0].nokia.map((item, index) => (
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
                <p className="relative right-2/4 text-center w-2/4 text-2xl p-3 text-white bg-rose-500 mx-4 rounded-2xl my-4">
                  {replacePrice(item.price)}{" "}
                  <span className="px-3 ">تومان</span>
                </p>
                <Link
                  to="/"
                  className="  text-rose-500 w-24 relative right-10 mb-2 text-center flex items-center"
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
          <div className="flex justify-center p-9 bg-white rounded-lg hover:bg-gray-200 transition-all ease-in duration-3">
            <h2 className="text-2xl text-rose-500">بیشتر...</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nokia;
