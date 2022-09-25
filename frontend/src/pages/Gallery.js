import React from "react";

import Header from "../components/Header/Header";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Footer from "../components/Footer/Footer";

const Gallery = () => {
  return (
    <>
      <Header withLinks pageTitle={"gallery"} />
      <ImageGallery />
      <Footer />
    </>
  );
};

export default Gallery;
