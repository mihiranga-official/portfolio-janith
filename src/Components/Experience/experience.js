import React from "react";
import "./experience.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import virtusa from "../../assets/virtusa.jpeg";
import damro from "../../assets/damro.png";
import logo from "../../assets/online.png";

const Experience = () => {
  return (
    <section id="experience">
      <span className="experTittle">Professional Experiences</span>
      <span className="experDes">
        Resolved critical bugs and integrated Firebase to enhance application
        stability and data management. Developed an intuitive UI with
        Material-UI and optimized performance, while maintaining data integrity
        and promoting high coding standards.
      </span>
      <Stack
        direction="row"
        spacing={6}
        justifyContent="center"
        marginTop={5}
        marginBottom={25}
      >
        <Card
          variant="outlined"
          sx={{
            width: 300,
            height: 350,
            padding: 3,
            borderRadius: 5,
            borderColor: "#343131",
            borderWidth: 2,
            borderStyle: "solid",
            backgroundImage: "linear-gradient(to bottom, #FDFFC2, #FFFFFF)",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              mb: 2,
            }}
          >
            <Box
              component="img"
              src={virtusa}
              alt="Virtusa"
              sx={{
                width: 75,
                height: 75,
                borderRadius: "50%",
                position: "absolute",
                top: -15,
                marginRight: "0rem"
              }}
            />
          </Box>
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontFamily: "Georgia, sans-serif",
                fontSize: "1.5rem",
                color: "#343131",
                marginTop: "40px",
              }}
            >
              Virtusa Pvt Ltd
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#61677A",
                marginTop: 1,
                fontFamily: "cursive",
                fontSize: "1rem",
              }}
            >
              Frontend Software Engineer
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#000000", height: "2px", width: "100%" }} />
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                color: "text.primary",
                fontFamily: "monospace",
              }}
            >
              Duration
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Chip
                label="3 Years (2021 - 2024)"
                sx={{
                  backgroundColor: "#F5D061",
                  color: "black",
                  fontWeight: 600,
                  padding: 2,
                  margin: 2,
                  fontSize: "0.80rem",
                }}
              />
            </Stack>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            width: 300,
            height: 350,
            padding: 3,
            borderRadius: 5,
            borderColor: "#343131",
            borderWidth: 2,
            borderStyle: "solid",
            backgroundImage: "linear-gradient(to bottom, #FDFFC2, #FFFFFF)",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              mb: 2,
            }}
          >
            <Box
              component="img"
              src={damro}
              alt="Damro"
              sx={{
                width: 75,
                height: 75,
                borderRadius: "50%",
                position: "absolute",
                top: -15,
               marginRight: "0rem"
              }}
            />
          </Box>
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontFamily: "Georgia, sans-serif",
                fontSize: "1.5rem",
                color: "#343131",
                marginTop: "40px",
              }}
            >
              Damro Pvt Ltd
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#61677A",
                marginTop: 1,
                fontFamily: "cursive",
                fontSize: "1rem",
              }}
            >
              Software Engineer
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#000000", height: "2px", width: "100%" }} />
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                color: "text.primary",
                fontFamily: "monospace",
              }}
            >
              Duration
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Chip
                label="2024 - In Present"
                sx={{
                  backgroundColor: "#EFD510",
                  color: "black",
                  fontWeight: 600,
                  padding: 2,
                  margin: 2,
                  fontSize: "0.80rem",
                }}
              />
            </Stack>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            width: 300,
            height: 350,
            padding: 3,
            borderRadius: 5,
            borderColor: "#343131",
            borderWidth: 2,
            borderStyle: "solid",
            backgroundImage: "linear-gradient(to bottom, #FDFFC2, #FFFFFF)",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              mb: 2,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: 65,
                height: 65,
                objectFit: "cover",
                borderRadius: "50%",
                position: "absolute",
                top: -15,
                marginRight: "0rem"
              }}
            />
          </Box>
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontFamily: "Georgia, sans-serif",
                fontSize: "1.5rem",
                color: "#343131",
                marginTop: "40px",
              }}
            >
              ICT Teacher
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#61677A",
                marginTop: 1,
                fontFamily: "cursive",
                fontSize: "1rem",
              }}
            >
              Online
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "#000000", height: "2px", width: "100%" }} />
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                color: "text.primary",
                fontFamily: "monospace",
              }}
            >
              Duration
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "center" }}
            >
              <Chip
                label="2021 - In Present"
                sx={{
                  backgroundColor: "#FFEB00",
                  color: "black",
                  fontWeight: 600,
                  padding: 2,
                  margin: 2,
                  fontSize: "0.80rem",
                }}
              />
            </Stack>
          </Box>
        </Card>
      </Stack>
    </section>
  );
}

export default Experience;
