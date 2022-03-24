import React, {useContext}  from "react";
import "./tech.scss";

import { Col, Row } from "react-bootstrap";
import {
  SiPycharm,
  SiJupyter,
  SiGithub,
  SiAndroidstudio,
  SiVisualstudiocode,
  SiSublimetext,
  SiAdobephotoshop,
  SiAdobeaftereffects,
} from "react-icons/si";
import StyleContext from "../contexts/StyleContext";


function Toolstack() {
    const {isDark} = useContext(StyleContext);

  return (
    <Row className="rowrow">
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiPycharm/>
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiJupyter />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiSublimetext />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiVisualstudiocode />
      </Col>      

      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiGithub />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiAndroidstudio />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiAdobephotoshop />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiAdobeaftereffects />
      </Col>
    </Row>
  );
}

export default Toolstack;
