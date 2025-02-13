import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Import star icons
import { useTheme } from "../../ThemeContext"; // Import theme context for dark mode

const TestimonialCard = ({ name, photo, testimonial, rating }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-blue-500 mb-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-center text-sm italic mt-2">
          &ldquo;{testimonial}&rdquo;
        </p>
        {/* Star Ratings */}
        <div className="flex mt-3">
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <FaStar key={index} className="text-yellow-400" />
            ) : (
              <FaRegStar key={index} className="text-gray-400" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
