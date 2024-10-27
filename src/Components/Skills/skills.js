import React from "react";
import "./skill.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export default function BasicRating() {
  const [] = React.useState(2);

  // Define a reusable style for Typography
  const typographyStyle = {
    fontSize: "1.15rem",
    fontFamily: "cursive",
    fontWeight: 500,
    marginBottom: "0.25rem",
    marginTop: "0.25rem",
    textAlign: "center",
  };
  const rankstyle = {
    "& .MuiRating-iconFilled": {
      color: "#FF6600",
      Margin: "10px", // Gold color for filled stars
    },
    "& .MuiRating-iconEmpty": {
      color: "#61677A", // Light grey for empty stars
    },
  };

  return (
    <section id="skills">
      <span className="skillTittle">Professional Skills</span>
      <span className="skillDes">
        Skilled in React JS, React Native, and JavaScript for building dynamic
        web and mobile apps. Experienced with MongoDB and Firebase for efficient
        data management and real-time app functionality.
      </span>

      {/* Skills Box */}
      {/* First Card ----------Skills----- */}

      <div className="container">
        <Card className="cardSkills" sx={{ borderRadius: 10 }}>
          <span className="boxTopic">Skills</span>
          <CardContent>
            <Stack spacing={1}>
              {/* React JS */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  React JS
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={1}
                  readOnly
                />
              </Box>

              {/* React Native */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  React Native
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={1}
                  readOnly
                />
              </Box>

              {/* JavaScript */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  JavaScript
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={1}
                  readOnly
                />
              </Box>

              {/* Angular */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  Angular
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={1}
                  readOnly
                />
              </Box>

              {/* MongoDB */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  MongoDB
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={1}
                  readOnly
                />
              </Box>

              {/* Firebase */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  Firebase
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={1}
                  readOnly
                />
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Second Card -----------Technology and Key Areas------------  */}

        <Card className="cardSkills" sx={{ borderRadius: 10 }}>
          <span className="boxTopic">Technologies</span>
          <CardContent>
            <Stack spacing={1}>
              {/* Visual Studio */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  Visual Studio
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={1}
                  readOnly
                  sx={rankstyle}
                />
              </Box>

              {/* GitHub */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  GitHub
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={1}
                  readOnly
                  sx={rankstyle}
                />
              </Box>

              {/* GitLab */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  GitLab
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={1}
                  readOnly
                  sx={rankstyle}
                />
              </Box>

              {/* Postman */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div" sx={typographyStyle}>
                  Postman
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={1}
                  readOnly
                  sx={rankstyle}
                />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
