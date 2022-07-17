/** @format */

import React from "react";
import "./styles/textBoxStyles.css";

const TextBox = (props) => {
  return (
    <div className="text-box-container">
      <div className="text-box">{props.children}</div>
    </div>
  );
};

export default TextBox;
