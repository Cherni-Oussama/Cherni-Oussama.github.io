import React from "react";
import "./tech.scss";
import { Container, Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiCsharp,
  SiTensorflow,
  SiKeras,
  SiOpencv,
  SiDocker,
  SiJenkins,
} from "react-icons/si";


function Techstack() {
  return (
    <div>
    <Row className="rowrow">
      <Col xs={2} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={2} md={2} className="tech-icons"> 
        <CgCPlusPlus />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
    </Row>

    <Row className="rowrow">
      <Col xs={2} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>

      <Col xs={2} md={2} className="tech-icons">
        <SiPytorch />
      </Col>

      <Col xs={2} md={2} className="tech-icons">
        <SiKeras />
      </Col>

    </Row>

    <Row className="rowrow">
      <Col xs={2} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
    </Row>
    </div>

  );
}

export default Techstack;
