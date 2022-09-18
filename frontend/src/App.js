/** @format */

import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProvider from "./application/Provider";

import "./App.css";
import { UserContext } from "./application/UserContext";

const App = () => {
  const [user, setUser] = useState({});
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div className="app">
        <MyProvider>
          <UserContext.Provider value={providerValue}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </UserContext.Provider>
        </MyProvider>
      </div>
    </Router>
  );
};

export default App;
