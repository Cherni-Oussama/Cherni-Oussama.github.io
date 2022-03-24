import React from "react";
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


function Toolstack() {
  return (
    <Row className="rowrow">
      <Col xs={2} md={2} className="tech-icons">
        <SiPycharm/>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>      

      <Col xs={2} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
    </Row>
  );
}

export default Toolstack;
