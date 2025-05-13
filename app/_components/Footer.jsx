import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.9236703918075!2d3.379205!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMjguOCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin color="#d9d9d9" size={28} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github color="#d9d9d9" size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter color="#d9d9d9" size={28} />
          </a>
        </div>
        <p className="footer-text">© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
