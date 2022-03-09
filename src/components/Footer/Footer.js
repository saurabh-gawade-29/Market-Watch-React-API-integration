import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="text-center p-3 bg-dark" style={{color:"gold"}}>
          © 2022 Copyright: 
          <a className="text-reset fw-bold px-1" href="https://mdbootstrap.com/">
             marketwatch.com
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
