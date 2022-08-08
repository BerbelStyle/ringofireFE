/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Process from "./pages/Process";
import Order from "./pages/Order";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
