import Navigation from "../components/Navigation"
import "../styles/About.css"
import Footer from "../components/Footer"
import { Col, Row } from "react-bootstrap"


export default function About() {

    return(
        <div className="about-body">
        <Navigation/>
        <header className="about-header">
        <h2>About Us</h2>
        </header>
        <main className="about-main">
            <Row xs="1" className="justify-content-center align-items-center">
            <Col xs="auto"><img fluid="true" className="about-image" src="https://lh3.googleusercontent.com/d/1qtKtRQJMppXpk6-bBbtIUhOqN2F1EHCm" alt="DiceworksPDX team members" /></Col>
            <Col xs="auto">
            <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </Col>
            </Row>
        </main>
        <Footer/>
        </div>
    )
}

