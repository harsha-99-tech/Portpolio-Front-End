"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const FloatingSocialLinks = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  // Optional: Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only hide if scrolled down significantly
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Replace these with your actual social media links
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub />,
      ariaLabel: "Visit my GitHub profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourprofile",
      icon: <FaLinkedin />,
      ariaLabel: "Visit my LinkedIn profile",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yourusername",
      icon: <FaInstagram />,
      ariaLabel: "Visit my Instagram profile",
    },
  ];

  return (
    <div
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 flex flex-col gap-4 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      } hidden md:flex`}
    >
      {socialLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.url}
          target={link.url.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={link.ariaLabel}
          className={`group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 animate-fade-in-up backdrop-blur-md ${
            darkMode
              ? "bg-white/10 text-gray-200 border border-white/20 hover:bg-white/20 hover:border-white/30 hover:text-white"
              : "bg-white/40 text-gray-800 border border-gray-300/50 hover:bg-white/50 hover:border-gray-400/60 hover:text-gray-900 shadow-md"
          } hover:scale-110 hover:shadow-xl`}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <span className="text-xl">{link.icon}</span>
          {/* Tooltip */}
          <span
            className={`absolute right-full mr-3 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap pointer-events-none transition-all duration-300 backdrop-blur-md ${
              darkMode
                ? "bg-white/10 text-gray-100 border border-white/20 shadow-lg"
                : "bg-white/50 text-gray-900 border border-gray-300/60 shadow-lg"
            } opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0`}
          >
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialLinks;

