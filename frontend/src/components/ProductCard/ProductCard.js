/** @format */

import React from "react";
import "./styles/productCardStyles.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const productName = props.name;
  const productImage = props.image;
  return (
    <>
      <div className="tabs-container">
        <div className="tab-card">
          <div className="tab-title">{link.title}</div>
          <Link to={"/" + link.title}>
            <img className="tab-image" src={link.image} alt={link.title} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
