import React, { Component } from "react";

import Header from "./header/Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import $ from "jquery";

import { animateScroll as scroll } from "react-scroll";
import Navigation from "./Navigation";

class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let viewportBottom = $(window).scrollTop() + $(window).innerHeight();

    if (viewportBottom > 2500 && viewportBottom < 3500) {
      $(".up-arrow-light").css("filter", "invert(75%)");
      $(".arrow-down-light").css("filter", "invert(75%)");
    } else {
      $(".down-arrow ").css("display", "block");
      $(".up-arrow-light").css("filter", "none");
      $(".arrow-down-light").css("filter", "none");
    }
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
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
