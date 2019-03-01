import React, { Component } from "react";
import $ from "jquery";

class Projects extends Component {
  componentDidMount() {
    $(function() {
      $(".img-w").each(function() {
        $(this).wrap("<div class='img-c'></div>");
        let imgSrc = $(this)
          .find("img")
          .attr("src");
        $(this).css("background-image", "url(" + imgSrc + ")");
      });

      $(".img-c").click(function() {
        let w = $(this).outerWidth();
        let h = $(this).outerHeight();
        let x = $(this).offset().left;
        let y = $(this).offset().top;

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
      copy.removeClass("positioned active").addClass("postactive");
      setTimeout(function() {
        copy.remove();
      }, 500);
    });
  }

  render() {
    return (
      <div id="projects">
        <div class="gallery">
          <div class="img-w project-0">
            <img
              src="https://images.unsplash.com/photo-1485766410122-1b403edb53db?dpr=1&auto=format&fit=crop&w=1500&h=846&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div>
          <div class="img-w project-1">
            <img
              src="https://images.unsplash.com/photo-1485793997698-baba81bf21ab?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div>
          <div class="img-w project-2">
            <img
              src="https://images.unsplash.com/photo-1485871800663-71856dc09ec4?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div>
          <div class="img-w project-3">
            <img
              src="https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div>
          <div class="img-w project-4">
            <img
              src="https://images.unsplash.com/photo-1485872304698-0537e003288d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div>
          <div class="img-w project-5">
            <img
              src="https://images.unsplash.com/photo-1485872325464-50f17b82075a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
              alt=""
            />
          </div>
  
        </div>
      </div>
    );
  }
}

export default Projects;
