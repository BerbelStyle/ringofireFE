/** @format */

import React from "react";
import "./styles/orderFormStyles.css";

const OrderForm = (props) => {
  return (
    <>
      <form className="form-container">
        <div className="form-box">
          <div className="form-row">
            <div placeholder="Name" className="form-input">
              HOLA
            </div>
            <div placeholder="Surname" className="form-input">
              QUE TAL
            </div>
          </div>
          <div className="form-row">
            <textarea className="form-textarea"></textarea>
          </div>
          <input type="submit" value="Send" className="btn-add-save" />
        </div>
      </form>
    </>
  );
};

export default OrderForm;
