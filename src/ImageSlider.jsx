import React, { useState , useEffect} from "react";
import "./ImageSlider.css";
import Header from "./Components/Header";

const images = [
  "/Images/talk1.jpg",
  "/Images/talk2.jpg",
  "/Images/talk3.jpg",
  "/Images/talk4.jpg",
  "/Images/talk5.jpg",
  "/Images/talk6.jpg",
  "/Images/talk7.jpg",
  "/Images/talk8.jpg",
  "/Images/talk9.jpg",
  "/Images/talk10.jpg",
  "/Images/talk12.jpg",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // Autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  const goToSlide = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <>
    <Header/>
    <div className="slider-wrapper">
      <div className="slider-container">
        <button className="nav-button prev" onClick={prevSlide}>
          &#10094;
        </button>

        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="slider-image"
        />

        <button className="nav-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots-container">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${current === i ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
    </>
  );
};

export default ImageSlider;
