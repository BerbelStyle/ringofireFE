/** @format */

import React from "react";
import "./styles/homeStyles.css";

const HomeTabs = () => {
  const tabs = [
    { image: "images/gallery.jpg", title: "Gallery" },
    { image: "images/johnny-cash.jpg", title: "About" },
    { image: "images/leather-tools.jpg", title: "The Process" },
    { image: "images/contact.jpg", title: "Contact" },
  ];

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab) => {
          return (
            <div className="tab-card">
              <div className="tab-title">{tab.title}</div>
              <img className="tab-image" src={tab.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeTabs;
