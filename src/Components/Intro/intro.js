import React from "react";
import "./intro.css";
import wave from '../../assets/wave.jpg';
import profile from '../../assets/profile.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">
          Hello <img src={wave} alt="wave icon" className="waveIcon" />
        </span>
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
    
    </section>
  );
};

export default Intro;
