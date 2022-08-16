/** @format */

import React, { useState } from "react";
import "./styles/modalStyles.css";

const AddProductModal = (props) => {
  const { onClose } = props;
  const [image, setImage] = useState("");
  const [imagePath, setImagePath] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: imagePath,
      });
      window.location = "/gallery";
    } catch (err) {
      console.error(err.message);
    }
  };

  let imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setImagePath(e.target.files[0].name);
        console.log("OJO", imagePath);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  console.log(imagePath);
  return (
    <>
      <form
        className="modal-container"
        action="http://localhost:5000/products"
        method="post"
        //onSubmit={(e) => addProduct(e)}
      >
        <div className="modal-box">
          {/*}
          <input
            type="text"
            placeholder="Name of the product"
            className="btn-input-text"
            name="product-name"
            onChange={(e) => setName(e.target.value)}
          ></input>
  */}
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
          <input type="submit" value="Add" className="btn-add-save" />
          <span className="btn-close" onClick={onClose}></span>
        </div>
      </form>
    </>
  );
};

export default AddProductModal;
