import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode"; // Correct import

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

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

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
            className="text-3xl text-gray-900 dark:text-gray-100"
          >
            ☰
          </button>
        </div>

        {/* Navigation Menu (Desktop and Mobile) */}
        <div
          className={`md:flex items-center space-x-10 ${
            menuOpen ? "flex" : "hidden"
          } md:block`}
        >
          <nav className="space-x-8">
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
          <div className="ml-4">
            <DarkModeSwitch
              checked={darkMode}
              onChange={toggleTheme}
              size={30} // Adjust size as needed
              className="transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
