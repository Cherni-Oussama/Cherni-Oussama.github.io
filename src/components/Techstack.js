import React, {useContext}  from "react";
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
import StyleContext from "../contexts/StyleContext";



function Techstack() {
  const {isDark} = useContext(StyleContext);

  return (
    <div>
    <Row className="rowrow">
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <DiPython />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}> 
        <CgCPlusPlus />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <DiJava />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiCsharp />
      </Col>
    </Row>

    <Row className="rowrow">
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiTensorflow />
      </Col>

      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiPytorch />
      </Col>

      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiKeras />
      </Col>

    </Row>

    <Row className="rowrow">
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiOpencv />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <DiGit />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiDocker />
      </Col>
      <Col xs={2} md={2} className={isDark ? "dark-mode tech-icons" : "tech-icons"}>
        <SiJenkins />
      </Col>
    </Row>
    </div>

  );
}

export default Techstack;
