import React, { Component } from "react";

import Header from "./header/Header";
import Projects from "./Projects";
import Footer from "./Footer";

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
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
