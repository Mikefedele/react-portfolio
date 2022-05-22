import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
const formStyle = { display: "block" };
const divStyle = {  margin: "0 auto", backgroundImage: 'linear-gradient(white, black)', minHeight: '100vh', width: "80%", color: "black"};
let nameValue = ""

export default function Contact() {
  const form = useRef();

  const blur = () => {
    if (nameValue.value) {
      return
    } else {
      <p>Input field can't be left blank</p>
    }
    
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lum2u47",
        "template_yy3ka08",
        form.current,
        "A4V8YvM2Wwve7v5VI"
      )
      .then(
        (result) => {
          alert('Email Sent')
          nameValue.value = "";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div style={divStyle}>
      <h1>Contact Page</h1>

      <form ref={form} onSubmit={sendEmail} style={formStyle} onBlur={blur}>
        <Stack gap={1} className="col-md-5 mx-auto">
          <label>Name</label>
          <input type="text" name="user_name" onBlur={blur}/>
          <label>Email</label>
          <input type="email" name="user_email" onBlur={blur} />
          <label>Message</label>
          <textarea name="message" onBlur={blur}/>
          <input type="submit" value="Send" />
        </Stack>        
      </form>

    
    <div>{blur}</div>


      {/* <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="user_email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label name="message">Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <input type="submit" value="send"
        <Button type="button" onSubmit={sendEmail}>Submit</Button>
      </Form> */}
    </div>
  );
}
