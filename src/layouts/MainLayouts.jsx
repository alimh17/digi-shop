import React, { Fragment } from "react";

//Components
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Wave from "./components/Wave";

const MainLayouts = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Wave />
      <Footer />
    </Fragment>
  );
};

export default MainLayouts;
