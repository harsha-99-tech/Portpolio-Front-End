import React from "react";
import { useTheme } from "../../ThemeContext"; // Theme context for dark mode
import { FaStar } from "react-icons/fa"; // For rating stars

const TestimonialCard = ({ name, image, testimonial, rating }) => {
  const { darkMode } = useTheme(); // Get the current theme state

  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 
        ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"} 
        hover:${darkMode ? "bg-gray-700" : "bg-gray-300"} 
        hover:shadow-xl`}
    >
      {/* Profile Image with fallback */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = "/default-profile.png")} // Backup image if loading fails
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>

      {/* Testimonial Text */}
      <p className="text-sm text-center mb-4">"{testimonial}"</p>

      {/* Rating Stars */}
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400" : "text-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
