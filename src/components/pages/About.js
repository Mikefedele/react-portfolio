import React from "react";
import profilePic from "../images/me.jpg";

const imageStyle = { width: "150px", float: "left", padding: '0 "20px" "20px" 0' };
const divStyle = { width: "80%", margin: "0 auto" };
const left = { float: "left", padding: '0 "20px" "20px" 0'}
export default function About() {
  return (
    <div style={divStyle}>
      <h1>About Page</h1>
      <img src={profilePic} alt="pic of me" style={imageStyle} />
      <p>
        Hi! Thank you for visiting my site. My name is Mike Fedele & I'm a full
        stack web developer. It was during the shutdowns for covid that I
        realized how much I enjoyed coding. My front-end skills include{" "}
        <em>HTML, CSS, Javascript & REACT</em> using multiple frameworks. On the
        back-end I have experience with <em>NodeJS, Express, Mysql & nosql.</em>{" "}
        This includes best practices for data management, file structures,
        security & testing.
      </p>
      <p>
        Pre-Covid I ran a photo/video booth company for nearly 10 years. I
        managed multiple part time employees and handled every aspect of running
        the business.
      </p>
    </div>
  );
}
