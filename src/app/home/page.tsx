"use client";

import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProfileSection from "@/components/sections/ProfileSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const { darkMode } = useTheme();
  return (
    <>
      <Header />
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
        <div id="hero" className="w-full px-6 md:px-12 container mx-auto relative z-10">
          <HeroSection />
        </div>

        {/* Profile Section */}
        <div
          id="profile"
          className="w-full px-6 md:px-12 py-8 md:py-16 container mx-auto relative z-10"
        >
          <ProfileSection />
        </div>

        {/* Portfolio Section */}
        <div
          id="portfolio"
          className="w-full px-6 md:px-12 container mx-auto relative z-10"
        >
          <PortfolioSection />
        </div>

        {/* Testimonials Section */}
        <div
          id="testimonials"
          className="w-full px-6 md:px-12 container mx-auto relative z-10"
        >
          <TestimonialSection />
        </div>

        {/* Contact Section */}
        <div id="contact" className="w-full px-6 md:px-12 container mx-auto relative z-10">
          <ContactSection />
        </div>
      </div>

      {/* Footer - Outside the main container for proper placement */}
      <div className="w-full relative z-10 mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default Home;
