import React from 'react';
import heroImage from '../assets/personal-image.jpg';
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
              <h5 className="hero-subtitle">Full-Stack Web Developer</h5>
              <h1 className="hero-title">Hello, my name is Lamyaa Atef</h1>
              <p className="hero-text">
                A Full-Stack Web Developer specialized in building dynamic and effective applications. I have hands-on experience developing a complete electronic booking system similar to Booking.com using Node.js, React, and MongoDB. A graduate of the ITI web development track, I am proficient in both frontend and backend development, with a focus on high-performance solutions and exceptional user experience.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" className="projects-btn" onClick={scrollToProjects}>Projects</Button>
                <a 
                  href="https://www.linkedin.com/in/lamyaaatef/" 
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
                src={heroImage} 
                alt="Madelyn Torff" 
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