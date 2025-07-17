import React, { useEffect, useState } from 'react';

const BackgroundImageSlider = () => {
  const images = [
    '/images/sweet1.jpg',
    '/images/sweet2.jpg',
    '/images/sweet3.jpg',
    '/images/sweet4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const sliderStyle = {
    width: '100%',
    height: '300px',
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
    borderBottom: '3px solid #ffc0cb',
  };

  return <div style={sliderStyle}></div>;
};

export default BackgroundImageSlider;
