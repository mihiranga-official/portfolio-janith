import React from "react";
import "./projects.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const Projects = () => {
  return (
    <section id="projects">
      <span className="projectTittle">My Projects</span>
      <span className="projectDes">
        I have developed various projects using React, Angular, and Firebase,
        including an e-commerce platform with real-time data management, a CRM
        tool, and a cross-platform mobile fitness app, all focused on dynamic,
        user-friendly solutions.
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
            background: "linear-gradient(to bottom, #FEFF9F, #FFFFFF)",
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
              sx={{ fontSize: "1.5rem", fontFamily: "cursive" }}
            >
              Salon Management System
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              className="cardBody"
              sx={{
                fontFamily: "Georgia, sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              A salon management web app built with React and Firebase provides
              features for appointment management, user accounts, and price
              viewing, ensuring real-time updates and efficient customer data
              management.
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
            background: "linear-gradient(to bottom, #FEFF9F, #FFFFFF)",
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
                fontFamily: "Georgia, sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              A restaurant management web app built with React and Firebase
              enables online ordering, reservation management, and menu updates,
              offering real-time data synchronization for an enhanced user
              experience.
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
                sx={{
                  bgcolor: "#D875C7",
                  color: "#000000",
                  marginTop: "1.43rem",
                }}
              />
              <Chip
                label="Firebase"
                sx={{
                  bgcolor: "#7F9F80",
                  color: "#000000",
                  marginTop: "1.43rem",
                }}
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
            background: "linear-gradient(to bottom, #FEFF9F, #FFFFFF)",
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
                fontFamily: "Georgia, sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              A generative AI chatbot built with Python uses NLP and machine
              learning to deliver real-time, relevant responses, making it ideal
              for customer support and content generation while adapting to user
              needs.
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
                sx={{
                  bgcolor: "#59D5E0",
                  color: "#000000",
                  marginTop: "1.50rem",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </div>

      <div className="aboutLinkGit">
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
