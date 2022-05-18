import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "../projectCard";
import codeBG from "../images/codeBG.jpg";
const divStyle = { width: "80%", margin: "0 auto" };
const tempStyle = { border: "1px solid black" };

export default function Blog() {
  const projectObject = [{
    title: 'titleOne', 
    img: codeBG,
    deployedLink: 'https://www.google.com',
    codeLink: 'http://github.com'

  },{
    title: 'titleTwo', 
    img: codeBG,
    deployedLink: 'https://www.google.com',
    codeLink: 'http://github.com'

  },{
    title: 'titleThree', 
    img: codeBG,
    deployedLink: 'https://www.google.com',
    codeLink: 'http://github.com'

  },{
    title: 'titleFour', 
    img: codeBG,
    deployedLink: 'https://www.google.com',
    codeLink: 'http://github.com'

  },{
    title: 'titleFive', 
    img: codeBG,
    deployedLink: 'https://www.google.com',
    codeLink: 'http://github.com'

  },{
    title: 'titleSix', 
    img: codeBG,
    deployedLink: 'https://www.google.com',
    codeLink: 'http://github.com'

  }]
  return (
    <div style={divStyle}>
      <h1>My Projects</h1>
      <Container style={tempStyle} className="d-flex flex-row flex-wrap justify-content-around">
       {projectObject.map(({title, img, deployedLink, codeLink}) => (
         <ProjectCard title={title} img={img} deployedLink={deployedLink} codeLink={codeLink} key = {title}/>
       ))}
      </Container>
    </div>
  );
}
