
import "./styles/Home.css"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Work from './pages/Work.js';
import About from './pages/About.js';
import PageNotFound from "./pages/PageNotFound.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />  
        <Route element={<PageNotFound/>}/> 
      </Routes>
    </Router>
  )
}

export default App;
