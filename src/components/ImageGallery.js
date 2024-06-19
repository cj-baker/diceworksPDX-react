import React from "react";
import "../styles/ImageGallery.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function ImageGallery(){
    

  return (

   <Container fluid>
   <Row xs="1" className="justify-content-center">
     <Col md="auto" ><img className="gallery-image" src="https://lh3.googleusercontent.com/d/19cvySEJ13rljHK1HtV8WkuJh5bxrvgmO" alt="Dice 1"/></Col>
     <Col md="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/19cvySEJ13rljHK1HtV8WkuJh5bxrvgmO" alt="Dice 2"/></Col>
     <Col md="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/19cvySEJ13rljHK1HtV8WkuJh5bxrvgmO" alt="Dice 3"/></Col>
     <Col md="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/19cvySEJ13rljHK1HtV8WkuJh5bxrvgmO" alt="Dice 4"/></Col>
     <Col md="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/19cvySEJ13rljHK1HtV8WkuJh5bxrvgmO" alt="Dice 5"/></Col>
   </Row>
 </Container>
    
  );
}



