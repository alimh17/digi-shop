import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { mobiles } from "../../../../../../../../data/mobiles";
import Apple from "./components/Apple";
import Samsung from "./components/Samsung";

const MobileCategory = () => {
  const [mobile, setMobile] = useState(new Array(6).fill(false));

  const handleMouseEnter = (id) => {
    const copyMobile = [...mobile];
    copyMobile.fill(false);
    copyMobile[id] = true;
    setMobile(copyMobile);
  };

  const handleMouseLeave = (id) => {
    const copyMobile = [...mobile];
    copyMobile[id] = false;
    setMobile(copyMobile);
  };

  return (
    <section className="hidden group-hover:flex  absolute right-5 top-40 mt-1  h-5/6 w-5/6  bg-gray-200 rounded-lg">
      <div className="p-5 w-2/3">
        <Samsung
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          mobile={mobile}
        />
        <Apple
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          mobile={mobile}
        />

        <div
          className="flex items-center p-5  hover:text-rose-500 transition-all duration-200 border-b w-1/3"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <span className="max-w-md w-32">شیائومی</span>
          <BsChevronLeft />
          <div
            className=" hidden absolute w-3/6 left-1/3 top-0 h-full border-2 border-gray-300 rounded-lg"
            style={mobile[2] ? { display: "flex" } : { display: "none" }}
          >
            xiaomi
          </div>
        </div>
        <div
          className="flex items-center p-5  hover:text-rose-500 transition-all duration-200 border-b w-1/3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <span className="max-w-md w-32">هوآوی</span>
          <BsChevronLeft />
          <div
            className=" hidden absolute w-3/6 left-1/3 top-0 h-full border-2 border-gray-300 rounded-lg"
            style={mobile[3] ? { display: "flex" } : { display: "none" }}
          >
            apple
          </div>
        </div>
        <div
          className="flex items-center p-5  hover:text-rose-500 transition-all duration-200 border-b w-1/3"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          <span className="max-w-md w-32">نوکیا</span>
          <BsChevronLeft />
          <div
            className=" hidden absolute w-3/6 left-1/3 top-0 h-full border-2 border-gray-300 rounded-lg"
            style={mobile[4] ? { display: "flex" } : { display: "none" }}
          >
            nokia
          </div>
        </div>
        <div
          className="flex items-center p-5  hover:text-rose-500 transition-all duration-200 border-b w-1/3"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        >
          <span className="max-w-md w-32">جی پلاس</span>
          <BsChevronLeft />
          <div
            className=" hidden absolute w-3/6 left-1/3 top-0 h-full border-2 border-gray-300 rounded-lg"
            style={mobile[5] ? { display: "flex" } : { display: "none" }}
          >
            G Plus
          </div>
        </div>
      </div>
      <div className="w-1/3 flex justify-center items-center bg-white border-2 rounded-md">
        <img alt="apple" src={process.env.PUBLIC_URL + "/images/apple.jpg"} />
      </div>
    </section>
  );
};

// group-hover:opacity-100 group-hover:transition group-hover:ease-in-out group-hover:delay-75

export default MobileCategory;
