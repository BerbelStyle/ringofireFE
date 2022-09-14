/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProvider from "./application/Provider";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <MyProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MyProvider>
      </div>
    </Router>
  );
};

export default App;
