import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="logo-head h4">MARKET WATCH</h5>
            <span className="text-white">
                Price is what you pay, value is what you get.
            </span>
            <br/>
            <span className="text-muted">
              -Warren Buffett
            </span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand market-watch-logo" href="/">Market Watch</a>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
