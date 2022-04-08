import React, { Fragment } from "react";

//Components
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const MainLayouts = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default MainLayouts;
