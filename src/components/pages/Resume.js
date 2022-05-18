import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DiJavascript } from "react-icons/di";

const divStyle = { width: "80%", margin: "0 auto" };
const tempStyle = { border: "1px solid black", height: "150px" };
const textStyle = { textDecoration: "none", color: "black" };

export default function Resume() {
  // const link = window.location.replace('https://docs.google.com/document/d/1zbM5Wy1UoQNvrG1xQIR8-ivxTUCnOHAai11cyikFcGM/edit?usp=sharing')

  return (
    <div style={divStyle}>
      <h1>Resume</h1>
      <Container>
        <Stack gap={1} className="col-md-5 mx-auto">
          <p style={textStyle}>
            {" "}
            Click to view my{" "}
            <a href="https://docs.google.com/document/d/1zbM5Wy1UoQNvrG1xQIR8-ivxTUCnOHAai11cyikFcGM/edit?usp=sharing">
              resume
            </a>{" "}
            🎉
          </p>
          <row>
          <ul>
            <h5>Front-end experience</h5>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Bootstrap, Tailwind</li>
            {/* <FontAwesomeIcon icon="fa-brands fa-js-square" /> */}
            <li><DiJavascript/>  JavaScript</li>            
          </ul>
          <ul>
            <h5>Backend Experience</h5>
            <li>NodeJS</li>
            <li>APIs</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>NoSQL, MongDB, Mongoose</li>
            <li>GraphQL</li>
            <li>Modularization</li>
            <li>Testing, Jest</li>            
          </ul>
          </row>

        </Stack>
      </Container>
    </div>
  );
}
