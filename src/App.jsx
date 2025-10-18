import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <div className="App">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <Routes>
            <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
            <Route path="/about" element={<About setActiveSection={setActiveSection} />} />
            <Route path="/skills" element={<Skills setActiveSection={setActiveSection} />} />
            <Route path="/projects" element={<Projects setActiveSection={setActiveSection} />} />
            <Route path="/contact" element={<Contact setActiveSection={setActiveSection} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
