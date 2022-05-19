import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "../projectCard";
import codeBG from "../images/codeBG.jpg";
import mealPlan from "../images/mealPlanner.png"
import sched from "../images/noteApp.png"
import submit from "../images/submitRocket.png"
const divStyle = { width: "80%", margin: "0 auto",    
};
const tempStyle = { border: "1px solid black", backgroundImage: 'linear-gradient(white, black)', paddingBottom: "10px"};

export default function Blog() {
  const projectObject = [{
    title: 'Daily Meal Planner', 
    img: mealPlan,
    deployedLink: 'https://www.google.com',
    codeLink: ''

  },{
    title: 'Social Media API', 
    img: codeBG,
    deployedLink: 'https://watch.screencastify.com/v/16c3DsNf7iGHcedQ85W9',
    codeLink: 'https://github.com/Mikefedele/socialNetworkAPI'

  },{
    title: 'Submit Rocket', 
    img: submit,
    deployedLink: 'https://submit-rocket.herokuapp.com/',
    codeLink: 'https://github.com/Mikefedele/SubmitRocket'

  },{
    title: 'Note Taker App', 
    img: sched,
    deployedLink: 'https://damp-fjord-83925.herokuapp.com/',
    codeLink: 'https://github.com/Mikefedele/Note-Taker-App'

  },{
    title: 'E-commerce Backend', 
    img: codeBG,
    deployedLink: 'https://watch.screencastify.com/v/Iuokh0NtPGSTLv0jH4fI',
    codeLink: 'https://github.com/Mikefedele/Ecomm-Backend'

  },{
    title: 'JATE-PWA', 
    img: codeBG,
    deployedLink: 'https://www.google.com',
    codeLink: 'https://github.com/Mikefedele/text-editor-pwa'

  }]
  return (
    <div style={divStyle}>
      <h1>My Projects</h1>
      <Container style={tempStyle} className="d-flex flex-row flex-wrap justify-content-around">
       {projectObject.map(({title, img, deployedLink, codeLink}) => (
         <ProjectCard title={title} img={img} deployedLink={deployedLink} codeLink={codeLink} key = {title}/>
       ))}
      </Container>
      <Container>
        {/* <p>Click on the images to see the deployed site. If the</p>
        <p style={{lineHeight: 1.5}}><em>To see a full list of my repositories, visit my Github Page by clicking the link below.</em></p> */}
      
      </Container>
    </div>
  
  );
}
