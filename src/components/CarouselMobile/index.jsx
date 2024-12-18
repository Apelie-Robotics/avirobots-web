/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const CarouselMobile = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth + 15 < scrollWidth);
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = window.innerWidth;
    const newScrollPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="carouselContainer">
      <button
        onClick={() => scroll("left")}
        className={!canScrollLeft && "disabled"}
      >
        <FaChevronLeft />
      </button>
      <div
        className="carouselMobile"
        ref={scrollContainerRef}
        onScroll={checkScrollPosition}
      >
        {children}
      </div>
      <button
        onClick={() => scroll("right")}
        className={!canScrollRight && "disabled"}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CarouselMobile;
