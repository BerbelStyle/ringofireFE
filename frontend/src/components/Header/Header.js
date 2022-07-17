/** @format */

import React from "react";
import "./styles/headerStyles.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const headerLinks = require("../../data/data.json")?.links;
  return (
    <div
      className={"header-container" + (props?.withLinks ? " with-links" : "")}
    >
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
              <Link to={"/" + link.title} style={{ textDecoration: "none" }}>
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
