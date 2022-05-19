import React from "react";
import { Container } from "react-bootstrap";
import NavTabs from "./NavTabs";
import '../../src/App.css'
const headerStyle = {  
    position: 'relative',
    height: '100px',
    width: '100%',
    border: '1px solid black',
    backgroundImage: 'linear-gradient(white, black)',
    marginBottom: '10px'
}
const titleStyle = {  textAlign: "right", marginRight: "15%", marginTop: "10px"  }

export default function Header({currentPage, handlePageChange}) {
  return (
 
    <header className="header" style={headerStyle}>
      <h2 className="title" style={titleStyle}>Full Stack Fedele</h2>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
    
    
  )
}