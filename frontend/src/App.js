import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Raz from './components/Raz/Raz';
import Projects from './components/Projects/Projects';
import Interest from './components/Interest/Interest';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className='APP'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {<Navigate to="/Home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Raz" element={<Raz />} />
        <Route path="/Interest" element={<Interest />} />
        <Route path="*" element={
            <div>
              <h2>Error 404: Not Found</h2>
            </div>
            } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

