import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap';
import curiosityCorner from '../assets/curiosity-corner.png';
import bookMe from '../assets/book-me.png';
import laptopFrame from '../assets/laptop.png'; // صورة اللابتوب الفضي المفرغ المتناسق
import demoVideo from '../assets/demo.mp4'; // فيديو تجريبي للمشروع
import './Projects.css';

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const videoRef = React.useRef(null);

  const projects = [
    {
      id: 1,
      title: "Curiosity Corner",
      description: "A high-performance e-commerce platform built with WordPress and WooCommerce, designed to exceed customer expectations.",
      image: curiosityCorner,
      video: demoVideo,
      link: "https://dev-curiosity-corner-store.pantheonsite.io/",
      github: "#",
      overview: "Curiosity Corner is a comprehensive e-commerce solution that provides a seamless shopping experience. Built on WordPress and WooCommerce, it features a modern design, intuitive navigation, and optimized performance for both desktop and mobile users.",
      challenges: [
        "Implementing custom product filtering and sorting mechanisms",
        "Optimizing page load times for product-heavy pages",
        "Integrating secure payment gateways",
        "Creating a responsive design that works across all devices"
      ]
    },
    {
      id: 2,
      title: "Book Me",
      description: "A full-featured booking platform similar to Booking.com, developed using Node.js, React, and MongoDB for seamless reservations.",
      image: bookMe,
      link: "#",
      github: "https://github.com/dinasadek/GraduationProject-bookme",
      overview: "Book Me is a comprehensive booking system that allows users to search, compare, and book accommodations. The platform includes features like real-time availability, secure payments, user reviews, and an admin dashboard for property management.",
      challenges: [
        "Designing a scalable database schema for complex booking relationships",
        "Implementing real-time availability checking and conflict resolution",
        "Building a secure authentication and authorization system",
        "Creating an intuitive search and filter system with multiple criteria",
        "Optimizing API performance for large datasets"
      ]
    },
    {
      id: 3,
      title: "Book Me 2",
      description: "A full-featured booking platform similar to Booking.com, developed using Node.js, React, and MongoDB for seamless reservations.",
      image: bookMe,
      link: "#",
      github: "https://github.com/dinasadek/GraduationProject-bookme",
      overview: "Book Me is a comprehensive booking system that allows users to search, compare, and book accommodations.",
      challenges: ["Challenge 1", "Challenge 2"]
    },
    {
      id: 4,
      title: "Book Me 3",
      description: "A full-featured booking platform similar to Booking.com, developed using Node.js, React, and MongoDB for seamless reservations.",
      image: bookMe,
      link: "#",
      github: "https://github.com/dinasadek/GraduationProject-bookme",
      overview: "Book Me is a comprehensive booking system that allows users to search, compare, and book accommodations.",
      challenges: ["Challenge 1", "Challenge 2"]
    }
  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoEnlarged(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const toggleVideoSize = () => {
    setVideoEnlarged(!videoEnlarged);
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="projects-header text-center">
              <h2 className="projects-title">My Projects</h2>
              <p className="projects-subtitle">Here are some of my recent works</p>
            </div>
          </Col>
        </Row>
        
        {/* الحاوية الرئيسية للـ Slider لتوسطه داخل الصفحة */}
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            
            <Carousel 
              indicators={false} /* إلغاء النقط السفلية لتجنب زحمة التصميم */
              interval={null}    /* إلغاء التحرك التلقائي لكي يتصفح الـ Recruiter براحته */
              touch={true}
              slide={true}
              className="projects-slider"
            >
              {projects.map((project) => (
                <Carousel.Item key={project.id}>
                  <div className="laptop-card-container">
                    
                    {/* 💻 واجهة اللابتوب التفاعلية */}
                    <div className="laptop-hardware-wrapper" onClick={() => handleShowModal(project)}>
                      
                      {/* 📺 الشاشة الداخلية الحاضنة للصورة */}
                      <div className="hardware-internal-screen">
                        <img src={project.image} alt={project.title} className="screenshot-scroll-effect" />
                        
                        {/* تأثير الطبقة الزجاجية عند الهوفر لقراءة التفاصيل */}
                        <div className="screen-glass-blur">
                          <span className="screen-hover-txt">Quick View</span>
                        </div>
                      </div>

                      {/* 🖼️ غطاء هاردوير اللابتوب المفرغ */}
                      <img src={laptopFrame} alt="Laptop Frame" className="hardware-png-overlay" />
                    </div>

                    {/* 📝 تفاصيل كارت المشروع أسفل الجهاز */}
                    <div className="laptop-card-body text-center">
                      <h3 className="laptop-card-title">{project.title}</h3>
                      <p className="laptop-card-description">{project.description}</p>
                      
                      <div className="laptop-card-buttons">
                        <Button 
                          className="project-btn custom-details-btn"
                          onClick={() => handleShowModal(project)}
                        >
                          View Details
                        </Button>
                        
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-decor">
                            <Button className="project-btn secondary">
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

          </Col>
        </Row>
      </Container>

      {/* Project Details Modal */}
{selectedProject && (
  <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="project-modal">
    <Modal.Header closeButton>
      <Modal.Title>{selectedProject.title}</Modal.Title>
    </Modal.Header>
    
    <Modal.Body>
      
      {/* 🎬 منطقة الفيديو تظهر مباشرة هنا بدون شروط تكبير أو بلاي هولدر قديم */}
      <div className="video-section-wrapper">
        {!selectedProject.video || selectedProject.video === "#" ? (
          /* بديل المشاريع اللي لسه ملهاش فيديو */
          <div className="video-container backend-placeholder">
            <div className="video-placeholder">
              <i className="fas fa-laptop-code" style={{ fontSize: '3.5rem', marginBottom: '10px', color: 'var(--accent-color)' }}></i>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Demo Video Coming Soon</p>
            </div>
          </div>
        ) : (
          /* المشغل الذكي المباشر: شغال تحكم، بروجرس بار، وتكبير مدمج */
          <div className="video-container">
            <video
              ref={videoRef}
              src={selectedProject.video}
              controls                     /* بيطلع شريط التقدم، الصوت، وزرار التكبير الصاروخي */
              preload="metadata"
              className="portfolio-main-video"
              onClick={() => {
                // تشغيل وإيقاف فوري بمجرد الضغط على الفيديو نفسه
                if (videoRef.current) {
                  if (videoRef.current.paused) {
                    videoRef.current.play();
                  } else {
                    videoRef.current.pause();
                  }
                }
              }}
            />
          </div>
        )}
      </div>

      <div className="modal-section">
        <h5>Project Overview</h5>
        <p>{selectedProject.overview}</p>
      </div>

      <div className="modal-section">
        <h5>Technical Challenges</h5>
        <ul>
          {selectedProject.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>
    </Modal.Body>
    
    <Modal.Footer>
      {selectedProject.github && (
        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="no-decor">
            <i className="fab fa-github modal-github-icon"></i>
        </a>
      )}
      {selectedProject.link && (
        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="no-decor">
          <Button className="project-btn secondary">Live Demo</Button>
        </a>
      )}
    </Modal.Footer>
  </Modal>
)}
    </section>
  );
};

export default ProjectsSection;