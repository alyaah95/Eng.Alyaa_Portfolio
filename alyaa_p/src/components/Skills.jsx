import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const SkillsSection = () => {
  const skills = [
  { name: 'JavaScript (ES6+)', percentage: 90 },
  { name: 'React.js', percentage: 88 },
  { name: 'Node.js & Express', percentage: 85 },
  { name: 'Python & Django', percentage: 85 },
  { name: 'HTML5 & CSS3', percentage: 95 },
  { name: 'PostgreSQL & Databases', percentage: 82 },
  { name: 'MongoDB', percentage: 80 },
  { name: 'Docker & DevOps Tools', percentage: 75 },
  { name: 'Git & GitHub', percentage: 90 },
  { name: 'REST APIs & UI/UX', percentage: 88 }
];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="skills-header text-center">
              <h2 className="skills-title">My Skills</h2>
              <p className="skills-subtitle">Here are some of my expertise areas</p>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col lg={6} md={6} key={index} className="mb-4">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={12}>
            <div className="additional-skills">
              <h4 className="additional-title">Additional Skills</h4>
              <div className="skills-tags">
              <span className="skill-tag">System Architecture</span>
              <span className="skill-tag accent">Analytical Thinking</span>
              <span className="skill-tag">Cross-functional Collaboration</span>
              <span className="skill-tag">Debugging & Troubleshooting</span>
              <span className="skill-tag">Problem Solving</span>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;