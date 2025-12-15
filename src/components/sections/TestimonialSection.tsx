"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { testimonials } from "@/data/testimonials";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const TestimonialSection = () => {
  const { darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("testimonials-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (testimonials.length === 0) {
    return (
      <section
        id="testimonials-section"
        className="min-h-[50vh] py-20 transition-colors duration-500"
      >
        <div className="container mx-auto text-center">
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            No testimonials available yet.
          </p>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials-section"
      className="relative min-h-[70vh] py-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
          >
            What People Say
          </h2>
          <p className={`text-lg md:text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Testimonials from clients and collaborators
          </p>
        </div>

        {/* Main Testimonial Display - Quote Style */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div
            className={`relative p-8 md:p-12 rounded-3xl border-l-4 ${
              darkMode
                ? "bg-gray-800/40 backdrop-blur-md border-l-purple-500"
                : "bg-white/60 backdrop-blur-md border-l-purple-500"
            }`}
          >
            {/* Large Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <FaQuoteLeft
                className={`text-6xl md:text-8xl ${
                  darkMode ? "text-purple-400" : "text-purple-500"
                }`}
              />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pl-8 md:pl-16">
              {/* Quote Text */}
              <blockquote
                className={`text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 italic ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {currentTestimonial.image ? (
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-purple-500">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center border-2 border-purple-500">
                      <span className="text-white text-2xl md:text-3xl font-bold">
                        {currentTestimonial.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name and Rating */}
                <div className="flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {currentTestimonial.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm md:text-base ${
                          i < currentTestimonial.rating
                            ? "text-yellow-400"
                            : darkMode
                            ? "text-gray-600"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? darkMode
                      ? "w-12 h-3 bg-purple-500"
                      : "w-12 h-3 bg-purple-500"
                    : darkMode
                    ? "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:border-purple-500"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-purple-500"
              }`}
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:border-purple-500"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-purple-500"
              }`}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
