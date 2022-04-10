import React from "react";

const Banners = () => {
  return (
    <section className="flex h-44 md:h-64 justify-center gap-3 mt-5">
      <div className="h-full ">
        <img
          src={process.env.PUBLIC_URL + "/images/banners/two.jpg"}
          className="h-full rounded-lg"
        />
      </div>
      <div className="h-full hidden md:flex ">
        <img
          src={process.env.PUBLIC_URL + "/images/banners/two.jpg"}
          className="h-full rounded-lg"
        />
      </div>
    </section>
  );
};

export default Banners;
