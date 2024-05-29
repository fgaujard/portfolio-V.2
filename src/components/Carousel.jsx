import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Carousel({ children, autoPlayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      // eslint-disable-next-line react/prop-types
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      // eslint-disable-next-line react/prop-types
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        // eslint-disable-next-line react/prop-types
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react/prop-types
  }, [autoPlayInterval, children.length]);

  return (
    <div className="carousel">
      <button
        type="button"
        className="prev"
        onClick={handlePrev}
        alt="Previous picture"
        label="Prev"
        name="Prev"
      >
        <i className="fas fa-chevron-left" />
      </button>
      <div className="slides">
        {/* eslint-disable-next-line react/prop-types */}
        {children.map((child, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="next"
        onClick={handleNext}
        alt="Next picture"
        label="Next"
        name="Next"
      >
        <i className="fas fa-chevron-right" />
      </button>
      <div className="dots">
        {/* eslint-disable-next-line react/prop-types */}
        {children.map((_, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
