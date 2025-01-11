import Image from 'next/image';
import styles from '../styles/Home.module.css'


import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['slider-0.jpg', 'slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg', 'slider-4.jpg', 'slider-5.jpg','slider-6.jpg']; // Add your image URLs here

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className={styles.imageCarousel}>
      <img
        className={styles.landingImage}
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <div class={styles.overlay}></div>
    </div>
  );
};

export default Carousel;