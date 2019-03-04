import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
  scrollToTop = () => {
    scroll.scrollToBottom();
  };
  toggleNavigation = e => {
    console.log(e.target);
    e.target.classList.toggle("navbar-toggler-icon-close");
  };

  render() {
    return (
      <React.Fragment>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <div className="menu">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h5 className="text-white h4">Projects</h5>
              </Link>
              <h5 className="text-white h4">Resume</h5>
              <h5 className="text-white h4">About</h5>
              <h5 className="text-white h4">Contact</h5>
            </div>

            <div className="text-muted-wrapper">
              <span className="text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate officia maxime dolores earum est
              </span>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            id="hamburger-icon"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              onClick={this.toggleNavigation}
              className="navbar-toggler-icon"
            />
          </button>
        </nav>

        
      </React.Fragment>
    );
  }
}

export default Navigation;
