/** @format */

import React, { useContext, useState, useEffect } from "react";
import "./styles/headerStyles.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../application/Provider";
import { UserContext } from "../../application/UserContext";

const Header = (props) => {
  const { user, setUser } = useContext(UserContext);
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
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <Link to={"/login"}>
          <div className="header-login">Log in</div>
        </Link>
      )}

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
  );
};

export default Header;
