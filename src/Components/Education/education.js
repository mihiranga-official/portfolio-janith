import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./education.css";

const steps = [
  {
    label: "Bsc(Hons) in Computer Science & Software Engineering",
    description: `University of Bedfordshire (SLIIT 2021)`,
  },
  {
    label: "G.C.E(A/L) Examination, Sri Lanka",
    description: (
      <>
        Nalanda boys college, Minuwangoda -Technology Stream (2017)
        <br />
        Science For Technology <br/> Information & Communication Technology <br/>Engineering
        Technology
      </>
    ),
  },
  {
    label: "G.C.E(O/L) Examination, Sri Lanka",
    description: <>Nalanda boys college, Minuwangoda (2014)</>,
  },
];

export default function Education() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box id="education">
      <span className="eduTittle">Education</span>
      <span className="eduDes">
        I completed my O/Ls and A/Ls with a strong focus on mathematics and
        science, building a solid foundation for my academic journey. Later, I
        earned a Bachelor of Science in Computer Science, where I developed key
        skills in software development, algorithms, and problem-solving.
      </span>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconProps={{
                sx: {
                  "&.Mui-active": {
                    color: "#EB8317", // Active step icon color
                  },
                  "&.Mui-completed": {
                    color: "#F3C623", // Completed step icon color
                  },
                  color:
                    activeStep === index || activeStep > index
                      ? "#EB8317"
                      : "#F3C623", // Default color if neither active nor completed
                },
              }}
              sx={{
                typography: "body1",
                fontFamily: "Arial, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              <span style={{ fontFamily: "cursive", fontSize: "1.25rem" }}>
                {step.label}
              </span>
            </StepLabel>
            <StepContent>
              <Typography sx={{ fontFamily: "cursive", fontSize: "1.10rem" }}>
                {step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    mt: 1,
                    mr: 1,
                    backgroundColor: "#FFE700",
                    fontSize: "0.75rem",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "400",
                    padding: "8px",
                    borderRadius: "15px",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#FFD700", // Hover color
                    },
                  }}
                >
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{
                    mt: 1,
                    mr: 1,
                    backgroundColor: "#FEFFA7",
                    fontSize: "0.75rem",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "400",
                    padding: "8px",
                    borderRadius: "15px",
                    color: "#000000",
                    "&:hover": {
                      backgroundColor: "#FDFD96",
                    },
                  }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography sx={{ fontFamily: "revert-layer", fontSize: "1rem" }}>
            Education Journey
          </Typography>
          <Button
            onClick={handleReset}
            sx={{
              mt: 1,
              mr: 1,
              backgroundColor: "#FFE700",
              fontSize: "0.75rem",
              color: "#000000",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              padding: "8px",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "#FFD700",
              },
            }}
          >
            View
          </Button>
        </Paper>
      )}
    </Box>
  );
}
