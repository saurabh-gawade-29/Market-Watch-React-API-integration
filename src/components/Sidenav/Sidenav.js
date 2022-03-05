import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './Sidenav.css'


export class Sidenav extends Component {
  render() {
    return (
      <>
        <ul className="nav flex-column nav-pills nav-fill">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-0" aria-current="page" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/exchange" className="nav-link px-0" activeclassname="active">
              Exchange
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link px-0" activeclassname="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link px-0" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default Sidenav;
