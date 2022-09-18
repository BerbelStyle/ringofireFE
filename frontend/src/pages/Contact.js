/** @format */

import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import TextBox from "../components/TextBox/TextBox";
import { LanguageContext } from "../application/Provider";

const Contact = (props) => {
  const [language] = useContext(LanguageContext);
  const contactText = require(`../data/ringoffire-${language}.json`)?.literals
    ?.contact;

  return (
    <>
      <Header withLinks pageTitle={"contact"} />
      <TextBox>{contactText}</TextBox>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
