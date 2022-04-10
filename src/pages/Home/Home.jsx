import React from "react";
import Banners from "./components/banners/Banners";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";
import SpecialOffers from "./components/special_offers/SpecialOffers";

const Home = () => {
  return (
    <main className="">
      <Slider />
      <Services />
      <Banners />
      <SpecialOffers />
    </main>
  );
};

export default Home;
