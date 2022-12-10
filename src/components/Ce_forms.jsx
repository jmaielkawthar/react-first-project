import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import MyImage from './img/formImg.jpg';
// import MyLogo from './img/téléchargement.png';


export const Ce_forms = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col sm={8}>
        <Form>
          <Form.Group className="inlineformGroup mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="inlineformGroup mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        <Col sm={4}>
            {/* <img src={MyLogo} alt="FORMS" /> */}
        </Col>
      </Row>
       
      </Container>
    </div>
  );
};
