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
      <div className="w-1/3 flex justify-center items-center bg-white border-2 rounded-md">
        <img alt="apple" src={process.env.PUBLIC_URL + "/images/apple.jpg"} />
      </div>
    </section>
  );
};

// group-hover:opacity-100 group-hover:transition group-hover:ease-in-out group-hover:delay-75

export default MobileCategory;
