/** @format */

import React from "react";
import "./styles/contactFormStyles.css";

const ContactForm = (props) => {
  return (
    <form
      action="https://formsubmit.co/guille.moreno135@gmail.com"
      method="POST"
      className="form-container"
    >
      <div className="form-box">
        <div className="form-row">
          <input
            placeholder="name"
            type="text"
            name="name"
            className="input-text"
            required
          ></input>
          <input
            placeholder="e-mail"
            type="text"
            name="email"
            className="input-text"
            required
          ></input>
        </div>
        <div className="form-row">
          <textarea
            placeholder="write your message here..."
            type="text"
            name="name"
            className="input-textarea"
            required
          ></textarea>
        </div>
        <div className="form-row-center">
          <button disabled type="submit" className="btn-send">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
