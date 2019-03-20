import React, { Component } from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <section className="mb-4">
          <h1 className="h1-responsive text-center my-4">Contact</h1>
          <p className="text-center w-responsive col-md-9 mx-auto mb-5 tagline-contact">
            If you are interested in my work, have some questions, or just want to say hello, <br />fill up the form below or send an email to
            sergiousle@gmail.com
            </p>
          <div className="row">
            <div className="col-xl-9 col-md-12 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                  <div className="col-xl-10 col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="name" name="name" className="form-control my-1" />
                      <label for="name" className="">Your name</label>
                    </div>
                  </div>

                  <div className="col-xl-10 col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" className="form-control my-1" />
                      <label for="email" className="">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-10 col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="subject" name="subject" className="form-control my-1" />
                      <label for="subject" className="">Subject</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-10 col-md-12">
                    <div className="md-form">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control my-1 md-textarea"></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-center text-xl-left">
                <input
                  class="btn btn-outline-light mt-3 "
                  type="submit"
                  id="button-contact"
                  value="Send"
                />
              </div>
              <div className="status"></div>
            </div>
            <div className="col-xl-3 col-md-12 mt-5 col-sm-12 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <p>Jahnstr. 4, 10967, Berlin<br />
                    +49 176 61848430<br />
                    sergiousle@gmail.com</p>
                </li>
                <hr style={{ textAlign: "left", backgroundColor: "white", height: "0.5px", maxWidth: "250px" }} />
                <li>
                  <p>I'd also like to invite you to<br />
                    know my activity as illustrator:
                    <a href="http://www.sugardraw.de" target="_blank" rel="noopener noreferrer"> www.sugardraw.de</a></p>

                </li>
              </ul>


            </div>
          </div>
          <div className="row links">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">
                <a href="https://www.linkedin.com/in/sergio-usl%C3%A9-garc%C3%ADa-web-developer/" target="_blank" rel="noopener noreferrer">   <FaLinkedinIn size={50} /></a></h5>

            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">
                <a href="https://github.com/sugardraw" target="_blank" rel="noopener noreferrer">  <FaGithub size={50} /></a></h5>


            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">

                <a href="https://www.facebook.com/sergio.u.garcia.98" target="_blank" rel="noopener noreferrer"><FaFacebookF size={50} /></a>

              </h5>

            </div>


          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
