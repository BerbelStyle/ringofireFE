import React from "react";
import "./styles/homeStyles.css";

const Home = () => {
    return (<>
    <img src={"images/main_logo_black.png"} className="title-logo"/>
    <div className="hero-container">
        <div className="hero-tab">
        <div className="tab-title">About</div>
            <img src={"images/johnny-cash.jpg"} className="otra"/>
        </div>
        <div className="hero-tab">
            <div className="tab-title">Contact</div>
            <img src={"images/contact.jpg"} className="otra"/>
        </div>
        <div className="hero-tab">
        <div className="tab-title">The Process</div>
            <img src={"images/leather-tools.jpg"} className="otra"/>
        </div>
        <div className="hero-tab">
        <div className="tab-title">Gallery</div>
            <img src={"images/gallery.jpg"} className="otra"/>
        </div>
    </div>
    <p className="localization">Alcalá de Henares, Madrid</p>
    </>)
}

export default Home;