import React from "react";
import "./navbar.css";
import logo from "../../assets/JLogo.png";
import { Link } from "react-scroll";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="service"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Service
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Project
        </Link>
      </div>
      <button
  className="buttonContact"
  onClick={() => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }}
>
  <ContactMailIcon className="desktopMenuIcon" />
  Contact me
</button>

    </nav>
  );
};

export default Navbar;
