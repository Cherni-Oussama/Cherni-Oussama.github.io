import React from "react";
import "./About.scss";

import { Container, Row, Col } from "react-bootstrap";

import Github from "../../components/Github";
import Techstack from "../../components/Techstack";
import Toolstack from "../../components/Toolstack";
import laptopImg from "../../assets/images/airbnbLogo.png";
import Particle from "../../components/Particle"
import Aboutcard from "../../components/AboutCard"

function About() {
  return (

    <Container fluid= "md" className="about-section">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>

        <Toolstack />

        <Github />

    </Container>
  );
}

export default About;
