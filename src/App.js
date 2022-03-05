import React, { Component } from "react";
import Sidenav from "./components/Sidenav/Sidenav";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Exchange from "./components/Exchange/Exchange";
import { Routes, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="row mx-0">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 py-4 px-0">
            <div className="sidenav">
              <Sidenav />
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 py-4">
            <div className="sideout">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="exchange" element={<Exchange />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
