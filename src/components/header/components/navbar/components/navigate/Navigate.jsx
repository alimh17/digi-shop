import React, { useState } from "react";

//Icons
import { BiPhoneCall } from "react-icons/bi";
import { AiFillInfoCircle } from "react-icons/ai";
import MobileCategory from "./components/MobileCategory";
import LapTopCategory from "./components/LapTopCategory";
import SmartWatch from "./components/SmartWatch";
import ToolsExtra from "./components/ToolsExtra";
import ConsoleGame from "./components/ConsoleGame";

const Navigate = () => {
  return (
    <section className="hidden md:flex w-full ">
      <ul className="flex w-2/3 mx-3 ">
        <li className="p-3 text-2xl text-gray-400 cursor-pointer group ">
          <span className="flex flex-col mobile">موبایل</span>
          <div className="w-0 absolute top-40 border-b-4 rounded-t-lg border-b-violet-400 transition-all duration-500 group-hover:w-14"></div>
          <MobileCategory />
        </li>
        <li className="p-3 text-2xl text-gray-400 cursor-pointer group">
          <span className="flex flex-col laptop">لپ تاپ</span>
          <div className="w-0 absolute top-40 border-b-4 rounded-t-lg border-b-violet-400 transition-all duration-500 group-hover:w-16"></div>
          <LapTopCategory />
        </li>

        <li className="p-3 text-2xl text-gray-400 cursor-pointer group">
          <span className="flex flex-col smart">ساعت هوشمند</span>
          <div className="w-0 absolute top-40 border-b-4 rounded-t-lg border-b-violet-400 transition-all duration-500 group-hover:w-32"></div>
          <SmartWatch />
        </li>
        <li className="p-3 text-2xl text-gray-400 cursor-pointer group">
          <span className="flex flex-col tools"> لوازم جانبی</span>
          <div className="w-0 absolute top-40 border-b-4 rounded-t-lg border-b-violet-400 transition-all duration-500 group-hover:w-24"></div>
          <ToolsExtra />
        </li>
        <li className="p-3 text-2xl text-gray-400 cursor-pointer group">
          <span className="flex flex-col console"> کنسول بازی</span>
          <div className="w-0 absolute top-40 border-b-4 rounded-t-lg border-b-violet-400 transition-all duration-500 group-hover:w-28"></div>
          <ConsoleGame />
        </li>
      </ul>

      <ul className="flex w-1/3 justify-end">
        <li className="mx-3 flex items-center text-2xl text-gray-400 group cursor-pointer">
          <span className="flex items-center">
            درباره ما
            <span className="mx-2 text-blue-400">
              <AiFillInfoCircle />
            </span>
          </span>
          <div className="w-0 absolute top-40 border-b-4 rounded-t-lg border-b-violet-400 transition-all duration-500 group-hover:w-24"></div>
        </li>
        <li className="mx-3 flex items-center text-2xl text-gray-400 group cursor-pointer">
          <span className="flex items-center">
            تماس با ما
            <span className="mx-2 text-blue-400">
              <BiPhoneCall />
            </span>
          </span>
          <div className="w-0 absolute top-40 border-b-4 rounded-t-lg border-b-violet-400 transition-all duration-500 group-hover:w-28"></div>
        </li>
      </ul>
    </section>
  );
};

export default Navigate;