import React from 'react';
import '../Styles/Footer.css';
import { FaResearchgate, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="profile-footer" >
      <div className="footer-section">
        <h4>Extra Activities</h4>
        <ul>
          <li>Club Head – AsSET (Astronomy, Space Engineering & Tech), IIT Indore</li>
          <li>Experience in event management</li>
          <li>Volunteer – NGO Be Happier Soul</li>
        </ul>
      </div>

    <div className="footer-section" id='contact'>
    <h4>Contact</h4>
    <p>Email: <a href="mailto:keshavaggarwal2310@gmail.com">keshavaggarwal2310@gmail.com</a></p>
    <p>Phone: <a href="tel:+919458666775">+91 9458666775</a></p>
    <div className="social-links">
        <a href="https://www.researchgate.net/profile/Keshav-Aggarwal-4" target="_blank" rel="noopener noreferrer"><FaResearchgate /> ResearchGate</a>
        <a href="https://scholar.google.com/citations?user=KO8MtmEAAAAJ" target="_blank" rel="noopener noreferrer"><SiGooglescholar /> Google Scholar</a>
        <a href="https://orcid.org/0000-0002-7004-8670" target="_blank" rel="noopener noreferrer"><SiOrcid /> ORCID</a>
        <a href="https://github.com/jovian-explorer" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/dev-aggarwal/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
    </div>
    </div>
    </footer>
  );
};

export default Footer;
