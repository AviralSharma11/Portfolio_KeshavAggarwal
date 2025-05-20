import React, { useEffect, useState } from 'react';
import '../Styles/Header.css';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
        setMenuOpen(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${showHeader ? 'show' : 'hide'}`}>
      <div className="logo">PROTOFILO.</div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#heroes" className="active">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="/assets/Final_CV.pdf" target="_blank" rel="noopener noreferrer">MY&nbsp;CV</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="https://jovian-explorer.medium.com/">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
