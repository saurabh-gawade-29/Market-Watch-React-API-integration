import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './Sidenav.css'


export class Sidenav extends Component {
  render() {
    return (
      <>
        <ul className="nav flex-column nav-pills nav-fill">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-0" aria-current="page" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/exchange" className="nav-link px-0" activeClassName="active">
              Exchange
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link px-0" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link px-0" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default Sidenav;
