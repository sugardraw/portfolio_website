import React, { Component } from "react";
import $ from "jquery";
import CocktailApp from "../assets/images/cocktail-app-screenshot.png";
import ReactThreeJS from "../assets/images/react-threejs.png";
import { Link } from "react-router-dom";
import ArrowDownLight from "../assets/images/arrow-down-light.svg";
import ArrowDown from "../assets/images/arrow-down.svg";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      infos: null,
      shown: false
    };
  }

  componentDidMount() {
    console.log(ArrowDownLight);
    var self = this;
    console.log(self);
    $(function() {
      $(".img-w").each(function() {
        $(this).wrap("<div class='img-c'></div>");
        let imgSrc = $(this)
          .find("img")
          .attr("src");
        $(this)
          .not(".down-arrow")
          .css("background-image", "url(" + imgSrc + ")");
      });

      $(".img-c").click(function() {
        let w = $(this).outerWidth();
        let h = $(this).outerHeight();
        let x = $(this).offset().left;
        let y = $(this).offset().top;

        self.setState(state => {
          state.shown = !state.shown;
          return state;
        });

        $(".down-arrow").attr("src", ArrowDownLight);
        $(".up-arrow-light").css("display", "block");

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
        setTimeout(function() {
          copy.addClass("positioned");
        }, 0);
      });
    });

    $(document).on("click", ".img-c.active", function() {
      let copy = $(this);
      $(".down-arrow").attr("src", ArrowDown);
      $(".up-arrow-light").css("display", "none");
      self.setState(state => {
        state.shown = !state.shown;
        return state;
      });
      copy.removeClass("positioned active").addClass("postactive");
      setTimeout(function() {
        copy.remove();
      }, 500);
    });
  }

  setInfos = e => {
    let projectName = e.target.classList[1];
    this.forceUpdate();
    switch (projectName) {
      case "project-0":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>Cocktail-App</h2>
              <h6>Team work</h6>
              <p>
                lorem Lorem ipsum dolor sit amet consectetur adipisicingelit...S{" "}
              </p>
              <Link
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                to="/CocktailApp"
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
              <Link
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                to="/CocktailApp"
                target="_blank"
              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  See the code on Github
                </button>
              </Link>
            </div>
          );
          return state;
        });
        break;
      case "project-1":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>React+ThreeJS</h2>
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
              <Link
                style={{
                  display: "block",
                  width: "200px",
                  position: "relative",
                  zIndex: "4"
                }}
                to="/Git-ReactThree"
                target="_blank"
              >
                {" "}
                <button
                  class="btn btn-outline-light mt-3 "
                  type="button"
                  id="button-addon1"
                >
                  See the code on Github
                </button>
              </Link>
            </div>
          );
          return state;
        });

        break;
      case "project-2":
        this.setState(state => {
          state.infos = (
            <div className="project-infos">
              <h2>project-3</h2>
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
            <div onClick={this.setInfos} class="img-w project project-0">
              <img src={CocktailApp} alt="cocktail-app" />
            </div>
            <div onClick={this.setInfos} class="img-w project project-1">
              <img src={ReactThreeJS} alt="react-threeJS" />
            </div>
            <div onClick={this.setInfos} class="img-w project project-2">
              <img
                src="https://images.unsplash.com/photo-1485871800663-71856dc09ec4?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop="
                alt=""
              />
            </div>
            <div onClick={this.setInfos} class="img-w project project-3">
              <img
                src="https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop="
                alt=""
              />
            </div>
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
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
