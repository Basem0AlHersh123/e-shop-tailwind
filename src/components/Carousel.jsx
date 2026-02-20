/* FILE: Carousel.jsx */
import React, { useState, useEffect } from "react";
import Products from "../data/products.json";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = Products.length;

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalItems]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div className="relative w-full max-h-[800px] overflow-hidden rounded-2xl shadow-lg bg-base-900">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Products.map((product) => (
          <div key={product.id} className="w-full flex-shrink-0 relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-h-[800px] object-cover brightness-75"
            />
            {/* Gaming-style overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-base-900/90 to-transparent p-4">
              <div className="container mx-auto">
                <h3
                  className="text-white font-bold text-xl md:text-2xl mb-2"
                  style={{ fontFamily: "Orbitron" }}
                >
                  {product.title || "Featured Style"}
                </h3>
                <p className="text-base-content text-opacity-80 hidden md:block">
                  {product.description || "Explore the latest in gaming"}
                </p>
                {product.rating && (
                  <span className="badge badge-primary mt-2">
                    ⭐ {product.rating.rate}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous & Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100 text-base-content rounded-full p-2 shadow-md"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100 text-base-content rounded-full p-2 shadow-md"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
