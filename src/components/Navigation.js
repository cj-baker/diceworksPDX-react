import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaDiceD20 } from "react-icons/fa";
import "../styles/Navigation.css";


export default function Navigation() {
    return (
        <Navbar expand="lg" bg="dark" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#/"><FaDiceD20 color="#f1e383" size="1.8rem"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav className="justify-content-end"  variant="underline"activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/about" eventKey="link-1">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Link href="#/work" eventKey="link-2" >
            Our Work
          </Nav.Link>
        <Nav.Item>
          <Nav.Link href="https://diceworkspdx.myshopify.com/" rel="noopener noreferrer" eventKey="link-3">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/contact" eventKey="link-4" >
            Contact Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>)
}