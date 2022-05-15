import React from 'react';
import profilePic from '../images/me.jpg'
const imageStyle = {width: '150px' }
const divStyle = {width: '80%', margin: '0 auto' }
export default function About() {
  return (
    <div style={divStyle}>
      <h1>About Page</h1>
      <img src= {profilePic} alt= "pic of me" style={imageStyle}/>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
