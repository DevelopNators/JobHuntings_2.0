import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gsap from 'gsap';
import './About.css';
import DevelopnatorImage from '../../assets/jobhuntings.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    gsap.from(textRef.current, {
      duration: 1.5,
      opacity: 0,
      x: -50,
      ease: 'power3.out',
      delay: 0.5,
    });

    gsap.from(imageRef.current, {
      duration: 1.5,
      opacity: 0,
      x: 50,
      ease: 'power3.out',
      delay: 0.7,
    });
  }, []);

  return (
    <Container ref={containerRef} fluid className="about-us-section py-8 px-4">
      <Row className="align-items-center text-center text-md-start">
        <Col xs={12} md={6} className="text-section mb-4 mb-md-0" ref={textRef}>
          <p className="about-us-subtitle">ABOUT US</p>
          <h1 className="about-us-title">
            Empowering job seekers and businesses to connect and grow. 
            <span className="highlighted-text"> Exceptional</span> opportunities await.
          </h1>
          <p className="about-us-description">
            Our platform is dedicated to helping job seekers find the right career opportunities and assisting businesses in discovering 
            the perfect talent for their teams. We post jobs across various industries, making it easier for people to find positions that 
            match their skills, goals, and ambitions. Join us to take the next step in your career journey or to hire the talent that drives 
            success.
          </p>
          <Link to="/">
            <Button className="about-us-button" variant="primary">
              Explore Job Openings
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} className="image-section d-flex justify-content-center" ref={imageRef}>
          <div className="image-overlay-container">
            <img src={DevelopnatorImage} alt="Person working" className="about-us-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
