import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Section = styled.div`
  padding-top: 6rem;
`;

const Navigation = () => {
  return (
    <Section className="mt-5">
      <Navbar bg="warning" expand={false} variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">React-Routing</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2">
                <Nav.Link as={Link} to={'/'}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={'/form'}>
                  Form Login
                </Nav.Link>
                <Nav.Link as={Link} to={'/about'}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={'/service'}>
                  Service
                </Nav.Link>
                <Nav.Link as={Link} to={'/project'}>
                  Project
                </Nav.Link>
                <Nav.Link as={Link} to={'/contact'}>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Section>
  );
};

export default Navigation;
