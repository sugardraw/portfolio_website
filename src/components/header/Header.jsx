import React, { Component } from "react";
import SvgText from "../IntroSvg";
import ArrowDown from "../../assets/images/arrow-down.svg";
import Profile from "../../assets/images/Sergio.png";
import $ from "jquery";

class Header extends Component {
  componentDidMount() {
    $(function () {
      $(".intro").addClass("go");

      $(".reload").click(function () {
        $(".intro")
          .removeClass("go")
          .delay(200)
          .queue(function (next) {
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
          <div className="intro-polygon">

          </div>

          <div class="text-ani">
            <SvgText />
          </div>
          <div>
            <img
              className="down-arrow"
              src={ArrowDown}
              alt=""
            />
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Header;
