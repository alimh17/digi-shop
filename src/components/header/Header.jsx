import React from "react";

//stylesheet
import styles from "./header.module.css";

//components
import Navbar from "./components/navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Navbar />
    </div>
  );
};

export default Header;
