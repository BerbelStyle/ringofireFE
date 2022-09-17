/** @format */

import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import TextBox from "../components/TextBox/TextBox";
import { LanguageContext } from "../application/Provider";
import { UserContext } from "../application/UserContext";

const Contact = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const { value, setValue } = useContext(UserContext);
  const contactText = require(`../data/ringoffire-${language}.json`)?.texts
    ?.contact?.content;

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
