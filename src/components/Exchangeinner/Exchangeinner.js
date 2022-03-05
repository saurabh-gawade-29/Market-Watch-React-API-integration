import React, { Component } from "react";

export class Exchangeinner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.subtitle}</h6>
            <p className="card-text">{this.props.desc}</p>
            <a href="/" className="card-link">
              {this.props.link}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Exchangeinner;
