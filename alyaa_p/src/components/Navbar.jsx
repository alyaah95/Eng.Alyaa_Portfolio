// Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'about',    label: 'About'    },
  { id: 'skills',   label: 'Skills'   },
  { id: 'projects', label: 'Projects' },
  { id: 'contacts', label: 'Contacts' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const clickTarget = useRef(null);

  // Scrolled shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver — only runs when NOT click-scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Ignore ALL observer callbacks while we're doing a click-scroll
        if (isClickScrolling.current) return;

        // Among intersecting entries, pick the one closest to viewport top
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          setActiveSection(intersecting[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();                // prevent hash change → kills Bootstrap's own active logic
    e.currentTarget.blur();            // kill browser :focus immediately

    // Set active instantly on click
    setActiveSection(id);
    clickTarget.current = id;
    isClickScrolling.current = true;

    // Smooth scroll to section
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Re-enable observer only after scroll animation finishes.
    // 'scrollend' is the reliable event for this; we fall back to a timeout.
    const enableObserver = () => {
      isClickScrolling.current = false;
      clickTarget.current = null;
      window.removeEventListener('scrollend', enableObserver);
    };

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', enableObserver, { once: true });
    } else {
      // Fallback: 1000ms covers even slow smooth-scroll animations
      setTimeout(enableObserver, 1000);
    }
  };

  return (
    <BSNavbar expand="lg" className={`custom-navbar${scrolled ? ' scrolled' : ''}`}>
      <Container>
        <BSNavbar.Brand onClick={(e) => handleNavClick(e, 'about')} href="#about">
          Alyaa Atef
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {NAV_ITEMS.map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                // Never pass `active` prop to Nav.Link — Bootstrap uses it to
                // set its own class AND aria-current, which conflicts with ours.
                // We control styling purely via our own className.
                active={false}
                className={activeSection === id ? 'nav-link-active' : ''}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;