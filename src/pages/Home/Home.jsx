import React from "react";

//Componetns
import Banners from "./components/banners/Banners";
import BestSelling from "./components/bestSelling/BestSelling";
import CenterBanner from "./components/centerbaner/CenterBanner";
import FourPorduct from "./components/fourProduct/FourPorduct";
import NewProducts from "./components/newProduct/NewProducts";
import News from "./components/news/News";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";
import SpecialOffers from "./components/special_offers/SpecialOffers";

const Home = () => {
  return (
    <main className="">
      <Slider />
      <Banners />
      <SpecialOffers />
      <Services />
      <CenterBanner />
      <BestSelling />
      <FourPorduct />
      <News />
      <NewProducts />
    </main>
  );
};

export default Home;
