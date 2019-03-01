import React, { Component } from "react";

import Header from "./header/Header";
import Projects from "./Projects";

import { animateScroll as scroll } from "react-scroll";
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
  scrollToTop = () => {
    scroll.scrollToBottom();
  };

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
