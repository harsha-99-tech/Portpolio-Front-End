import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setHidden(true); // Hide header when scrolling down
      } else {
        setHidden(false); // Show header when scrolling up
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] px-8 py-6 transition-all duration-500 ease-in-out shadow-lg ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-4xl font-extrabold tracking-widest uppercase hover:text-blue-500 transition-colors duration-300"
          >
            HARSHA
          </button>
        </Link>

        {/* Navigation Menu (Aligned to Right) */}
        <div className="flex items-center space-x-10">
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-semibold transition-transform duration-300 hover:scale-110 hover:text-blue-500"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("profile")}
              className="text-xl font-semibold transition-transform duration-300 hover:scale-110 hover:text-blue-500"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-xl font-semibold transition-transform duration-300 hover:scale-110 hover:text-blue-500"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-xl font-semibold transition-transform duration-300 hover:scale-110 hover:text-blue-500"
            >
              Testimonials
            </button>
          </nav>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`px-5 py-2 text-lg font-semibold rounded-full shadow-md transition-all duration-300 ${
              darkMode
                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                : "bg-gray-900 text-gray-100 hover:bg-gray-800"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
