import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const SkillsSection = () => {
  const skills = [
    { name: 'Node.js', percentage: 90 },
    { name: 'Python', percentage: 75 },
    { name: 'PHP', percentage: 90 },
    { name: 'HTML & CSS', percentage: 100 },
    { name: 'JavaScript', percentage: 95 },
    { name: 'React', percentage: 80 },
    { name: 'MySQL', percentage: 80 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'WordPress', percentage: 90 },
    { name: 'Git & GitHub', percentage: 70 }
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
                  <span className="skill-percentage">{skill.percentage}%</span>
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
                <span className="skill-tag">Continuous Learning</span>
                <span className="skill-tag">Collaboration and Effective Communication</span>
                <span className="skill-tag accent">Understanding UX/UI</span>
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Attention to Detail</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;