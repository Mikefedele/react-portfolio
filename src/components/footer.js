import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBrands  } from '@fortawesome/free-solid-svg-icons'
// import {faBrands } from '@fortawesome/free-regular-svg-icons'
// import { DiJavascript } from "react-icons/bs";
// import { IoLogoJavascript } from 'react-icons/fa';
import { DiJavascript } from "react-icons/di";
import {BsGithub} from "react-icons/bs"

import { IconContext } from "react-icons";

{/* <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider> */}


const footerStyle = {height: '7%', width: '100%', position: 'absolute', bottom: 0, border: '1px solid black', backgroundColor: "grey"}
export default function Footer () {
  return (
    <div>
    <footer style={footerStyle} className = "footer">
      <IconContext.Provider value={{ size: "2em"}}>

    <BsGithub />
  
</IconContext.Provider>
       
        
        {/* <i> <IoLogoJavascript /></i>  */}
    </footer>
    </div>
  )
}