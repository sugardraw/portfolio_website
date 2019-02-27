import React, { Component } from "react";
import SvgText from "../IntroSvg";
import ArrowDown from "../../assets/images/arrow-down.svg";
import $ from "jquery";

class Header extends Component {
  componentDidMount() {
    $(function() {
      $(".intro").addClass("go");

      $(".reload").click(function() {
        $(".intro")
          .removeClass("go")
          .delay(200)
          .queue(function(next) {
            $(".intro").addClass("go");
            next();
          });
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div
          class="d-flex justify-content-between flex-wrap flex-md-row intro"
          id="top"
        >
          <div>
            <SvgText start={this.start} />
          </div>
        </div>
        <div style={{ marginTop: "-30vh" }}>
          <img
            style={{ float: "right", marginRight: "3rem" }}
            className="down-arrow"
            src={ArrowDown}
            alt=""
          />
        </div>
        <div class="intro-img" />
      </React.Fragment>
    );
  }
}

export default Header;
