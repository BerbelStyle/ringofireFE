/** @format */

import React, { useState } from "react";
import "./styles/modalStyles.css";

const ImageModal = (props) => {
  const { onClose } = props;

  return (
    <>
      <div className="modal-container">
        <div className="modal-box">
          <span className="btn-close" onClick={onClose}></span>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
