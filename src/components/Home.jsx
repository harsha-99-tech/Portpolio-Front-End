import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProfileSection from "./sections/ProfileSection";
import TestimonialSection from "./sections/TestimonialSection";
import { useTheme } from "../ThemeContext";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-start transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={`absolute -top-16 -left-16 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            darkMode ? "bg-blue-700" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-30 ${
            darkMode ? "bg-pink-700" : "bg-pink-300"
          }`}
        ></div>
      </div>

      {/* Hero Section */}
      <div id="hero" className="w-full px-6 md:px-12  md: container mx-auto">
        <HeroSection />
      </div>

      {/* Profile Section */}
      <div
        id="profile"
        className="w-full px-6 md:px-12 py-8 md:py-16 container mx-auto"
      >
        <ProfileSection />
      </div>

      {/* Portfolio Section */}
      <div
        id="portfolio"
        className="w-full px-6 md:px-12  md: container mx-auto"
      >
        <PortfolioSection />
      </div>

      {/* Testimonials Section */}
      <div
        id="testimonials"
        className="w-full px-6 md:px-12  md: container mx-auto"
      >
        <TestimonialSection />
      </div>

      {/* Contact Section */}
      <div id="contact" className="w-full px-6 md:px-12  md: container mx-auto">
        <ContactSection />
      </div>

      {/* Footer */}
      <div
        id="footer"
        className="w-full px-6 md:px-12  md:py-16 container mx-auto"
      >
        <footer
          className={`w-full py-6 text-center border-t ${
            darkMode
              ? "bg-gray-900 border-gray-800 text-gray-300"
              : "bg-gray-100 border-gray-300 text-gray-700"
          }`}
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
              <a
                href="#hero"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#profile"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <a
                href="www.linkedin.com/in/harsha-nawana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/harsha-99-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-500 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/harsha_nawana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>

            <p className="text-sm">
              &copy; {new Date().getFullYear()} <strong>NOVO</strong> | Harsha
              Nawana. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
