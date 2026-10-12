import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactSection = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

  
    emailjs.sendForm(
    import.meta.env.VITE_SERVICE_ID,
     import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      setAlertVariant('success');
      setAlertMessage('Message sent successfully! I will get back to you soon.');
      setShowAlert(true);
      form.current.reset();
      
      
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    })
    .catch((error) => {
      console.log(error.text);
      setAlertVariant('danger');
      setAlertMessage('Failed to send message. Please try again later.');
      setShowAlert(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <footer id="contacts" className="contact-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="contact-header text-center">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">Ready to build something great together? Let's get in touch.</p>
            </div>
          </Col>
        </Row>

        {showAlert && (
          <Row className="justify-content-center mb-4">
            <Col lg={8} md={10}>
              <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                {alertMessage}
              </Alert>
            </Col>
          </Row>
        )}
        
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="from_name"
                      placeholder="Your Name" 
                      required 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="from_email"
                      placeholder="Your Email" 
                      required 
                    />
                  </Form.Group>
                </Col>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  name="message"
                  placeholder="Your Message" 
                  required 
                />
              </Form.Group>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>eng.alyaahassan@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+20 121 002 1361</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Alexandria, Egypt</span>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col lg={12}>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/alyaa-hassan" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/alyaah95" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col lg={12}>
            <div className="footer-bottom">
              <p>&copy; 2026 Alyaa Hassan. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default ContactSection;