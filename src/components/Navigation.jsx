import React, { Component } from "react";
import $ from "jquery";


class Navigation extends Component {
  toggleNavigation = e => {
    console.log(e.target);
    e.target.classList.toggle("navbar-toggler-icon-close");

    $(document).ready(() => {
      console.log("testing function");
      // Add smooth scrolling to all links
      $("a").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash

          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top
            },
            700,
            function() {
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            }
          );
        } // End if
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <div className="menu">
              <h5 className="text-white h4">Content 1</h5>
              <h5 className="text-white h4">Content 2</h5>
              <h5 className="text-white h4">Content 3</h5>
              <h5 className="text-white h4">Content 4</h5>
              <h5 className="text-white h4">Content 5</h5>
              <h5 className="text-white h4">Content 6</h5>
              <h5 className="text-white h4">Content 7</h5>
              <h5 className="text-white h4">Content 8</h5>
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
        {/* <div id="change-header" className="position-absolute">
    
        </div> */}
      </React.Fragment>
    );
  }
}

export default Navigation;
