import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Raz from './components/Raz/Raz';
import Projects from './components/Projects/Projects';
import Hobby from './components/Hobby/Hobby';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <div className='APP'>
      <Header/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/Home" element= {<Home />} />
        <Route exact path="/" element= {<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/Raz" element={<Raz />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Hobby" element={<Hobby />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={
            <div>
              <h2>Error 404: Not Found</h2>
            </div>
            } />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

