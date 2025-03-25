import React, { useRef } from "react";
import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ax1d8bb", "template_sw0m40e", form.current, {
        publicKey: "OuEYIggEP1Cmx5tcK3IjC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <span className="contactTittle">Contact Me</span>
      <span className="contactDes">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>
      </form>
      <div className="contactContainer">
        <div className="contactDetails">
          <EmailIcon className="contactIcon" />
          <p>mihiranga.office@gmail.com</p>
        </div>
        <div className="contactDetails">
          <WhatsAppIcon className="contactIconWsp" />
          <CallIcon className="contactCall" />
          <p>+94 078-5052-139</p>
        </div>

        <a  href="https://web.facebook.com/Mihirangaz98/" target="_blank" rel="noopener noreferrer">
        <div className="contactDetails">
          <FacebookIcon   className="contactIconFa" />
          <p>Janith Mihiranga Gurawardana</p>
        </div>
        </a>
        <div className="contactDetails">
          <InstagramIcon className="contactIconIns" />
          <p>Janith Mihiranga</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
