/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../application/Provider";
import "./styles/thanksModalStyles.css";

const ImageModal = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const literals = require(`../../data/ringoffire-${language}.json`).literals;
  const url = window.location.search;
  const params = new URLSearchParams(url);
  setLanguage(params.get("lang"));

  return (
    <>
      <div className="modal-container">
        <div className="center-column">
          <p className="thanks">
            {(language === "ES" ? "¡" : "") + literals.thanks + "!"}{" "}
          </p>
          <p className="confirmation">{literals.emailSentMessage + "."}</p>
          <Link to="/" className="btn-back" style={{ textDecoration: "none" }}>
            {literals.back}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
