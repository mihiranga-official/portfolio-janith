import React from "react";
import "./experience.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


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

      <div className="container">
        {/* First Card */}
        <Card className="card2 cardAdd" sx={{ borderRadius: 10 }}>
          <CardContent>
            <Typography gutterBottom component="div">
              <div className="expRow">
                <span className="expText">Company: </span>
                <span className="expValue">Virtusa Pvt Ltd</span>
              </div>
              <div className="expRow">
                <span className="expText1">Designation: </span>
                <span className="expValue">Frontend Software Engineer</span>
              </div>
              <div className="expRow">
                <span className="expText2">Duration:</span>
                <span className="expValue">3 Years (2021 - 2024)</span>
              </div>
            </Typography>
          </CardContent>
        </Card>

        {/* Second Card */}
        <Card className="card2 cardAdd" sx={{ borderRadius: 10 }}>
          <CardContent>
            <Typography gutterBottom component="div">
              <div className="expRow">
                <span className="expText">Company: </span>
                <span className="expValue1">Damro Export</span>
              </div>
              <div className="expRow">
                <span className="expText1">Designation: </span>
                <span className="expValue1">Software Engineer</span>
              </div>
              <div className="expRow">
                <span className="expText2">Duration:</span>
                <span className="expValue1">2024 - Inpresent</span>
              </div>
            </Typography>
          </CardContent>
        </Card>

        {/* Third Card */}
        <Card className="card2 cardAdd" sx={{ borderRadius: 10 }}>
          <CardContent>
            <Typography gutterBottom component="div">
              <div className="expRow">
                <span className="expText1">Designation: </span>
                <span className="expValue2">ICT Teacher (Online)</span>
              </div>
              <div className="expRow">
                <span className="expText2">Duration:</span>
                <span className="expValue3">2021 - In Present</span>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/*----------------------------------------------------------------------------------------------------------------*/}
     
    </section>
  );
};

export default Experience;
