import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './contactForm';

gsap.registerPlugin(ScrollToPlugin);

const Contact = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    
    containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  
    gsap.from(titleRef.current, { opacity: 0, y: -50, duration: 1 });
    gsap.from(descriptionRef.current, { opacity: 0, y: 50, delay: 0.3, duration: 1 });
    gsap.from(buttonRef.current, { opacity: 0, scale: 0.8, delay: 0.6, duration: 1 });

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

  const handleScroll = () => {
    gsap.to(window, {
      scrollTo: { y: "#contact-section", offsetY: 50 }, 
      duration: 0.4,
      ease: "power2.inOut"
    });
  };

  return (
    <>
      <div className="contact-page" ref={containerRef}>
        {/* Background Image */}
        <div className="background-image">
          {/* Overlay */}
          <div className="overlay">
            <div className="content">
              <h1 ref={titleRef}>CONTACT</h1>
              <p ref={descriptionRef}>
              Your career journey begins here. Join us and explore the opportunity to be part of an exceptional team, dedicated to innovation and excellence.              </p>
             
              <button ref={buttonRef} onClick={handleScroll} className="scroll-button">
                <span className="arrow">↓</span>
              </button>
            </div>
          </div>
        </div>

        <div id="contact-section" className="contact-section">
          <h2 ref={textRef}>Get in Touch</h2>
          <p ref={imageRef}>Fill out the form below or contact us directly to learn more about joining our team and the opportunities available..</p>
          <ContactForm/>
        
        </div>
      </div>
    </>
  );
};

export default Contact;
