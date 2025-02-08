import React from "react";
import "./service.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

const Service = () => {
  return (
    <section id="service">
      <span className="serTittle">Services</span>

      {/* Row 1: Three Boxes */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {/* Box 1 */}
        <Box
          className="experience-card"
          sx={{ p: 1, borderRadius: 5, width: "300px" }}
        >
          <Typography variant="body2" sx={{ color: "#496989", mb: 1,fontSize:14, fontWeight:600 }}>
            January 2022 - October 2022
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Production Support Engineer <br /> Iron Mountain <br /> (Progress
            4GL Language)
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#496989", mb: 2, marginTop: 1, fontSize:14, fontWeight:600  }}
          >
            Virtusa Pvt Ltd
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              fontFamily: "Georgia, sans-serif",
              fontWeight: 400,
            }}
          >
            Contributed to a collaborative environment by creating unit test
            cases, resolving production issues, and providing peer reviews.
            Ensured code quality and maintainability by adhering to structured
            standards.
          </Typography>
          <Divider sx={{ bgcolor: "#444", my: 2, width: "100%" }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip
              label="Notepad ++"
              sx={{ bgcolor: "#05668D", color: "#ffffff" }}
            />
            <Chip
              label="GUI Procedure Editor"
              sx={{ bgcolor: "#3795BD", color: "#ffffff" }}
            />
            <Chip label="Putty" sx={{ bgcolor: "#00A896", color: "#ffffff" }} />
            <Chip
              label="Developer Studio"
              sx={{ bgcolor: "#77B0AA", color: "#ffffff" }}
            />
            <Chip
              label="Progress DB"
              sx={{ bgcolor: "#677D6A", color: "#ffffff" }}
            />
          </Box>
        </Box>

        {/* Box 2 */}
        <Box
          className="experience-card"
          sx={{ p: 1, borderRadius: 5, width: "300px" }}
        >
          <Typography variant="body2" sx={{ color: "#496989", mb: 1, fontSize:14, fontWeight:600  }}>
            October 2022 - November 2023
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Smart Reveal Frontend Engineer <br /> Iron Mountain <br /> (React)
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#496989", mb: 2, marginTop: 1, fontSize:14, fontWeight:600  }}
          >
            Virtusa Pvt Ltd
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              fontFamily: "Georgia, sans-serif",
              fontWeight: 400,
            }}
          >
            Efficiently resolved critical bugs, integrated Firebase, and
            designed Material UI interfaces with Redux. Modernized a Progress
            4GL app with React, integrated APIs, and led UI/UX and documentation
            within Agile/Scrum.
          </Typography>
          <Divider sx={{ bgcolor: "#444", my: 2, width: "100%" }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip
              label="React.js"
              sx={{ bgcolor: "#A8DADC", color: "#000000" }}
            />
            <Chip label="PHP" sx={{ bgcolor: "#8D99AE", color: "#ffffff" }} />
            <Chip
              label="NodeJS"
              sx={{ bgcolor: "#E63946", color: "#ffffff" }}
            />
            <Chip
              label="Firebase Integrations"
              sx={{ bgcolor: "#36C2CE", color: "#000000" }}
            />
            <Chip
              label="VS Code"
              sx={{ bgcolor: "#FFBF78", color: "#000000" }}
            />
            <Chip
              label="GitLab"
              sx={{ bgcolor: "#BB9AB1", color: "#000000" }}
            />
          </Box>
        </Box>

        {/* Box 3 */}
        <Box
          className="experience-card"
          sx={{ p: 1, borderRadius: 5, width: "300px" }}
        >
          <Typography variant="body2" sx={{ color: "#496989", mb: 1, fontSize:14, fontWeight:600  }}>
            November 2023 - April 2024
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Secure Base Full Stack Engineer <br /> Iron Mountain <br /> (React)
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#496989", mb: 2, marginTop: 1, fontSize:14, fontWeight:600  }}
          >
            Virtusa Pvt Ltd
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              fontFamily: "Georgia, sans-serif",
              fontWeight: 400,
            }}
          >
            Resolved major bugs, integrated Firebase, crafted responsive
            Material UI interfaces, and managed Redux. Modernized a .NET app
            with React, ensured secure code, led UI/UX, peer reviews, and
            seamless API integration in Agile.
          </Typography>
          <Divider sx={{ bgcolor: "#444", my: 2, width: "100%" }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip
              label="React.js"
              sx={{ bgcolor: "#A8DADC", color: "#000000" }}
            />
            <Chip label="PHP" sx={{ bgcolor: "#8D99AE", color: "#ffffff" }} />
            <Chip
              label="NodeJS"
              sx={{ bgcolor: "#E63946", color: "#ffffff" }}
            />
            <Chip
              label="Postman"
              sx={{ bgcolor: "#DEF9C4", color: "#000000" }}
            />
            <Chip
              label="Firebase Integrations"
              sx={{ bgcolor: "#36C2CE", color: "#000000" }}
            />
            <Chip
              label="VS Code"
              sx={{ bgcolor: "#FFBF78", color: "#000000" }}
            />
            <Chip
              label="GitLab"
              sx={{ bgcolor: "#BB9AB1", color: "#000000" }}
            />
          </Box>
        </Box>
      </div>

      {/* Row 2: Two Boxes */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom:"10rem",
        }}
      >
        {/* Box 4 */}
        <Box
          className="experience-card"
          sx={{ p: 1, borderRadius: 5, width: "300px" }}
        >
          <Typography variant="body2" sx={{ color: "#496989", mb: 1, fontSize:14, fontWeight:600  }}>
            August 2024 - September 2024
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Software Engineer <br /> (Angular)
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#496989", mb: 2, marginTop: 1, fontSize:14, fontWeight:600  }}
          >
            Damro Export
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              fontFamily: "Georgia, sans-serif",
              fontWeight: 400,
            }}
          >
            Developed an Angular-based Inventory Management System at Damro
            Export to streamline stock tracking, improve data accuracy, and
            optimize inventory workflows, ensuring efficient resource
            management.
          </Typography>
          <Divider sx={{ bgcolor: "#444", my: 2, width: "100%" }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip label="HTML" sx={{ bgcolor: "#48CFCB", color: "#ffffff" }} />
            <Chip label="CSS" sx={{ bgcolor: "#326CE5", color: "#ffffff" }} />
            <Chip label="SCSS" sx={{ bgcolor: "#D33833", color: "#ffffff" }} />
            <Chip
              label="Angular"
              sx={{ bgcolor: "#77B0AA", color: "#ffffff" }}
            />
            <Chip label="SQL" sx={{ bgcolor: "#E4B1F0", color: "#ffffff" }} />
          </Box>
        </Box>

        {/* Box 5 */}
        <Box
          className="experience-card"
          sx={{ p: 1, borderRadius: 5, width: "300px",  }}
        >
          <Typography variant="body2" sx={{ color: "#496989", mb: 1, fontSize:14, fontWeight:600  }}>
            September 2024 - October 2024
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Software Engineer <br /> (Angular)
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#496989", mb: 2, marginTop: 1, fontSize:14, fontWeight:600  }}
          >
           Damro Export
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              fontFamily: "Georgia, sans-serif",
              fontWeight: 400,
            }}
          >
            At Damro Export, contributed to a Customer Management System by
            creating documentation, writing test cases, and conducting QA
            testing to ensure system reliability and user satisfaction.
          </Typography>
          <Divider sx={{ bgcolor: "#444", my: 2, width: "100%" }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip label="C#" sx={{ bgcolor: "#FF6F00", color: "#ffffff" }} />
            <Chip label="SQL" sx={{ bgcolor: "#306998", color: "#ffffff" }} />
            <Chip label="Angular" sx={{ bgcolor: "#306998", color: "#ffffff" }} />
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default Service;
