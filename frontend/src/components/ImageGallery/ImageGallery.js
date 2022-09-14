/** @format */

import React, { useState, useEffect } from "react";
import AddProductModal from "../Modals/AddProductModal";
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

  return (
    <>
      <div className="gallery-container">
        <div className="buttons-container">
          <div
            type="button"
            className="btn-add"
            onClick={() => setShowModal(true)}
          >
            <img className="icon" src="images/add-svgrepo-com.svg" />
          </div>
          {selectedProduct && (
            <div
              type="button"
              className="btn-delete"
              onClick={() =>
                deleteProduct(selectedProduct.product_id, selectedProduct)
              }
            >
              <img className="icon" src="images/delete-svgrepo-com.svg" />
            </div>
          )}
        </div>
        <div className="gallery">
          {products?.map((product) => {
            return (
              <div
                className={
                  "product-card" +
                  (selectedProduct.product_id === product.product_id
                    ? "-selected"
                    : "")
                }
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
