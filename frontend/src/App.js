/** @format */

import React, { useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProvider from "./application/Provider";

import "./App.css";
import UserProvider from "./application/UserContext";

const App = () => {
  return (
    <Router>
      <div className="app">
        <MyProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </UserProvider>
        </MyProvider>
      </div>
    </Router>
  );
};

export default App;
