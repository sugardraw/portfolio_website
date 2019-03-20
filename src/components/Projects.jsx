import React, { Component } from "react";
import $ from "jquery";
import CocktailApp from "../assets/images/cocktail-app-screenshot.png";
import ReactThreeJS from "../assets/images/react-threejs.png";
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

    $(document).scroll(function() {
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

    $(function() {
      $(".img-w").each(function() {
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

      $(".img-c").click(function() {
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
              scrollTop: $(".infos").offset().top - 600
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
        setTimeout(function() {
          copy.addClass("positioned");
        }, 0);
      });
    });

    $(document).on("click", ".img-c.active", function() {
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
      setTimeout(function() {
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
              <h2>Cocktail-App</h2>
              <h6>Team work</h6>
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
            <div onClick={this.setInfos} className="img-w project project-0">
              <img src={CocktailApp} alt="cocktail-app" />
            </div>
            <div onClick={this.setInfos} className="img-w project project-1">
              <img src={ReactThreeJS} alt="react-threeJS" />
            </div>
            <div onClick={this.setInfos} className="upcoming project project-2">
              <h3>Buildy App - upcoming </h3>
              <p>team work final project at DCI School</p>
              <a href="https://github.com/sugardraw/buildy-frontend">
                visit the github repositoty | frontend
              </a>
              <br />
              <hr />
              <a href="https://github.com/sugardraw/buildy-backend">
                visit the github repositoty | backend
              </a>
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
