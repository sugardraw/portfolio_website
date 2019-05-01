import React, { Component } from "react";
import $ from "jquery";
import CocktailApp from "../assets/images/cocktail-app-screenshot.png";
import ReactThreeJS from "../assets/images/react-threejs.png";
import BuildyLogo from "../assets/images/buildy-logo-final_web.jpg";
import { Link } from "react-router-dom";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      infos: null,
      shown: false
    };
  }

  componentDidMount() {
    var self = this;

    $(document).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll > 800) {
        $(".down-arrow ").css("display", "none");
        $(".up-arrow-light").css("display", "block");
        $(".arrow-down-light").css("display", "block");
      } else {
        $(".down-arrow").css("display", "block");
        $(".up-arrow-light").css("display", "none");
        $(".arrow-down-light").css("display", "none");
      }
    });

    $(function () {
      $(".img-w").each(function () {
        $(this).wrap("<div class='img-c'></div>");
        let imgSrc = $(this)
          .find("img")
          .attr("src");
        $(this)
          .not(".down-arrow")
          .not(".up-arrow-light")
          .not(".arrow-down-light")
          .css("background-image", "url(" + imgSrc + ")");
      });

      $(".img-c").click(function () {
        let w = $(this).outerWidth();
        let h = $(this).outerHeight();
        let x = $(this).offset().left;
        let y = $(this).offset().top;

        self.setState(state => {
          state.shown = !state.shown;
          return state;
        });

        //set the user view exactly on the right place

        if (window.innerWidth < 400) {
          console.log("test1");
          $("html, body").animate(
            {
              scrollTop: $(".infos").offset().top
            },
            500
          );
        }
        if (window.innerWidth > 400 && window.innerWidth < 1400) {
          console.log("test2");
          $("html, body").animate(
            {
              scrollTop: $(".infos").offset().top - 200
            },
            500
          );
        }
        if (window.innerWidth > 1400) {
          console.log("test3");
          $("html, body").animate(
            {
              scrollTop: $(".infos").offset().top - 550
            },
            500
          );
        }

        $(".active")
          .not($(this))
          .remove();
        let copy = $(this).clone();
        copy
          .insertAfter($(this))
          .height(h)
          .width(w)
          .delay(500)
          .addClass("active");
        $(".active").css("top", y - 8);
        $(".active").css("left", x - 8);
        setTimeout(function () {
          copy.addClass("positioned");
        }, 0);
      });
    });

    $(document).on("click", ".img-c.active", function () {
      let copy = $(this);
      $("html, body").animate(
        {
          scrollTop: $("#projects").offset().top - 50
        },
        500
      );

      $(".down-arrow ").css("display", "none");
      $(".up-arrow-light").css("display", "block");
      $(".arrow-down-light").css("display", "block");
      self.setState(state => {
        state.shown = !state.shown;
        return state;
      });
      copy.removeClass("positioned active").addClass("postactive");
      setTimeout(function () {
        copy.remove();
      }, 500);
    });
  }
  setInfos = e => {
    let projectName = e.target.classList[2];
    console.log(projectName);
    this.forceUpdate();
    switch (projectName) {
      case "project-0":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>React+ThreeJS</h2>
              <h6>Personal work</h6>
              <p>
                Bringing 3D into the Web{" "}
              </p>
              <a
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                href="http://www.react-threejs.sugardraw.de/"
                target="_blank"
                rel="noopener noreferrer"

              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  Visit on-line
              </button>
              </a>
              <a
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                href="https://github.com/sugardraw/React-ThreeJS"
                target="_blank"
                rel="noopener noreferrer"

              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  See the code on Github
              </button>
              </a>
            </div>
          );
          return state;
        });

        break;

      case "project-1":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>BUILDY</h2>
              <h6>A home renovation and design mobile App</h6>
              <p>
                I lead a team of three people through this challenging Project. Nobody of us<br /> had any initial knowledge about React Native.
                We learned <br />a lot, and we would like to repeat the experience.

              </p>
              <a
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                href="https://www.canva.com/design/DADYugXAK08/eJYcg493rSIK9U-gK4So3w/view?presentation"
                target="_blank"
                rel="noopener noreferrer"

              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  Visit the App Presentation
              </button>
              </a>
              <a
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                href="https://github.com/sugardraw/buildy-frontend"
                target="_blank"
                rel="noopener noreferrer"

              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  See the frontend-code on Github
              </button>
              </a>
              <a
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                href="https://github.com/sugardraw/buildy-backend"
                target="_blank"
                rel="noopener noreferrer"

              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  See the backend-code on Github
              </button>
              </a>
            </div>
          );
          return state;
        });
        break;
      case "project-2":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>Cocktail-App</h2>
              <h6>Team work</h6>
              <p>
                Search for new Cocktail ideas or post your own cocktail. <br />Backend hosted by Heroku{" "}<br />
                To test the app:<br />
                <ul>
                  <li>Login email: ser@ser.com</li>
                  <li>Login password: ser</li>
                </ul>
              </p>
              <a
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                href="http://www.cocktail-app.sugardraw.de/"
                target="_blank"
                rel="noopener noreferrer"

              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  Visit on-line
                </button>
              </a>
              <a
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                href="https://github.com/sugardraw/cocktail-app"
                target="_blank"
                rel="noopener noreferrer"

              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  See the code on Github
                </button>
              </a>
            </div>
          );
          return state;
        });
        break;

      case "project-3":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>project-4</h2>
              <h6>"Personal work"</h6>
              <p>
                lorem Lorem ipsum dolor sit amet consectetur adipisicing
                elit...S{" "}
              </p>
              <Link
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                to="/ReactThree"
                target="_blank"
              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  Visit on-line
                </button>
              </Link>
            </div>
          );
          return state;
        });

        break;

      case "project-4":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>project-5</h2>
              <h6>"Personal work"</h6>
              <p>
                lorem Lorem ipsum dolor sit amet consectetur adipisicing
                elit...S{" "}
              </p>
              <Link
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                to="/ReactThree"
                target="_blank"
              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  Visit on-line
                </button>
              </Link>
            </div>
          );
          return state;
        });

        break;
      case "project-5":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>project-5</h2>
              <h6>"Personal work"</h6>
              <p>
                lorem Lorem ipsum dolor sit amet consectetur adipisicing
                elit...S{" "}
              </p>
              <Link
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                to="/ReactThree"
                target="_blank"
              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  Visit on-line
                </button>
              </Link>
            </div>
          );
          return state;
        });

        break;

      default:
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>project-6</h2>
              <h6>"Personal work"</h6>
              <p>
                lorem Lorem ipsum dolor sit amet consectetur adipisicing
                elit...S{" "}
              </p>
              <Link
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                to="/ReactThree"
                target="_blank"
              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  Visit on-line
                </button>
              </Link>
            </div>
          );
          return state;
        });

        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="infos">{this.state.shown && this.state.infos}</div>

        <div id="projects">
          <div class="gallery">
            <div onClick={this.setInfos} className="img-w project project-0">
              <img src={ReactThreeJS} alt="react-threeJS" />
            </div>
            <div onClick={this.setInfos} className="img-w project project-1">
              <img src={BuildyLogo} alt="buildy-logo" />
            </div>
            <div onClick={this.setInfos} className="img-w project project-2">
              <img src={CocktailApp} alt="cocktail-app" />
            </div>
            <div onClick={this.setInfos} className="upcoming project project-2">
              <h3>Full Stack Chat - upcoming </h3>
              <p>A live Chat using Socket.io and Express at DCI School</p>
              <a href="https://github.com/sugardraw/JSChat-FullStack">
                visit the github repositoty
              </a>
            </div>
            {/*
          <div onClick={this.setInfos} class="img-w project project-4">
            <img
              src="https://images.unsplash.com/photo-1485872304698-0537e003288d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div>
          <div onClick={this.setInfos} class="img-w project project-5">
            <img
              src="https://images.unsplash.com/photo-1485872325464-50f17b82075a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
