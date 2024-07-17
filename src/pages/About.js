import Navigation from "../components/Navigation"
import "../styles/About.css"
import Footer from "../components/Footer"
import { Col, Row } from "react-bootstrap"
import Wrynn from "../images/Wrynn - Aaron.png"
import Khevakri from "../images/Khevakri - Keilani.png"
import Neppo from "../images/Neppo - Tyson.png"
import Aergo from "../images/Aergo - Casey.png"



export default function About() {

    return(
        <div className="about-body">
        <Navigation/>
        <header className="about-header">
        <h2>About Us</h2>
        </header>
        <main className="about-main">
            <Row xs="1" className="justify-content-center align-items-center">
            <p className="about-paragraph">What started as a COVID lockdown distraction quickly turned into an obsession.  6 D&D campaign friends in the Portland Metro area are now dedicated to creating 1-of-a-kind, handmade, custom dice.  Our dice are made to be the envy of the table and are just as unique as your tabletop character.  Each set tells its own story and is ready to compliment any setting.  Made in a basement, to be played with in a basement.</p>
            </Row>
            <Row xs="1" className="justify-content-center align-items-center">
           <h3>Meet the Team!</h3>
            <Col xs="auto">
            <p>Neppo the Tortle Barbarian aka Tyson Larimer<br/><span className="titles">Dicemaker and Founder</span></p>
            <img className="team-image" src={Neppo} alt="Wrynn character portrait"/>
            </Col>
            <Col xs="auto">
            <p>Wrynn the Snow Elf Fighter/Sorcerer aka Aaron Tallman <br/> <span className="titles">Dicemaker and Founder</span></p>
            <img className="team-image" src={Wrynn} alt="Wrynn character portrait"/>
            </Col>
            <Col xs="auto">
            <p>Khevakri the Kalashtar Fighter aka Keilani Lemafa <br/><span className="titles">Dicemaker and Admin</span></p>
            <img className="team-image" src={Khevakri} alt="Wrynn character portrait"/>
            </Col>
            <Col xs="auto">
            <p>Aergo the Teifling Rogue aka Casey Baker<br/><span className="titles">Dicemaking Assistant and Web Developer</span></p>
            <img className="team-image" src={Aergo} alt="Wrynn character portrait"/>
            </Col>
            
            </Row>
        </main>
        <Footer/>
        </div>
    )
}

