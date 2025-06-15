import React from 'react';
import './Collage.css';
import Header from './Components/Header';


const images = [
  '/Images/img1.jpeg',  '/Images/img2.jpg', '/Images/img3.jpg',
  '/Images/img12.jpg', '/Images/img11.jpg', '/Images/img4.jpeg',
  '/Images/img13.jpg', '/Images/img7.jpeg', '/Images/img10.jpg', '/Images/img5.jpg',
  '/Images/img14.jpg', '/Images/img9.jpg', '/Images/img6.jpeg', 
  '/Images/img15.jpg', 
];

const getSpanClass = () => {
  const classes = ['' ,  'span-2x2', 'span-2x1', 'span-1x2'];
  const index = Math.floor(Math.random() * classes.length);
  return classes[index];
};

const Collage = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="title">
          {'FOOD & TRAVEL'.split('').map((char, idx) => (
            <span key={idx}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </div>
        <div className="collage-container">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`collage-${index}`}
              className={`collage-img ${getSpanClass()}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collage;

