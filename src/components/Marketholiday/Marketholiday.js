import React, { Component } from "react";

export class Marketholiday extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header">{this.props.date}</div>
          <div className="card-body text-secondary">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              {this.props.exchange}
            </p>
            <p className="">
              {this.props.status}
            </p>
            <p className="">
              {this.props.open}
            </p>
            <p className="">
              {this.props.close}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketholiday;
