/** @format */

import React, { useState, useEffect } from "react";
import "./styles/galleryImageStyles.css";

const ImageGallery = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    let i = 19;
    let array = [];
    while (i > 0) {
      array.push("images/products/" + i + ".jpg");
      i--;
    }
    setImages(array);
  };

  return (
    <>
      <div className="gallery-container">
        <div className="gallery">
          {images.map((imagePath, index) => {
            return (
              <div className={"product-card"}>
                <img className="product-image" src={imagePath} alt={index} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
