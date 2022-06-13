import React from "react";
import { Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavTabs from "./NavTabs";
import "../../src/App.css";
const headerStyle = {
  position: "relative",
  // height: '110px',
  width: "100%",
  border: "1px solid black",
  backgroundImage: "linear-gradient(white, black)",
  marginBottom: "10px",
  borderRadius: "10px",
  // display: "inline"
};
const titleStyle = {
  textAlign: "right",
  marginRight: "15%",
  marginTop: "10px",
};

export default function Header({ currentPage, handlePageChange }) {
  return (
    <Container className="h-25">
      <header className="header" style={headerStyle}>
        {/* <Row> */}
        <Col>
          <h2 className="align-middle" style={titleStyle}>
            Full Stack Fedele
          </h2>
        </Col>
        <Col>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Col>
        {/* </Row> */}
      </header>
    </Container>
  );
}
