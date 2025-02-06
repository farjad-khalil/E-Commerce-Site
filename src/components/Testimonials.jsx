import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    review: "Amazing products and great service. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    review: "The quality is top-notch! Shopping here was a great experience.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Lee",
    review: "Fast delivery and excellent customer support. Will shop again!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide every 4 seconds (pauses on hover)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="flex flex-col gap-4 p-6 max-w-2xl mx-auto relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Heading */}
      <div className="font-bold text-3xl text-center">What Our Customers Say</div>

      {/* Testimonials Container with Slide Animation */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 text-3xl text-gray-500 hover:text-gray-700 z-10"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        {/* Sliding Testimonial Content */}
        <div className="w-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center p-6 rounded-lg shadow-md min-w-full transition-opacity duration-500"
            >
              <img
                src={testimonial.avatar}
                alt="User Avatar"
                className="w-14 h-14 rounded-full mb-2"
              />
              <div className="font-semibold text-lg">{testimonial.name}</div>
              <div className="text-gray-700 text-center">{testimonial.review}</div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 text-3xl text-gray-500 hover:text-gray-700 z-10"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
