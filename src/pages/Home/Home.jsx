import React from "react";
import Banners from "./components/banners/Banners";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";

const Home = () => {
  return (
    <main className="">
      <Slider />
      <Services />
      <Banners />
    </main>
  );
};

export default Home;
