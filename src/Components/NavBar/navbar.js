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
          to="Service"
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
       style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2 px solid black",
        borderRadius: "5rem",
        padding: "0.5rem 1rem",
        background: "#F3C623",
        color: "rgb(29, 27, 27)",
        fontWeight: 600,
        fontSize: "1rem",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        cursor: "pointer",
       }}
       
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ContactMailIcon className="desttopMenuIcon" sx={{width:"1.5rem", height:"1.5rem"}}></ContactMailIcon>
        Contact me
      </button>
    </nav>
  );
};

export default Navbar;
