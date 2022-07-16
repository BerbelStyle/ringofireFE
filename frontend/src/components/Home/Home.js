/** @format */

import React from "react";
import "./styles/homeStyles.css";

import HomeTabs from "./HomeTabs";

const Home = () => {
  return (
    <>
      <img src={"images/main_logo_black.png"} className="home-logo" />
      <HomeTabs />
      <div className="home-location">
        <p>Alcalá de Henares, Madrid</p>
      </div>
    </>
  );
};

export default Home;
