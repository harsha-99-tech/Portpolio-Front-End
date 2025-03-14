import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
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
        <Link to="/" aria-label="Go to homepage">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-4xl font-extrabold tracking-widest uppercase hover:text-blue-500 transition-colors duration-300"
          >
            HARSHA
          </button>
        </Link>

        {/* Hamburger / Exit Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoClose /> : "☰"}
          </button>
        </div>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-10">
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
          <div>
            <DarkModeSwitch
              checked={darkMode}
              onChange={toggleTheme}
              size={30}
              className="transition-all duration-300"
              aria-label="Toggle dark mode"
            />
          </div>
        </div>

        {/* Expanded Mobile Menu */}
        {menuOpen && (
          <div
            className={`absolute top-full left-0 w-full ${
              darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
            } flex flex-col items-center gap-4 py-6 shadow-lg md:hidden`}
          >
            <nav className="flex flex-col items-center space-y-4">
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

            {/* Dark/Light Mode Toggle in Mobile Menu */}
            <div>
              <DarkModeSwitch
                checked={darkMode}
                onChange={toggleTheme}
                size={30}
                className="transition-all duration-300"
                aria-label="Toggle dark mode"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
