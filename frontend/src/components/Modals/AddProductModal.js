/** @format */

import React, { useState, useContext } from "react";
import { LanguageContext } from "../../application/Provider";
import "./styles/modalStyles.css";

const AddProductModal = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const { onClose } = props;
  const [image, setImage] = useState("");
  let literals = require(`../../data/ringoffire-${language}.json`).literals;
  let imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      <form
        className="modal-container"
        action="http://localhost:5000/products"
        method="post"
        enctype="multipart/form-data"
        target="."
      >
        <div className="modal-box">
          <div className="img-holder">
            <img src={image} alt="" id="img" className="imgx" />
          </div>
          <input
            type="file"
            accept="image/*"
            className="btn-input-image"
            name="productImage"
            onChange={(e) => imageHandler(e)}
          ></input>
          <input type="submit" value={literals.add} className="btn-add-save" />
          <span className="btn-close" onClick={onClose}></span>
        </div>
      </form>
    </>
  );
};

export default AddProductModal;
