/** @format */

import React, { useContext } from "react";

import Header from "../components/Header/Header";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../application/UserContext";

const Gallery = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <>
      <Header withLinks pageTitle={"gallery"} />
      <ImageGallery />
      <Footer />
    </>
  );
};

export default Gallery;
