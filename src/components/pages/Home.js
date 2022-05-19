import React from "react";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const divStyle = { width: "80%", margin: "0 auto" };

export default function Home() {
  return (
    <div style={divStyle}>
      {/* <h1>Home Page</h1> */}
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Mike Fedele</h2>
          <h3>Full Stack Web Developer</h3>
        </Col>
      </Container>
    </div>
  );
}
