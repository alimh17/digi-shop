import React, { useState } from "react";

//Icons
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Sm = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="md:hidden ">
      <AiOutlineBars
        className="text-2xl mx-5"
        onClick={() => setMobileMenu(true)}
      />
      <section
        className={`fixed  w-full h-full top-0 bg-gray-200 flex flex-col transition-all duration-500 ease-in translate-x-full ${
          mobileMenu && "translate-x-0"
        }`}
      >
        <FaTimes
          className="text-3xl absolute left-5 top-5 text-red-500"
          onClick={() => setMobileMenu(false)}
        />
        <div className="w-full h-32 flex justify-center items-center">
          <h1 className="text-3xl text-rose-500">دیجی شاپ</h1>
        </div>
        <ul className="">
          <li className="p-3 text-xl bg-white border-b">موبایل</li>
          <li className="p-3 text-xl bg-white border-b">لپ تاپ</li>
          <li className="p-3 text-xl bg-white border-b">ساعت هوشمند</li>
          <li className="p-3 text-xl bg-white border-b">لوازم جانبی</li>
          <li className="p-3 text-xl bg-white border-b">کنسول بازی</li>
        </ul>
      </section>
    </div>
  );
};

export default Sm;
