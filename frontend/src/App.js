/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
