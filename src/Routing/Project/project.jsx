import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import task1 from './img/1.jpg';
import task2 from './img/2.jpg';
import task3 from './img/3.jpg';
import task4 from './img/4.jpg';
import task5 from './img/5.jpg';

const Section = styled.section`
  padding-top: 1rem;
  backgroundcolor: #fff3cd;
`;

const Project = () => {
  return (
    <Section id="project">
      <Row className="text-center ">
        <Col>
          <h2>My Project</h2>
        </Col>
      </Row>
      <Container>
        <Row className="justify-content-center fs-5 text-center">
          <Col className="col-md-4 mb-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={task1} />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 mb-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={task2} />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 mb-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={task3} />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 mb-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={task4} />
              <Card.Body>
                <Card.Title>Project 4</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 mb-3">
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={task5} />
              <Card.Body>
                <Card.Title>Project 5</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Project;
