"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Image from "next/image";

const LandingPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [animating, setAnimating] = useState(false);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setAnimating(true); // Trigger animation on mount
  }, []);

  const handleContinue = () => {
    setAnimating(false);
    setTimeout(() => router.push("/home"), 1000); // Navigate after animation
  };

  return (
    <div
      className={`h-screen flex flex-col md:flex-row items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Dark Mode Switch */}
      <div className="absolute top-4 right-4">
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleTheme}
          size={30}
          className="transition-all duration-300"
        />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6 py-10 md:py-0">
        {/* Left Side Content (Text and Button) */}
        <div
          className={`md:w-1/2 text-center md:text-left transform transition-all duration-700 ${
            animating
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm Harsha Nawana
          </h1>
          <p className="text-lg md:text-xl italic mb-6">
            "Dream big, work hard, and make it happen."
          </p>
          <button
            onClick={handleContinue}
            className={`px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-colors duration-300 ${
              darkMode
                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                : "bg-gray-900 text-gray-100 hover:bg-gray-800"
            }`}
          >
            Continue
          </button>
        </div>

        {/* Right Side Content (Image) */}
        <div
          className={`md:w-1/2 flex justify-center items-center transform transition-all duration-700 ${
            animating ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg overflow-hidden relative bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            {!imageError ? (
              <Image
                src="/my-photo.png"
                alt="Harsha Nawana"
                width={320}
                height={320}
                className="object-cover rounded-full"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-white text-4xl md:text-5xl font-bold">HN</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

