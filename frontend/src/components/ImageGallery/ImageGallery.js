/** @format */

import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  createContext,
} from "react";
import AddProductModal from "../Modals/AddProductModal";
import "./styles/galleryImageStyles.css";
import ImageModal from "../Modals/ImageModal";
import { LanguageContext } from "../../application/Provider";
import { UserContext } from "../../application/UserContext";

const ImageGallery = (props) => {
  const ref = useRef();
  const buttonRef = useRef();
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(ref);
  console.log(buttonRef);
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
    const checkIfClickedOutside = (e) => {
      if (buttonRef.current.contains(e.target)) {
      } else if (
        selectedProduct &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setSelectedProduct("");
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [selectedProduct]);

  useEffect(() => {
    setIsLoading(true);
    getProducts();
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="gallery-container">
        {isLoading ? (
          <div
            style={{
              color: "black",
              position: "absolute",
              fontSize: "40px",
              zIndex: "1000",
              top: "50%",
            }}
          >
            Cargando...
          </div>
        ) : (
          <>
            {user?.userrole === "superadmin" && (
              <div className="buttons-container" ref={buttonRef}>
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
                    disabled={!selectedProduct}
                    className="btn-delete"
                    onClick={() =>
                      deleteProduct(selectedProduct.product_id, selectedProduct)
                    }
                  >
                    <img className="icon" src="images/delete-svgrepo-com.svg" />
                  </div>
                )}
              </div>
            )}
            <div className="gallery">
              {products?.map((product) => {
                return (
                  <div
                    ref={ref}
                    className={
                      "product-card" +
                      (selectedProduct.product_id === product.product_id
                        ? "-selected"
                        : "")
                    }
                    onClick={() => {
                      if (user?.userrole === "superadmin") {
                        setSelectedProduct(product);
                      }
                    }}
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
          </>
        )}
      </div>

      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ImageGallery;
