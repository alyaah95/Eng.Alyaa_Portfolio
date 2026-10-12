import React from 'react';
import heroImage from '../assets/personal-image.jpg';
import alyaa from '../assets/alyaa2.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="about" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero-content">
              <h5 className="hero-subtitle">Full-Stack Software Engineer</h5>
              <h1 className="hero-title">Hello, my name is Alyaa Hassan.</h1>
              <p className="hero-text">
                A Full-Stack Software Engineer specialized in building dynamic, scalable, and data-driven applications. I have hands-on experience developing end-to-end web solutions—including a complete hotel booking platform using Node.js, React, and MongoDB—as well as robust enterprise systems with Django and modern Data Engineering pipelines. A graduate of the Information Technology Institute (ITI), I am proficient in both frontend and backend development, focusing on clean architecture, high-performance solutions, and exceptional user experience.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" className="projects-btn" onClick={scrollToProjects}>Projects</Button>
                <a 
                  href="https://www.linkedin.com/in/alyaa-hassan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" className="linkedin-btn">
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div className="hero-image">
              <img 
                src={alyaa} 
                alt="Alyaa Hassan" 
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
      
     
      <div className="hero-decoration decoration-1"></div>
      <div className="hero-decoration decoration-2"></div>
    </div>
  );
};

export default HeroSection;