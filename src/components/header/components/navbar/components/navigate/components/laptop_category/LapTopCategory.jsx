import React, { useEffect, useState } from "react";
import Apple from "./components/Apple";
import Asus from "./components/Asus";
import Hp from "./components/Hp";
import Lenovo from "./components/Lenovo";
import Microsoft from "./components/Microsoft";
import Msi from "./components/Msi";

const LapTopCategory = () => {
  const [laptop, setLaptop] = useState(new Array(6).fill(false));

  useEffect(() => {
    console.log(laptop);
  }, []);

  const handleMouseEnter = (id) => {
    const copyLaptop = [...laptop];
    copyLaptop.fill(false);
    copyLaptop[id] = true;
    setLaptop(copyLaptop);
  };

  const handleMouseLeave = (id) => {
    const copyLaptop = [...laptop];
    copyLaptop[id] = false;
    setLaptop(copyLaptop);
  };

  return (
    <section className="hidden group-hover:flex  absolute right-0 top-40 mt-1  h-5/6 w-full  bg-gray-200 rounded-lg z-10">
      <div className="p-5 w-2/3">
        <Asus
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          laptop={laptop}
        />
        <Lenovo
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          laptop={laptop}
        />

        <Apple
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          laptop={laptop}
        />
        <Hp Enter={handleMouseEnter} Leave={handleMouseLeave} laptop={laptop} />

        <Microsoft
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          laptop={laptop}
        />
        <Msi
          Enter={handleMouseEnter}
          Leave={handleMouseLeave}
          laptop={laptop}
        />
      </div>

      <div className="md:hidden justify-center items-center bg-white border-2 rounded-md :flex xl:flex">
        <img
          alt="apple"
          src={process.env.PUBLIC_URL + "/images/laptop/msi/GS76 Stealth.jpg"}
          style={{ width: "80%", height: "70%" }}
        />
      </div>
    </section>
  );
};

// group-hover:opacity-100 group-hover:transition group-hover:ease-in-out group-hover:delay-75

export default LapTopCategory;
