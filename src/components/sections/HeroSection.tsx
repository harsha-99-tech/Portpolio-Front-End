"use client";

import { FiArrowRight, FiMail } from "react-icons/fi";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const HeroSection = () => {
  const { darkMode } = useTheme();

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center transition-colors duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hello, I'm{" "}
            <span
              className={`${
                darkMode ? "text-blue-400" : "text-blue-600"
              } hover:underline`}
            >
              Harsha Nawana
            </span>
          </h1>
          <p className="text-xl md:text-2xl italic font-medium">
            Creative Developer | UI/UX Designer | Innovator
          </p>
          <p className="text-md md:text-lg">
            I craft intuitive digital experiences and bring ideas to life with
            modern tools and technologies.
          </p>
          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md text-lg transition-all duration-300 ${
                darkMode
                  ? "bg-blue-500 hover:bg-blue-600 text-gray-100"
                  : "bg-blue-600 hover:bg-blue-700 text-gray-100"
              }`}
            >
              View Portfolio <FiArrowRight />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md text-lg border transition-all duration-300 ${
                darkMode
                  ? "border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-gray-100"
                  : "border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-gray-100"
              }`}
            >
              Contact Me <FiMail />
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div
            className={`relative w-72 h-72 md:w-96 md:h-96 rounded-full shadow-xl border-4 overflow-hidden ${
              darkMode
                ? "border-blue-500 hover:scale-105"
                : "border-blue-700 hover:scale-105"
            } transition-transform duration-300`}
          >
            <Image
              src="/my-photo1.png"
              alt="Harsha Nawana"
              width={384}
              height={384}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
