/** @format */

import React, { useContext, useState, useEffect } from "react";
import "./styles/headerStyles.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../application/Provider";

const Header = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [toggle, setToggle] = useState(false);

  let literals = require(`../../data/ringoffire-${language}.json`);

  useEffect(() => {
    literals = require(`../../data/ringoffire-${language}.json`);
  }, [toggle]);

  const changeLanguage = (e) => {
    setLanguage(e.target.value);

    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={"header-container" + (props?.withLinks ? " with-links" : "")}
      >
        <select
          name="select"
          className="lang-select"
          onChange={(e) => changeLanguage(e)}
        >
          <option
            className="lang-option"
            value="EN"
            selected={language === "EN" ? true : false}
          >
            EN
          </option>
          <option
            className="lang-option"
            value="ES"
            selected={language === "ES" ? true : false}
          >
            ES
          </option>
        </select>
        <Link to={"/"}>
          <img
            src={"images/main_logo_black.png"}
            className="header-logo"
            alt="logo"
          />
        </Link>
        <a href="https://www.instagram.com/ringfire_leather/" target="_blank">
          <img
            className="header-insta"
            width="30px"
            src={"images/instagram.png"}
            alt={"instagram"}
          />
        </a>
        {props?.withLinks && (
          <div class="header-links-container">
            {literals?.links.map((link) => {
              return (
                <Link to={"/" + link.value} style={{ textDecoration: "none" }}>
                  <div
                    className={
                      "header-link" +
                      (props.pageTitle === link.value ? " active" : "")
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
    </>
  );
};

export default Header;
