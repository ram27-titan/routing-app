import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Section = styled.section`
  padding-top: 1rem;
  backgroundcolor: #fff3cd;
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Row className=" mt-5">
        <Col>
          <h2>Contact Me</h2>
        </Col>
      </Row>
      <Container fluid="md">
        <Row className="justify-content-center ">
          <Col className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3 text-area" controlId="formBasicEmail">
                <Form.Label>Pesan</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>

              <Button variant="warning" type="submit">
                Kirim
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
