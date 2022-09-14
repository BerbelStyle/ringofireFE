/** @format */

import React, { useContext } from "react";
import "./styles/homeTabsStyles.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../application/Provider";
const HomeTabs = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const homeLinks = require(`../../data//ringoffire-${language}.json`)?.links;

  return (
    <>
      <div className="tabs-container">
        {homeLinks?.map((link) => {
          return (
            <div className="tab-card">
              <div className="tab-title">{link.title}</div>
              <Link to={"/" + link.value}>
                <img className="tab-image" src={link.image} alt={link.title} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeTabs;
