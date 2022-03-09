import React, { Component } from "react";
import Marketholiday from "../Marketholiday/Marketholiday";
import Ticker from "../Ticker/Ticker";
import "./Home.css";


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      ticker:[]
    };
  }

  async componentDidMount() {
    let url =
      "https://api.polygon.io/v1/marketstatus/upcoming?apiKey=5230DTQAt9F9mCqMp6S0kKq2psc4RYHL";
    let data = await fetch(url);
    let parsedData = await data.json();

    let ticker = "https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=5230DTQAt9F9mCqMp6S0kKq2psc4RYHL";
    let tickerData = await fetch(ticker);
    let tickerParsed = await tickerData.json();
    let tickerResult = await tickerParsed.results;

    this.setState({
      items: parsedData,
      ticker: tickerResult
    });
  }

  render() {
    return (
      <>
      
        <div className="container">
          <div>
            <h1 className="about-head mb-4">WELCOME TO MARKET WATCH</h1>

            <h3 className="text-danger market-holidays">TICKER</h3>
            <div className="market-holidays">
              <div className="row">
                {this.state.ticker.map((element, index) => {
                  return (
                    <div className="col-md-3" key={index}>
                      <Ticker
                        ticker={element.ticker}
                        name={element.name}
                        market={element.market}
                        currency={element.currency_name}
                        utc={element.last_updated_utc}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

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
