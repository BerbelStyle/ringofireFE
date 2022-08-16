/** @format */

import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <Header withLinks pageTitle={"contact"} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
