import React, { useState } from "react";

import Amazfit from "./components/Amazfit";
import Apple from "./components/Apple";
import Garmin from "./components/Garmin";
import Samsung from "./components/Samsung";
import Suunto from "./components/Suunto";
import Xiaomi from "./components/Xiaomi";

const SmartWatch = () => {
  const [smartWatch, setSmartWatch] = useState(new Array(6).fill(false));

  const handleMouseEnter = (id) => {
    const copysmartWatch = [...smartWatch];
    copysmartWatch.fill(false);
    copysmartWatch[id] = true;
    setSmartWatch(copysmartWatch);
  };

  const handleMouseLeave = (id) => {
    const copysmartWatch = [...smartWatch];
    copysmartWatch[id] = false;
    setSmartWatch(copysmartWatch);
  };

  return (
    <section className="hidden group-hover:flex  absolute right-5 top-40 mt-1  h-5/6 w-5/6  bg-gray-200 rounded-lg">
      <div className="p-5 w-2/3">
        <Samsung
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          smartWatch={smartWatch}
        />
        <Xiaomi
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          smartWatch={smartWatch}
        />
        <Apple
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          smartWatch={smartWatch}
        />
        <Amazfit
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          smartWatch={smartWatch}
        />
        <Suunto
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          smartWatch={smartWatch}
        />
        <Garmin
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          smartWatch={smartWatch}
        />
      </div>
      <div className="w-1/3 flex justify-center items-center bg-white border-2 rounded-md">
        <img
          alt="apple"
          src={process.env.PUBLIC_URL + "/images/smart_watch/garmin/D2 Delta Aviator.jpg"}
        />
      </div>
    </section>
  );
};

export default SmartWatch;
