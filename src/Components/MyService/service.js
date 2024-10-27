import React from 'react';
import "./service.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

const Service = () => {
  return (
   
    <section id="experience2">
       <span className="experTittle">Services</span>
     

      <div
        className="three-boxes"
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {/* ------------------------Box 1 ----------------------*/}
        <Box className="experience-card" sx={{ p: 1, borderRadius: 5 }}>
          <Typography variant="body2" sx={{ color: "#888", mb: 1 }}>
            January 2022 - October 2022
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Production Support Engineer . <br /> Iron Mountain <br />
            (Progress 4GL Language)
          </Typography>

          <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
            Virtusa Pvt Ltd
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
            In a collaborative work environment, contributed by writing unit
            test case documents to ensure software quality, resolving critical
            production issues, and providing peer reviews to support team
            improvement. Followed structured code standards, ensuring
            consistent and maintainable outputs while promoting a smooth
            workflow.
          </Typography>

          <Divider sx={{ bgcolor: "#444", my: 2 }} />

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip
              label="Notepad ++"
              sx={{ bgcolor: "#05668D", color: "#ffffff" }}
            />
            <Chip
              label="GUI Procedure Editor"
              sx={{ bgcolor: "#3795BD", color: "#ffffff" }}
            />
            <Chip
              label="Putty"
              sx={{ bgcolor: "#00A896", color: "#ffffff" }}
            />
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

        {/*---------------- Box 2 ----------------------*/}
        <Box className="experience-card" sx={{ p: 1, borderRadius: 5 }}>
          <Typography variant="body2" sx={{ color: "#888", mb: 1 }}>
            October 2022 - November 2023
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Smart Reveal Upgrade Frontend Engineer . <br /> Iron Mountain{" "}
            <br />
            (React)
          </Typography>

          <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
            Virtusa Pvt Ltd
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
            Resolved critical bugs, implemented Firebase, and designed UIs
            with Material UI while managing Redux. Transformed a Progress 4GL
            app with React, ensured secure, scalable code, and integrated
            third-party APIs into Node.js. Led UI/UX design, contributed to
            documentation, and provided peer reviews within Agile/Scrum.
          </Typography>

          <Divider sx={{ bgcolor: "#444", my: 2 }} />

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
            <Chip
              label="Postman"
              sx={{ bgcolor: "#DEF9C4", color: "#000000" }}
            />
          </Box>
        </Box>

        {/*------------------------- Box 3 -------------------- */}
        <Box className="experience-card" sx={{ p: 1, borderRadius: 5 }}>
          <Typography variant="body2" sx={{ color: "#888", mb: 1 }}>
            November 2023 - April 2024
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Secure Base Upgrade Full Stack Engineer . <br /> Iron Mountain{" "}
            <br />
            (React)
          </Typography>

          <Typography variant="body2" sx={{ color: "#888", mb: 2 }}>
            Virtusa Pvt Ltd
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
            Addressed major bugs, integrated Firebase, and created user
            interfaces with Material UI. Managed Redux for consistency,
            revamped a .NET app using React, and ensured secure, scalable
            code. Oversaw UI/UX design, peer reviews, and integrated APIs into
            Node.js within Agile frameworks.
          </Typography>

          <Divider sx={{ bgcolor: "#444", my: 2 }} />

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
            <Chip
              label="Postman"
              sx={{ bgcolor: "#DEF9C4", color: "#000000" }}
            />
          </Box>
        </Box>
      </div>
    </section>
  );
}

export default Service;