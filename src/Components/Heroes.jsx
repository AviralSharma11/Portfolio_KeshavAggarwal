import React from 'react';
import '../Styles/Heroes.css';

const Heroes = () => {
  return (
    <section className="hero" id='heroes'>
      <div className="hero-text">
        <p>MY NAME IS</p>
        <h1>KESHAV AGGRAWAL</h1>
        <button>I'M A RESEARCH SCHOLAR</button>
      </div>
      <div className="hero-image">
        <img src={"/Images/trial.jpg"} alt="Keshav" />
      </div>
    </section>
  );
};

export default Heroes;
