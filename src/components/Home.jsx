import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import ProfileSection from "./sections/ProfileSection";
import TestimonialSection from "./sections/TestimonialSection";
import { useTheme } from "../ThemeContext";

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
      <div id="hero" className="w-full px-6 md:px-12 py-8 md:py-16">
        <HeroSection />
      </div>

      {/* Profile Section */}
      <div id="profile" className="w-full px-6 md:px-12 py-8 md:py-16">
        <ProfileSection />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="w-full px-6 md:px-12 py-8 md:py-16">
        <PortfolioSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="w-full px-6 md:px-12 py-8 md:py-16">
        <TestimonialSection />
      </div>

      {/* Contact Section */}
      <div id="contact" className="w-full px-6 md:px-12 py-8 md:py-16">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
