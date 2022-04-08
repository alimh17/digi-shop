import React, { useState } from "react";
import Adata from "./components/Adata";
import Baseus from "./components/Baseus";
import Mahoot from "./components/Mahoot";
import Sandisk from "./components/Sandisk";
import Tesco from "./components/Tesco";
import Xiaomi from "./components/Xiaomi";

const ToolsExtra = () => {
  const [toolsExtra, setToolsExtra] = useState(new Array(6).fill(false));

  const handleMouseEnter = (id) => {
    const copytoolsExtra = [...toolsExtra];
    copytoolsExtra.fill(false);
    copytoolsExtra[id] = true;
    setToolsExtra(copytoolsExtra);
  };

  const handleMouseLeave = (id) => {
    const copytoolsExtra = [...toolsExtra];
    copytoolsExtra[id] = false;
    setToolsExtra(copytoolsExtra);
  };

  return (
    <div className="hidden group-hover:flex  absolute right-0 top-40 mt-1  h-5/6 w-full  bg-gray-200 rounded-lg z-10">
      <div className="p-5 w-2/3">
        <Mahoot
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          toolsExtra={toolsExtra}
        />
        <Tesco
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          toolsExtra={toolsExtra}
        />
        <Adata
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          toolsExtra={toolsExtra}
        />
        <Sandisk
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          toolsExtra={toolsExtra}
        />
        <Xiaomi
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          toolsExtra={toolsExtra}
        />
        <Baseus
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          toolsExtra={toolsExtra}
        />
      </div>
      <div className="md:hidden justify-center items-center bg-white border-2 rounded-md :flex xl:flex">
        <img
          alt="apple"
          src={process.env.PUBLIC_URL + "/images/mobiles/apple.jpg"}
          style={{ width: "90%", height: "50%" }}
        />
      </div>
    </div>
  );
};

export default ToolsExtra;
