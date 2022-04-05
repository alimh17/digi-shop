import React from "react";

//Icons
import { BiCart } from "react-icons/bi";

//Components
import Md from "./components/md/Md";
import Sm from "./components/sm/Sm";
import Navigate from "./components/navigate/Navigate";

const Navbar = () => {
  return (
    <nav className=" w-full border-b flex flex-col ">
      <section className="w-full flex justify-between h-28 items-center">
        <Md />
        <Sm />
        <div className="w-1/3 flex justify-end">
          <BiCart className="text-3xl mx-5 cursor-pointer text-gray-400" />
        </div>
      </section>

      <Navigate />
    </nav>
  );
};

export default Navbar;
