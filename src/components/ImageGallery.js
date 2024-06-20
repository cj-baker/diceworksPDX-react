import React from "react";
import "../styles/ImageGallery.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function ImageGallery(){
    

  return (

   <Container fluid>
   <Row xs="1" className="justify-content-center">
     <Col sm="auto" ><img className="gallery-image" src="https://lh3.googleusercontent.com/d/19cvySEJ13rljHK1HtV8WkuJh5bxrvgmO" alt="Dice 1"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1H-gZtMNP8S267loYBGHa5YDlEVxAM7MR" alt="Dice 2"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1fc6rS-U0qfjHFubkGcFN3YJPBRUDlpxX" alt="Dice 3"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1UwY8Qg-eMYbCa7wRGTq3RRmzsDOvefX8" alt="Dice 4"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1Cpov6uwPxd0dK41E2nvVg7RZ4OBvso0v" alt="Dice 5"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1D4pwDQYTijCjktxMMn-xACR4gcy2CGB-" alt="Dice 5"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1I40dMdPTLKNsHqV-zMEwVA47zw-nadnR" alt="Dice 5"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1yV92RFvqt_D64i4KDvL2Rnp-2Q9hophl" alt="Dice 5"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1MmCu2Drii1m44wzHzdNLwV2g0JAMdkV3" alt="Dice 5"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1XBsUog5ltUwyUZYtCgsYBfBGYIMcZp-f" alt="Dice 5"/></Col>
     <Col sm="auto"><img className="gallery-image" src="https://lh3.googleusercontent.com/d/1d0W48kITcQ5ajif8NVVtKpCaEzG8T32X" alt="Dice 5"/></Col>
   </Row>
 </Container>
    
  );
}



