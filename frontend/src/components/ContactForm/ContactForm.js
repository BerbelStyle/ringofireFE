/** @format */

import React, { useState, useContext } from "react";
import { LanguageContext } from "../../application/Provider";
import "./styles/contactFormStyles.css";

const ContactForm = (props) => {
  const [language] = useContext(LanguageContext);
  const literals = require(`../../data/ringoffire-${language}.json`).literals;

  return (
    <form
      action="https://formsubmit.co/jorgexberbel@gmail.com"
      method="POST"
      className="form-container"
    >
      <div className="form-box">
        <div className="form-row">
          <input
            type="hidden"
            name="_next"
            value={`http://ringoffireleather.netlify.app//thankyou?&lang=${language}`}
          />
          <input type="hidden" name="_captcha" value="false" />
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
          <button type="submit" className="btn-send">
            {literals.send}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
