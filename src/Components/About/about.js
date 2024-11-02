import React from "react";
import "./about.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <section id="about">
      <span className="aboutTittle">Personal Info</span>
      <span className="aboutDes">
        I am an adaptable IT professional with a solid background in software
        engineering and a passion for solving complex problems. With over three
        years of experience, I excel at developing scalable, user-friendly
        solutions that drive efficiency and align with business objectives.
      </span>
      <div className="aboutBar">
        <div className="aboutInfo">
          <PersonPinIcon className="aboutIcon" />
          <span className="aboutText">
            Name:{" "}
            <span className="aboutValue">Janith Mihiranga Gurawardana</span>
          </span>
        </div>
      </div>
      <div className="aboutBar">
        <div className="aboutInfo">
          <HomeIcon className="aboutIcon" />
          <span className="aboutText">
            Address: <span className="aboutValueA">Gampaha, Sri Lanka.</span>
          </span>
        </div>
      </div>
      <div className="aboutBar">
        <div className="aboutInfo">
          <CalendarMonthIcon className="aboutIcon" />
          <span className="aboutText">
            DOB:{" "}
            <span className="aboutValue">
              18th of September 1998 | 26 YEARS
            </span>
          </span>
        </div>
      </div>
      <div className="aboutLinkedin">
        <LinkedInIcon />
        <a
          href="https://www.linkedin.com/in/janithmihiranga"
          target="_blank"
          rel="noopener noreferrer"
          className="aboutLinkText"
        >
          View LinkedIn
        </a>
      </div>
    </section>
  );
};

export default About;
