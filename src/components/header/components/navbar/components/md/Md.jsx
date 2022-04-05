import React from "react";

//Icons
import { BiSearch } from "react-icons/bi";

const Md = () => {
  return (
    <>
      <div className="hidden md:flex w-2/3  items-center justify-start ">
        <h1 className="text-3xl w-3/12  px-5 text-center text-rose-500">
          دیجی شاپ
        </h1>
        <div className="flex  items-center w-9/12">
          <BiSearch className="relative text-4xl right-12 text-gray-400" />
          <input
            type="text"
            className="w-full h-16 outline-none px-14 border-2 rounded-md text-2xl bg-gray-200"
            placeholder="جستجو..."
          />
        </div>
      </div>
    </>
  );
};

export default Md;
