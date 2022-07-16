/** @format */

import React from "react";
import "./styles/homeStyles.css";
import { Link } from "react-router-dom";

const HomeTabs = () => {
  const tabs = [
    { image: "images/gallery.jpg", title: "gallery" },
    { image: "images/johnny-cash.jpg", title: "about" },
    { image: "images/leather-tools.jpg", title: "process" },
    { image: "images/contact.jpg", title: "contact" },
  ];

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab) => {
          return (
            <div className="tab-card">
              <div className="tab-title">{tab.title}</div>
              <Link to={"/" + tab.title}>
                <img className="tab-image" src={tab.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeTabs;
