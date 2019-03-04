import React, { Component } from "react";
import SvgText from "../IntroSvg";

import ArrowDown from "../../assets/images/arrow-down.svg";
import ArrowUpLight from "../../assets/images/arrow-up-light.svg";
import ArrowDownLight from "../../assets/images/arrow-down-light.svg";

import $ from "jquery";
import { Link } from "react-scroll";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mouse: {
        _x: 0,
        _y: 0,
        setOrigin: function(e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        }
      },
      mouseX: 0,
      mouseY: 0
    };
    this.innerElement = null;
    this.container = null;
  }

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
    const container = document.querySelector(".intro-polygon");
    const innerElement = document.querySelector("#dummy-helper");
    this.setState(state => {
      state.mouse.setOrigin(container);
      return state;
    });

    this.innerElement = innerElement;
    this.container = container;
  }

  updatePosition = event => {
    console.log(event.clientX, event.clientY);
    this.setState(
      {
        mouseX: event.clientX - this.state.mouse._x,
        mouseY: event.clientY - this.state.mouse._y
      },
      this.updateTransformStyle(
        (this.state.mouseX / this.innerElement.offsetHeight / 2).toFixed(2),
        (this.state.mouseY / this.innerElement.offsetWidth / 2).toFixed(2)
      )
    );
  };

  updateTransformStyle = (x, y) => {
    console.log(x, y, this.innerElement);
    var style =
      " skewY(35deg) rotateX(" + x * 1.3 + "deg) rotateY(" + y * 1.3 + "deg)";
    console.log(this.state.innerElement);
    this.container.style.transform = style;
    this.container.style.webkitTransform = style;
    this.container.style.mozTransform = style;
    this.container.style.msTransform = style;
    this.container.style.oTransform = style;
  };

  onMouseMoveHandler = e => {
    this.updatePosition(e);
  };

  render() {
    return (
      <React.Fragment>
        <div id="top" />
        <div
          class="d-flex justify-content-between flex-wrap flex-md-row intro"
          id="header-top"
        >
          <div
            onMouseEnter={this.onMouseEnterHandler}
            onMouseMove={this.onMouseMoveHandler}
            onMouseLeave={this.onMouseLeaveHandler}
            className="intro-polygon"
          >
            <div id="dummy-helper" />
          </div>

          <div class="text-ani">
            <SvgText />
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration={250}
          >
            <img
              className="up-arrow-light"
              src={ArrowUpLight}
              alt="ArrowUpLightUp"
            />
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={250}
          >
            <img className="down-arrow" src={ArrowDown} alt="arrow-down" />
          </Link>
          <Link
            activeClass="active"
            to="summary"
            spy={true}
            smooth={true}
            duration={250}
          >
            <img
              className="arrow-down-light"
              src={ArrowDownLight}
              alt="arrow-down-light"
            />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
