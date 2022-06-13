import React from "react";
import Container from "react-bootstrap/Container";
import codeBG from "../images/codeBG.jpg";
import meal2 from "../images/meal2.png";
import sched from "../images/noteApp.png";
import submit from "../images/submitRocket.png";
import jate from "../images/jate.png";
import paws from "../images/paws.png"
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Carousel } from "react-bootstrap";

const divStyle = { width: "80%", margin: "0 auto" };
const carStyle = { padding: "20px"} ;

export default function Home() {
  return (
    <div style={divStyle} className="home">
      {/* <h1>Home Page</h1> */}
      <Container>
        <Col md={{ span: 6, offset: 3 }} className="home">
          <h2>Mike Fedele</h2>
          <h3>Full Stack Web Developer</h3>
          <Carousel fade style={carStyle}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {codeBG}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3></h3>
                <p>
                 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {paws}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {meal2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>
                  
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Container>
    </div>
  );
}
