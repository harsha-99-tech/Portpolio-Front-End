"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { darkMode } = useTheme();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      className={`w-full py-6 text-center border-t ${
        darkMode
          ? "bg-gray-900 border-gray-800 text-gray-300"
          : "bg-gray-100 border-gray-300 text-gray-700"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("profile")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/harsha-nawana"
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
  );
}

