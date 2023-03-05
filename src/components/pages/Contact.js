import React from 'react';
import "../../css/ContactPage.css";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Col from'react-bootstrap/Col';
import Row from'react-bootstrap/Row';


function Contact() {
  return (
    <Container
      className="contactMe"
    >
      <Row>
        <Col className="text-center">
          <h1>Contact Me</h1>
          <p>
            "Hello 👋 If you're looking for a passionate front-end developer who
            loves to connect and collaborate, look no further.
          </p>
          <p>
            Let's connect, swap some puns, and make some magic happen through
            code!"
          </p>
          <Button size="lg" id="contactBtn">
            <a id="hellobtn" href="mailto:kietla@live.co.uk">Say Hello</a>
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}


export default Contact;