import React from "react";
import profilePic from "../images/me.jpg";

const imageStyle = { width: "150px", float: "left", padding: '0 "20px" "20px" 0', borderRadius: '20px' };
const divStyle = { width: "80%", margin: "0 auto" };
const left = { float: "left", padding: '0 "20px" "20px" 0'}
export default function About() {
  return (
    <div style={divStyle} className="home">
      <h1>About Page</h1>
      <img src={profilePic} alt="pic of me" style={imageStyle} />
      <p>
        Hi! Thank you for visiting my site. My name is Mike Fedele & I'm a full
        stack web developer. After 10+ years of running my own business I decided I wanted to do something I really enjoy. I started programming somewhat recently and I never realized how much I would enjoy it before then. Most of my career was in sales or supervisory positions and although I excelled in those positions I never felt "satisfied". During the covid shutdowns, like everyone else, I had some free time so I started to learn more and the more I learned the more I liked what I was doing. Once I decided to take my web development to the next level I enrolled in University of Pennsylania's Full Stack web development certification.   My front-end skills include{" "}
        <em>HTML, CSS, Javascript & REACT</em> using multiple frameworks. On the
        back-end I have experience with <em>NodeJS, Express, Mysql & nosql.</em>{" "}
        This includes best practices for data management, file structures,
        security & testing.
      </p>
      <p>
        Pre-Covid I ran a photo/video booth company for nearly 10 years. I had originally planned on it being part time but I ended up building the company to have 4 booths available. I was in charge of every aspect of the business from the sales & marketing, designing backgrounds & headers to my client's requests, bookings & scheduling workers to run the booths, payroll & 
        managed multiple part time employees and handled every aspect of running
        the business.
      </p>
    </div>
  );
}
