/** @format */

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../application/Provider";
import "./styles/contactFormStyles.css";

const ContactForm = (props) => {
  const [language] = useContext(LanguageContext);
  const [warning, setWarning] = useState(false);
  const literals = require(`../../data/ringoffire-${language}.json`).literals;
  const user = localStorage.getItem("user");
  return (
    <form
      action="https://formsubmit.co/guille.moreno135@gmail.com"
      method="POST"
      className="form-container"
    >
      <div className="form-box">
        <div className="form-row">
          <input
            placeholder={literals.name}
            type="text"
            name="name"
            className="input-text"
            required
          ></input>
          <input
            placeholder={literals.email}
            type="text"
            name="email"
            className="input-text"
            required
          ></input>
        </div>
        <div className="form-row">
          <textarea
            placeholder={literals.writeMessage + "..."}
            type="text"
            name="name"
            className="input-textarea"
            required
          ></textarea>
        </div>
        <div className="form-row-center">
          <button
            disabled={user ? false : true}
            type="submit"
            className="btn-send"
            onClick={() => setWarning(true)}
          >
            {literals.send}
          </button>
          <a href="https://www.instagram.com/ringfire_leather/" target="_blank">
            <img
              width="40px"
              height="40px"
              src={"images/instagram.png"}
              alt={"instagram"}
            />
          </a>
        </div>
        {warning && (
          <p style={{ margin: 0, color: "red" }}>
            Registrate para poder enviar un mensaje
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
