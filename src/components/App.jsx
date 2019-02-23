import React, { Component } from "react";
import { getRandomHeaderLine } from "../helper";
import Canvas from "./canvas/Canvas";


import Navigation from "./Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      model: "" 
    };
  }
  changeModel = e => {
    this.setState({ model: e.target.value });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Canvas tagline={getRandomHeaderLine(0)} />
     
      </div>
    );
  }
}

export default App;
