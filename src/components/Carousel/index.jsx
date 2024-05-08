/* eslint-disable react/prop-types */

import { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const CarouselMobile = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const classSelector = (index) => {
    if (index === currentImageIndex) return "active";
    if (index === currentImageIndex - 1) return "inactiveLeft";
    if (index === currentImageIndex + 1) return "inactiveRight";
    if (index === currentImageIndex - 2) return "secondInactiveLeft";
    if (index === currentImageIndex + 2) return "secondInactiveRight";
    if (index === currentImageIndex - 3) return "thirdInactiveLeft";
    if (index === currentImageIndex + 3) return "thirdInactiveRight";
    return "inactive";
  };

  return (
    <div className="carouselAndBtnContainer">
      <button
        className="carouselButton"
        onClick={() => {
          if (currentImageIndex > 0)
            setCurrentImageIndex(currentImageIndex - 1);
        }}
      >
        <HiOutlineChevronLeft />
      </button>
      <div className="carouselContainer">
        <div className="carouselWrapper">
          {images.map((image, index) => (
            <img
              src={image}
              alt={`carousel-img-${index}`}
              key={index}
              className={`${classSelector(index)}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <button
        className="carouselButton"
        onClick={() => {
          if (currentImageIndex < images.length - 1)
            setCurrentImageIndex(currentImageIndex + 1);
        }}
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  );
};

export default CarouselMobile;
