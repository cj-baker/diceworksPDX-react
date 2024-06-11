import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation"
import Hexagons from './Hexagons';
import Carousel from "./Carousel"

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DiceworksPDX</h1>
        <Hexagons />
        <h2 class="my-3">Custom dice to fit your playstyle.</h2>
        <a href="#homepage" id="header-button-link" title="Homepage"
          ><button
            type="button"
            class="btn btn-outline-light"
            id="header-button"
          >
            Let's Roll
          </button></a>
      </header>
      <main className='App-main Container'>
      <h2 id="homepage">Recent Works</h2>
      <Carousel />
      </main>
    </div>
  );
}

export default App;
