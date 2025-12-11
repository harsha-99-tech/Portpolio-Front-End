"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  image?: string | null;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, image, testimonial, rating }: TestimonialCardProps) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      } hover:shadow-xl`}
    >
      {/* Profile Image with fallback */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-md relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            onError={(e) => {
              // Hide image on error, show placeholder
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'placeholder w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center';
                placeholder.textContent = name.charAt(0).toUpperCase();
                placeholder.style.color = 'white';
                placeholder.style.fontSize = '2rem';
                placeholder.style.fontWeight = 'bold';
                parent.appendChild(placeholder);
              }
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
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

