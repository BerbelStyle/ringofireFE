/** @format */

import React, { useState, useEffect } from "react";
import AddProductModal from "../Modals/AddProductModal";
import { Link } from "react-router-dom";
import "./styles/galleryImageStyles.css";
import ImageModal from "../Modals/ImageModal";

const ImageGallery = (props) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteProduct = async (id, prod) => {
    try {
      const deleteProduct = await fetch(
        `http://localhost:5000/products/${id}&${prod.product_image}`,
        {
          method: "DELETE",
        }
      );
      setProducts(products.filter((product) => product.product_id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(selectedProduct);
  return (
    <>
      <div className="gallery-container">
        <div
          type="button"
          className="btn-add"
          onClick={() => setShowModal(true)}
        >
          Add Product
        </div>
        <div
          type="button"
          className="btn-add"
          onClick={() =>
            deleteProduct(selectedProduct.product_id, selectedProduct)
          }
        >
          Delete Product
        </div>
        <div className="gallery">
          {products?.map((product) => {
            console.log(
              "../../" + product.product_image.replace("../frontend/", "")
            );
            return (
              <div
                className="product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  className="product-image"
                  src={"images/products/" + product.product_image}
                  alt={product.product_id}
                />
              </div>
            );
          })}
        </div>
      </div>
      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
      {showImageModal && (
        <ImageModal onClose={() => setShowImageModal(false)} />
      )}
    </>
  );
};

export default ImageGallery;
