/** @format */

import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProvider from "./application/Provider";

import "./App.css";
import Thanks from "./pages/Thanks";

const App = () => {
  const [user, setUser] = useState({});
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div className="app">
        <MyProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thankyou" element={<Thanks />} />
          </Routes>
        </MyProvider>
      </div>
    </Router>
  );
};

export default App;
