import React from 'react';
import '../Styles/Heroes.css';

const Heroes = () => {
  return (
    <section className="hero" id='heroes'>
      <div className="hero-text">
        <p>MY NAME IS</p>
        <h1>KESHAV AGGRAWAL</h1>
        <button>I'M A RESEARCH SCHOLAR</button>
        <div className="about-text">
        <h2 className="title">
        HELLO<span className="dot">.</span>
        </h2>
        <div className="zigzag"></div>
        <p>
         I am a Ph.D. student under the supervision of <a href='https://sites.google.com/iiti.ac.in/abhirupdatta/' className='hilight'>Prof. Abhirup Datta</a> at the Department of Astronomy, Astrophysics and Space Engineering (DAASE), Indian Institute of Technology Indore (IIT Indore). I have been awarded the prestigious Prime Ministers Reseach Fellowship (<a href='https://www.pmrf.in/' className='hilight'>PMRF</a>) in October 2023 for pursuing my doctoral studies.
        </p>
        <p>
          While my present work involves studying the Sun using radio occultation data from the Indian Mars Orbiter Mission, I am interested in planetary and exoplanetary sciences as well. Sharing my knowledge and passion for astronomy brings me delight. I also try to devote some time to <a href='https://sites.google.com/iiti.ac.in/space-events' className='hilight'>outreach</a> and writing <a href='https://jovian-explorer.medium.com/' className='hilight'>blogs</a> as well.
        </p>
      </div>
      </div>
      <div className="hero-image">
        <img src={"/Images/photo.png"} alt="Keshav" />
      </div>
    </section>
  );
};

export default Heroes;
