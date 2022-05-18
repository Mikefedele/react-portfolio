import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const footerStyle = {height: '30px', width: '100%', position: 'absolute', bottom: 0, border: '1px solid black'}
export default function Footer () {
  return (
    <footer style={footerStyle} className = "footer">
        <FontAwesomeIcon icon={faCoffee} />

    </footer>
  )
}