import React, { Component } from "react";
import moment from "moment";

export class Marketholiday extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header">{this.props.date}</div>
          <div className="card-body text-secondary">
            <h5 className="card-title text-truncate" data-bs-toggle="tooltip" data-bs-placement="bottom" title={this.props.name} style={{cursor:"pointer"}}>Name: {this.props.name}</h5>
            <p className="card-text">Exchange: {this.props.exchange}</p>
            <p className="">Status: {this.props.status}</p>
            <p className="">Open: {this.props.open ? moment(this.props.open).format("h:mm a") : 'NA' }</p>
            <p className="">
              Close: {this.props.close ? moment(this.props.close).format("h:mm a") : 'NA' }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketholiday;
