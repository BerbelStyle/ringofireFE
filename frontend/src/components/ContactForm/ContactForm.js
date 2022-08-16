/** @format */

import React from "react";
import "./styles/contactFormStyles.css";

const ContactForm = (props) => {
  return (
    <form action="https://formsubmit.co/jorgexberbel@gmail.com" method="POST">
      <input type="text" name="email" required></input>
      <input type="text" name="name" required></input>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
