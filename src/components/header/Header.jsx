import React, { Component } from "react";
import Canvas from "./Canvas";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Canvas />
        <div
          class="d-flex justify-content-between flex-wrap flex-md-row intro"
          id="top"
        >
          <div>
            <h1 class="intro-text p-3 mt-3">
              Hi, I am Sergio, a Junior Web Developer based in Berlin
            </h1>
          </div>
          <div class="intro-img" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
