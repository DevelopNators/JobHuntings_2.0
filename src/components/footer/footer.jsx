import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
const logo = import.meta.env.VITE_APP_LOGO;

const Footer = () => {
  return (
    <footer className="footer"style={{padding:'2rem'}}>
      <div className="footer-content">
        <div className="footer-logo">
        <img
            src={logo}
            alt="Logo"
            className="logo-img"
            style={{ height: "40px", width: "auto", marginRight: "8px" }}
          />
        </div>
        <nav className="footer-nav">

        <Link to="/" className="footer-link">Home</Link>
<Link to="/about" className="footer-link">About</Link>
<Link to="/contact" className="footer-link">Contact</Link>

        </nav>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-copyright">© 2024  All Rights Reserved.</p>
        <div className="footer-policy">
          <Link to= "/term-services"  >Terms of Service </Link>
          <Link to ="/privacy-policy"  > Privacy Policy </Link> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
