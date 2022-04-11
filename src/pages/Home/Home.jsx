import React from "react";
import Banners from "./components/banners/Banners";
import BestSelling from "./components/bestSelling/BestSelling";
import CenterBanner from "./components/centerbander/CenterBanner";
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
      <CenterBanner />
      <BestSelling />
    </main>
  );
};

export default Home;
