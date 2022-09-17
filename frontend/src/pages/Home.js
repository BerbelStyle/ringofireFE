/** @format */

import React, { useContext } from "react";

import Header from "../components/Header/Header";
import HomeTabs from "../components/HomeTabs/HomeTabs";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../application/UserContext";

const Home = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <>
      <Header />
      <HomeTabs />
      <Footer />
    </>
  );
};

export default Home;
