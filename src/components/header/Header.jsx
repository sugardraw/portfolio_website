import React, { Component } from "react";
import SvgText from "../IntroSvg";

import ArrowDown from "../../assets/images/arrow-down.svg";
import Profile from "../../assets/images/Sergio.png";
import $ from "jquery";
import { Link, animateScroll as scroll } from "react-scroll";

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

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <React.Fragment>
        <div
          class="d-flex justify-content-between flex-wrap flex-md-row intro"
          id="top"
        >
          <div className="intro-polygon" />

          <div class="text-ani">
            <SvgText />
          </div>
          <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
            <img className="down-arrow" src={ArrowDown} alt="" />
          </Link>
        </div>


        <section
        style={{ height: "100vw", width: "300px", backgroundColor: "red" }}
          title="section1"

          dark={true}
          id="section1"
        />

      </React.Fragment>
    );
  }
}

export default Header;
