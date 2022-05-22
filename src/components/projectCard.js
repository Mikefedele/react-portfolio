import React from "react";
import Card from 'react-bootstrap/Card';
import {BsGithub} from "react-icons/bs"

const cardStyle = {boxShadow: '5px 10px 8px #888888',
  border: '2px solid black',
  margin: '10px',
  width: '18rem',
  color: 'black'
}

export default function ProjectCard(props)  {
  return (
    <Card style={cardStyle}>
     <a href={props.deployedLink}> <Card.Img variant="top" src= {props.img} className="card" /></a>
      <Card.Title> {props.title}</Card.Title>
      <Card.Text>
        <a href= {props.codeLink}><BsGithub /> View Code</a>
      </Card.Text>
    </Card>
  )
}