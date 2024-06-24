import logo from '../images/logo.svg';
import '../styles/Home.css';
import Navigation from "../components/Navigation"
import Hexagons from '../components/Hexagons';
import Carousel from "../components/Carousel"
import Footer from '../components/Footer';

function Home() {
  return (
    
    <div className="App">
     
      <Navigation />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DiceworksPDX</h1>
        <Hexagons />
        <h3>Whimsical, one-of-a-kind sharp edge resin dice that are handcrafted right here in the Pacific Northwest</h3>
        <button onClick={() => document.getElementById('homepage')?.scrollIntoView()}
            type="button"
            className="btn btn-outline-light"
            id="header-button"
          >
            Let's Roll
          </button>
      </header>
    
      <main className='App-main Container' id="homepage">
        <h2>Custom Pours</h2>
        <img className='custom-dice' src='https://lh3.googleusercontent.com/d/11fjGeliGm9T2hgbV6RY2QfDcIYh8Mpbi' alt='custom wedding dice'/>
        <p className='custom-paragraph'>Want a set of dice that evokes your favorite D&D character? Wish that one of our sets was in a different color? Certain styles of our dice are available for custom designs! Find a style that you like, pick your favorite color(s) and fill out the Custom Dice Order Form. 
<br/><br/>
Dice don’t need to stay in the dungeon - we also do customized dice for larger events such as parties, weddings and birthdays like these specially-made D20 wedding favors. If you’d like to bring a little adventure to your next event, please 
 <a href='#/contact' className='contact-link' title='Contact Page'> email us </a> to get the dice rolling!
 </p>
      <h2 >Recent Works</h2>
      <Carousel />
      </main>
      <Footer/>
    </div>
  );
}

export default Home;