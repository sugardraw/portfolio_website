import React, { Component } from "react";

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
                to="projects"
                spy={true}
                offset={-40}
                smooth={true}
                duration={250}
              >
                <h5 className="text-white h4">Projects</h5>
              </Link>

              <Link to="contact" spy={true} smooth={true} duration={250}>
                <h5 className="text-white h4">Contact</h5>
              </Link>
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
