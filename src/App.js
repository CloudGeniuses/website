import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Services from './components/Services';
import TrainingPrograms from './components/TrainingPrograms';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/training" element={<TrainingPrograms />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;