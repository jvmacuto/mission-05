import React, { useState, useEffect } from "react";
import "./Advertisement.css"; // CSS for styling
import fordImage from "../assets/ford.jpg"; // Importing images
import harcourtsImage from "../assets/harcourts.png";
import nikeImage from "../assets/Nike.jpg";

function Advertisement() {
  const images = [fordImage, harcourtsImage, nikeImage]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="advertisement">
      <p className="advertisement-text">Advertisement</p>
      <img src={images[currentIndex]} alt="Advertisement" />
    </div>
  );
}

export default Advertisement;
