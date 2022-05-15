import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projOne from "../images/mealPlanner.png";
import codeBG from "../images/codeBG.jpg";
const divStyle = { width: "80%", margin: "0 auto" };
const tempStyle = { border: "1px solid black" };

export default function Blog() {
  return (
    <div style={divStyle}>
      <h1>My Projects</h1>
      <Container style={tempStyle}>
        <Row style={tempStyle}>
          <img src={projOne} alt="Meal Planner App" />
          <h2>Meal Planner App</h2>
          <h3>View Code</h3>
        </Row>
        <Row style={tempStyle}>
          <Col md ={6}>
            <img src={codeBG} alt="background" />
            <h2>Meal Planner App</h2>
            <h3>View Code</h3>
          </Col>
          <Col md = {6}>
            <img src={codeBG} alt="background" />
            <h2>Meal Planner App</h2>
            <h3>View Code</h3>
          </Col>
        </Row>
        <Row style={tempStyle}>
          <Col md={6}>
            <img src={codeBG} alt="background" />
            <h2>Meal Planner App</h2>
            <h3>View Code</h3>
          </Col>
          <Col md={6}>
            <img src={codeBG} alt="background" />
            <h2>Meal Planner App</h2>
            <h3>View Code</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
