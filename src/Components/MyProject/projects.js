import React from "react";
import "./projects.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const Projects = () => {
  return (
    <section id="projects">
      <span className="projectTittle">My Projects</span>
      <span className="projectDes">
        I have developed multiple projects using a variety of technologies,
        including React, Angular, and Firebase. These include an e-commerce
        platform with real-time data management, a customer relationship
        management tool, and a cross-platform mobile fitness app, all focused on
        providing dynamic, user-friendly solutions.
      </span>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* First Card */}
        <Card
          className="card"
          sx={{
            maxWidth: 450,
            margin: "15px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #fff9c4 30%, #F0EB8D 60%)",
          }}
          onClick={() =>
            window.open(
              "https://github.com/Shashika-Liyanage/saloon-app",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }} // Add pointer cursor on hover
        >
          <CardContent className="cardContent">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="cardTitle"
              sx={{ fontSize: "1.5rem", fontFamily: "cursive" }} // Adjust size and family here
            >
              Salon Management System
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              className="cardBody"
              sx={{
                fontFamily: "revert-layer",
                fontSize: "1rem",
              }}
            >
              A salon management system web app built with React and Firebase
              offers comprehensive features for appointment management, user
              account handling, and price viewing. Leveraging Firebase, the app
              provides real-time updates, ensuring seamless booking and
              efficient customer data management for both staff and clients.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: 1,
                mt: 2,
              }}
            >
              <Chip
                label="React"
                sx={{ bgcolor: "#4CCD99", color: "#000000" }}
              />
              <Chip
                label="Firebase"
                sx={{ bgcolor: "#FF8E8F", color: "#000000" }}
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            maxWidth: 450,
            margin: "15px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #fff9c4 30%, #F0EB8D 60%)",
          }}
          onClick={() =>
            window.open("https://github.com/mihiranga-official/Resto", "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <CardContent className="cardContent">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="cardTitle"
              sx={{ fontSize: "1.5rem", fontFamily: "cursive" }}
            >
              Restaurant Management System
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="cardBody"
              sx={{
                fontFamily: "revert-layer",
                fontSize: "1rem",
              }}
            >
              A restaurant management system web application built with React
              and Firebase facilitates online ordering, reservation management,
              and menu updates. Firebase provides real-time data
              synchronization, enhancing the user experience for both customers
              and staff.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: 1,
                mt: 2,
              }}
            >
              <Chip
                label="React"
                sx={{ bgcolor: "#D875C7", color: "#000000" }}
              />
              <Chip
                label="Firebase"
                sx={{ bgcolor: "#7F9F80", color: "#000000" }}
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            maxWidth: 450,
            margin: "15px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #fff9c4 30%, #F0EB8D 60%)",
          }}
          onClick={() =>
            window.open(
              "https://github.com/mihiranga-official/Generative-AI",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }}
        >
          <CardContent className="cardContent">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="cardTitle"
              sx={{ fontSize: "1.5rem", fontFamily: "cursive" }}
            >
              Generative AI
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="cardBody"
              sx={{
                fontFamily: "revert-layer",
                fontSize: "1rem",
              }}
            >
              A generative AI chatbot built with <b>Python</b> leverages NLP and
              machine learning to generate real-time, relevant responses. It’s
              ideal for tasks like customer support and content generation,
              offering intelligent, conversational experiences.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: 1,
                mt: 2,
              }}
            >
              <Chip
                label="Python"
                sx={{ bgcolor: "#59D5E0", color: "#000000" }}
              />
            </Box>
          </CardContent>
        </Card>
      </div>
      <div className="aboutLink">
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
      <div className="aboutLink about">
        <GitHubIcon />
        <a
          href="https://github.com/mihiranga-official"
          target="_blank"
          rel="noopener noreferrer"
          className="aboutLinkText"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
