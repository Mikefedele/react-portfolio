import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
const formStyle = { display: "block" };
const divStyle = { width: "80%", margin: "0 auto" };
let nameValue = ""

export default function Contact() {
  const form = useRef();

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
      <form ref={form} onSubmit={sendEmail} style={formStyle}>
        <Stack gap={1} className="col-md-5 mx-auto">
          <label>Name</label>
          <input type="text" name="user_name"/>
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </Stack>
      </form>
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
