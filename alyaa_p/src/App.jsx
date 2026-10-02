import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/Skills';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Themes.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;