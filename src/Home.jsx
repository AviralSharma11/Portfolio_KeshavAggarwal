import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Header from "./Components/Header";
import Heroes from './Components/Heroes';
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";
import "./Home.css";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="home">
      <Header />
      <Heroes />
      <AboutSection />

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate('/publications')}>My Publications</button>
        <button onClick={() => navigate('/education')}>Education and Work Experience</button>
        <button onClick={() => navigate('/food&travel')}>Food & Travel</button>
      </div>

      <Footer />
    </div>
  );
}
