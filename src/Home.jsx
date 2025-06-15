import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from "./Components/Header";
import Heroes from './Components/Heroes';
import "./Home.css";

export default function Home() {
  const location = useLocation();

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
    </div>
  );
}
