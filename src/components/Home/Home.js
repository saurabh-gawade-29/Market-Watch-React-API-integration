import React, { Component } from "react";
import Marketholiday from "../Marketholiday/Marketholiday";
import "./Home.css";


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    let url =
      "https://api.polygon.io/v1/marketstatus/upcoming?apiKey=5230DTQAt9F9mCqMp6S0kKq2psc4RYHL";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      items: parsedData,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div>
            <h1 className="about-head mb-4">WELCOME TO MARKET WATCH</h1>
            <h3 className="text-danger market-holidays">Market holidays</h3>
            <div className="market-holidays">
              <div className="row">
                {this.state.items.map((element, index) => {
                  return (
                    <div className="col-md-3" key={index}>
                      <Marketholiday
                        name={element.name}
                        status={element.status}
                        date={element.date}
                        open={element.open}
                        close={element.close}
                        exchange={element.exchange}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
