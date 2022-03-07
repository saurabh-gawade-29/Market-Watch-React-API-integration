import React, { Component } from "react";
import Exchangeinner from '../Exchangeinner/Exchangeinner'

class Exchange extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[]
    }
  }
  
  async componentDidMount(){
    let url= "https://api.polygon.io/v3/reference/exchanges?asset_class=crypto&apiKey=5230DTQAt9F9mCqMp6S0kKq2psc4RYHL";
    let data = await fetch(url);
    let parseData = await data.json();
    // data about exchange
    let result = await parseData.results;
    // console.log(result);

    this.setState({
      items: result
    })

  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="contact-head">EXCHANGES</h1>
          <div className="all-exchange">
            <div className="row">
              
              {this.state.items.map((element)=>{
                return(
                  <div className="col-md-4 my-2" key={element.id}>
                  <Exchangeinner title={element.name} subtitle={element.type} link={element.url}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exchange;
