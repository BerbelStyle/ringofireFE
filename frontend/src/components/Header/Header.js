/** @format */

import React, { useContext, useState, useEffect } from "react";
import "./styles/headerStyles.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../application/Provider";

const Header = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [toggle, setToggle] = useState(false);
  let headerLinks = require(`../../data/ringoffire-${language}.json`)?.links;

  useEffect(() => {
    headerLinks = require(`../../data/ringoffire-${language}.json`)?.links;
  }, [toggle]);

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
    setToggle((prevState) => !prevState);
  };

  return (
    <div
      className={"header-container" + (props?.withLinks ? " with-links" : "")}
    >
      <select name="select" onChange={(e) => changeLanguage(e)}>
        <option value="EN" selected={language === "EN" ? true : false}>
          EN
        </option>
        <option value="ES" selected={language === "ES" ? true : false}>
          ES
        </option>
      </select>
      <div className="header-login">Log in</div>
      <Link to={"/"}>
        <img
          src={"images/main_logo_black.png"}
          className="header-logo"
          alt="logo"
        />
      </Link>
      {props?.withLinks && (
        <div class="header-links-container">
          {headerLinks?.map((link) => {
            return (
              <Link to={"/" + link.value} style={{ textDecoration: "none" }}>
                <div
                  className={
                    "header-link" +
                    (props.pageTitle === link.title ? " active" : "")
                  }
                >
                  {link.title}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Header;
