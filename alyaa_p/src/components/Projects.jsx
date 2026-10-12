import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap';
import laptopFrame from '../assets/laptop.png'; // صورة اللابتوب الفضي المفرغ المتناسق
import bookme from '../assets/bookme.png'; // صورة مشروع BookMe
import egyptia from '../assets/egyptia.png'; // صورة مشروع Egyptia
import mycart_bliss from '../assets/mycart_bliss.png'; // صورة مشروع MyCart Bliss
import govInspect from '../assets/govInspect.jpg'; // صورة مشروع GovInspect
import './Projects.css';

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const videoRef = React.useRef(null);

  

  const projects = [
    {
      id: 1,
      title: "Egyptia — Historical & Geographical RAG Platform",
      description: "An interactive Egyptian history platform featuring SVG maps and an AI-powered RAG chatbot for geographical and historical queries.",
      image: egyptia, // حطي مسار الصورة
      video: "https://res.cloudinary.com/dg4tzyfar/video/upload/v1791744391/egyptia_nfeohx.mp4", // حطي مسار الفيديو لو موجود
      link: "https://egyptia-two.vercel.app/",
      github: "https://github.com/alyaah95/my_chatbot", // استبدلي بلينك الجيت هاب بتاعك
      overview: "Egyptia is an intelligent educational platform that digitizes Egyptian history and geography. It features interactive dynamic SVG maps displaying territorial borders across historical eras. The platform integrates a Retrieval-Augmented Generation (RAG) chatbot using Groq API that answers complex historical queries based on curated documents, with an automated web-search fallback.",
      challenges: [
        "Building a custom RAG architecture using Flask and Groq API to query vector-indexed historical documents.",
        "Implementing web-search fallback mechanisms when local domain knowledge yields insufficient answers.",
        "Optimizing dynamic SVG map rendering for interactive historical borders and spatial visualization.",
        "Managing media assets and cloud storage seamlessly using Cloudinary."
      ]
    },
    {
      id: 2,
      title: "GovInspect — Field Inspection System",
      description: "A centralized platform digitizing paper-based inspection workflows with role-based access control and real-time task reporting.",
      image: govInspect,
      video: "https://res.cloudinary.com/dg4tzyfar/video/upload/v1791713038/govInspect_completed_sarp1l.mp4",
      link: "https://gov-inspect-system.vercel.app/",
      github: "https://github.com/alyaah95/GovInspectSystem",
      overview: "GovInspect digitizes and automates manual field inspection processes for government agencies. Built with Django and Neon PostgreSQL, it features Multi-Tiered Role-Based Access Control (Tech Admins, Field Directors, and Field Inspectors). Directors assign facilities to inspectors, while inspectors submit digital reports on-site for real-time review, verification, and automated archiving.",
      challenges: [
        "Designing a granular Role-Based Access Control (RBAC) system for multi-tier management.",
        "Migrating paper-based forms into dynamic, structured Django digital inspection reports.",
        "Setting up serverless PostgreSQL hosting on Neon DB with query performance optimization.",
        "Streamlining the administrative verification workflow from submission to document archiving."
      ]
    },
    {
      id: 3,
      title: "BookMe — Hotel Reservation Platform",
      description: "A scalable MERN-stack hotel booking platform with real-time property management and an admin control dashboard.",
      image: bookme,
      video: "https://res.cloudinary.com/dg4tzyfar/video/upload/v1791717019/Bookme_Compressed_rbunoj.mp4",
      link: "https://bookme-beryl.vercel.app/",
      github: "https://github.com/alyaah95/Bookme-Website",
      overview: "BookMe is a full-stack accommodation reservation system built with the MERN stack. It enables users to explore, search, and book properties efficiently. The application includes dynamic availability checking, multi-criteria filtering, user authentication, and a full-featured admin dashboard for managing listings and system reservations.",
      challenges: [
        "Designing a scalable NoSQL database schema in MongoDB for complex booking and availability relationships.",
        "Generating realistic mock datasets and integrating dynamic media asset pipelines for property listings.",
        "Engineered stateful booking logic to manage reservation flows, date overlaps, and automated cancellation rules.",
        "Designing interactive analytics dashboards with data visualization charts to provide actionable insights for property admins."
      ]
    },
    {
      id: 4,
      title: "MyCart Bliss — E-Commerce Application",
      description: "A full-stack e-commerce web application with full product catalog management and simulated banking payment gateways.",
      image: mycart_bliss,
      video: "https://res.cloudinary.com/dg4tzyfar/video/upload/v1791711353/my_cartBliss_completed_uch6gf.mp4",
      link: "https://mycart-bliss.vercel.app/",
      github: "https://github.com/alyaah95/e-commerce_website",
      overview: "MyCart Bliss is a feature-rich e-commerce platform developed with Node.js, Express, React, and Neon PostgreSQL. It covers end-to-end shopping operations including user authentication, real-time cart state management, dynamic product cataloging, and a simulated bank payment gateway integration for mock checkout flows.",
      challenges: [
        "Integrating a simulated banking payment gateway to handle mock checkout flows securely.",
        "Architecting efficient relational database schemas on Neon DB for orders, products, and users.",
        "Managing complex client-side application state across shopping cart operations in React.",
        "Building modular Node.js & Express REST APIs for inventory and user management."
      ]
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
              playsInline
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