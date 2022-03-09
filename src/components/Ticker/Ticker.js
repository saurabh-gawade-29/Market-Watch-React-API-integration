import React, { Component } from "react";
import moment from "moment";


class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header text-truncate">{this.props.ticker}</div>
          <div className="card-body text-secondary">
            <h5 className="card-title text-truncate" data-bs-toggle="tooltip" data-bs-placement="bottom" title={this.props.name} style={{cursor:"pointer"}}>Name: {this.props.name}</h5>
            <p className="card-text text-truncate">Market: {this.props.market}</p>
            <p className="card-text text-truncate">Currency: {this.props.currency}</p>
            <p className="">
              Last updated: {this.props.utc ? moment(this.props.utc).format("h:mm a") : 'NA' }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Ticker;
