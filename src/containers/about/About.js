import React, {useContext}  from "react";
import "./About.scss";

import { Container, Row, Col } from "react-bootstrap";

import Github from "../../components/Github";
import Techstack from "../../components/Techstack";
import Toolstack from "../../components/Toolstack";
import laptopImg from "../../assets/images/airbnbLogo.png";
import Particle from "../../components/Particle"
import Aboutcard from "../../components/AboutCard"
import StyleContext from "../../contexts/StyleContext";

function About() {
  const {isDark} = useContext(StyleContext);

  return (
    <div id="Tools">

    <Container fluid= "md" className="about-section">
        <h1 className={isDark ? "dark-mode project-heading" : "project-heading"}>
          Professional <strong className="purple"> Skillset </strong>
        </h1>

        <Techstack />

        <h1 className={isDark ? "dark-mode project-heading" : "project-heading"}>
          <strong className="purple">Tools</strong> I use
        </h1>

        <Toolstack />

        <Github />

    </Container>
    </div>
  );
}

export default About;
