import logo from '../images/logo.svg';
import '../styles/Home.css';
import Navigation from "../components/Navigation"
import Hexagons from '../components/Hexagons';
import Carousel from "../components/Carousel"

function Home() {
  return (
    
    <div className="App">
     
      <Navigation />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DiceworksPDX</h1>
        <Hexagons />
        <h2>Custom dice to fit your playstyle.</h2>
        <button onClick={() => document.getElementById('homepage')?.scrollIntoView()}
            type="button"
            className="btn btn-outline-light"
            id="header-button"
          >
            Let's Roll
          </button>
      </header>
      <main className='App-main Container' id="homepage">
      <h2 >Recent Works</h2>
      <Carousel />
      </main>
      
    </div>
  );
}

export default Home;