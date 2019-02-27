import React, { Component } from "react";

import Header from "./header/Header";


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
        <Header />
      </div>
    );
  }
}

export default App;
