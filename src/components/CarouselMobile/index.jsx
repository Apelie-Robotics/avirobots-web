/* eslint-disable react/prop-types */

import { useState } from "react";

const CarouselMobile = ({ images }) => {
  const [startX, setStartX] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        // Swipe left
        if (currentImageIndex < images.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      } else {
        // Swipe right
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      }
      setStartX(null);
    }
  };

  const handleSideImgClick = (index) => {
    if (index > currentImageIndex) setCurrentImageIndex(currentImageIndex + 1);
    if (index < currentImageIndex) setCurrentImageIndex(currentImageIndex - 1);
  };

  const classSelector = (index) => {
    if (index === currentImageIndex) return "active";
    if (index === currentImageIndex - 1) return "inactiveLeft";
    if (index === currentImageIndex + 1) return "inactiveRight";
    if (index === currentImageIndex - 2) return "secondInactiveLeft";
    if (index === currentImageIndex + 2) return "secondInactiveRight";
    return "inactive";
  };

  return (
    <div
      className="carouselContainer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(null)}
    >
      <div className="carouselWrapper">
        {images.map((image, index) => (
          <img
            src={image}
            alt={`carousel-img-${index}`}
            key={index}
            className={`${classSelector(index)}`}
            onClick={() => handleSideImgClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselMobile;
