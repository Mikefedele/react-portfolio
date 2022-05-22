import React from "react";
import { BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

const textDec = {
  textDecoration: "none",
  // color: "black",
  alignItems: "center",
};

const footerStyle = {
  height: "8%",
  width: "100%",
  position: "absolute",
  bottom: 0,
  border: "1px solid black",
  backgroundColor: "grey",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
};
export default function Footer() {
  return (
    <div>
      <footer style={footerStyle} className="footer">
        <a href="https://github.com/Mikefedele">
          <IconContext.Provider value={{ size: "2em" }}>
            <i style={textDec}>
              {" "}
              <BsGithub /> Github{" "}
            </i>
          </IconContext.Provider>
        </a>

        <a href="https://www.linkedin.com/in/mike-fedele">
          <IconContext.Provider value={{ size: "2em" }}>
            <i style={textDec}>
              {" "}
              <FaLinkedin /> LinkedIn{" "}
            </i>
          </IconContext.Provider>
        </a>
      </footer>
    </div>
  );
}
