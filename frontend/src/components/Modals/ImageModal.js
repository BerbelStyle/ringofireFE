/** @format */

import React, { useState } from "react";
import "./styles/modalStyles.css";

const ImageModal = (props) => {
  const { onClose } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

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
