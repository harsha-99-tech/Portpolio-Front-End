import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import myPhoto from "../assets/my-photo.png";

const LandingPage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [animating, setAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimating(true); // Trigger animation on mount
  }, []);

  const handleContinue = () => {
    setAnimating(false);
    setTimeout(() => navigate("/home"), 1000); // Navigate after animation
  };

  return (
    <div
      className={`h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 px-4 py-2 rounded-lg shadow-md text-sm font-semibold ${
          darkMode
            ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
            : "bg-gray-900 text-gray-100 hover:bg-gray-800"
        } transition`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full px-6">
        <div
          className={`md:w-1/2 text-center md:text-left transform transition-all duration-700 ${
            animating
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Harsha Nawana
          </h1>
          <p className="text-lg md:text-xl italic mb-6">
            "Dream big, work hard, and make it happen."
          </p>
          <button
            onClick={handleContinue}
            className={`px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ${
              darkMode
                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                : "bg-gray-900 text-gray-100 hover:bg-gray-800"
            }`}
          >
            Continue
          </button>
        </div>

        <div
          className={`md:w-1/2 flex justify-center items-center transform transition-all duration-700 ${
            animating ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <img
            src={myPhoto}
            alt="Harsha Nawana"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
