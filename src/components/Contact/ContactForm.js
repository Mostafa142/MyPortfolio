import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "myPortfolio",
        "template_duuiulg",
        form.current,
        "user_0LlSHdwx4gy7hCIXi3CpZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  // Hide Results
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <form id="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="row">
        {/* <!--Name Field--> */}
        <div className="col-md-6 mb-5">
          <span className="input">
            <input
              className="input__field cf-validate"
              type="text"
              name="from_name"
              id="from_name"
              required
            />
            <label className="input__label" htmlFor="cf-name">
              Name
            </label>
          </span>
        </div>

        {/* <!--Email Field--> */}
        <div className="col-md-6 mb-5">
          <span className="input">
            <input
              className="input__field cf-validate"
              type="email"
              name="email"
              id="email"
              required
            />
            <label className="input__label" htmlFor="cf-email">
              Email
            </label>
          </span>
        </div>

        {/* <!--Message Box--> */}
        <div className="col-md-12 mb-5">
          <span className="input">
            <textarea
              className="input__field cf-validate"
              name="message"
              id="message"
              rows="5"
              required
            ></textarea>
            <label className="input__label" htmlFor="cf-message">
              Send me a message...
            </label>
          </span>
        </div>

        <div className="alert-container text-success col-md-12">
          {result ? <p>Your message has been successfully sent.</p> : null}
        </div>

        {/* <!--Submit Button--> */}
        <div className="col-md-12 text-center">
          <button
            type="submit"
            id="button"
            value="Send Email"
            className="btn-main  mb-2"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
