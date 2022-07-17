/** @format */

import React from "react";
import Header from "../components/Header/Header";
import TextBox from "../components/TextBox/TextBox";
import Footer from "../components/Footer/Footer";

const About = () => {
  const introductionText =
    require("../data/data.json")?.texts?.introduction?.content;
  return (
    <>
      <div>
        <Header withLinks pageTitle={"about"} />
        <TextBox>{introductionText}</TextBox>
        <Footer />
      </div>
    </>
  );
};

export default About;
