import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaDiceD20 } from "react-icons/fa";
import "./Navigation.css";

export default function Navigation() {
    return (
        <Navbar expand="lg" bg="dark" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/"><FaDiceD20 color="#b7a97e" size="2em"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav className="justify-content-end"  variant="underline"activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Link eventKey="link-2" >
            Our Work
          </Nav.Link>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" >
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>)
}