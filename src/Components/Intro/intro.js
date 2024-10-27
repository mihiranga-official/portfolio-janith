import React from "react";
import "./intro.css";
// import bg from '../../assets/JImage.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Janith Gunawardana</span>
          <br />
          Software Engineer
        </span>
        <p className="introPara">
          "Experienced software engineer with a strong focus on developing
          innovative, scalable <br /> solutions that enhance user experience and
          drive efficiency."
        </p>
      </div>
      <img src={""} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
