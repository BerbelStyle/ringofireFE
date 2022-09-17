/** @format */

import React, { useContext } from "react";
import Header from "../components/Header/Header";
import TextBox from "../components/TextBox/TextBox";
import Footer from "../components/Footer/Footer";
import { LanguageContext } from "../application/Provider";
import { UserContext } from "../application/UserContext";

const About = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const { value, setValue } = useContext(UserContext);
  const introductionText = require(`../data/ringoffire-${language}.json`)?.texts
    ?.about?.content;
  return (
    <>
      <div>
        <Header withLinks pageTitle={"about"} />
        <TextBox>{introductionText.replace(/\\n/g, "x")}</TextBox>
        <Footer />
      </div>
    </>
  );
};

export default About;
