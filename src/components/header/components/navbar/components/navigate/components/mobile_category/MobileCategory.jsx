import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { mobiles } from "../../../../../../../../data/mobiles";

import Apple from "./components/Apple";
import GPlus from "./components/GPlus";
import Huawei from "./components/Huawei";
import Nokia from "./components/Nokia";
import Samsung from "./components/Samsung";
import Xiaomi from "./components/Xiaomi";

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
    <section className="hidden group-hover:flex  fixed right-0 top-40 mt-1  h-full w-full  bg-gray-200 rounded-lg z-10">
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

        <Xiaomi
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          mobile={mobile}
        />

        <Huawei
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          mobile={mobile}
        />

        <Nokia
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          mobile={mobile}
        />
        <GPlus
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          mobile={mobile}
        />
      </div>
      <div className="md:hidden justify-center items-center bg-white border-2 rounded-md :flex xl:flex">
        <img
          alt="apple"
          src={process.env.PUBLIC_URL + "/images/mobiles/apple.jpg"}
          style={{ width: "90%", height: "50%" }}
        />
      </div>
    </section>
  );
};

// group-hover:opacity-100 group-hover:transition group-hover:ease-in-out group-hover:delay-75

export default MobileCategory;
