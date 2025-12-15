"use client";

import { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaAward, FaCertificate, FaUniversity } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
  type: "degree" | "certification" | "course";
  icon: React.ReactNode;
}

const EducationTimeline = () => {
  const { darkMode } = useTheme();
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const educationData: EducationItem[] = [
    {
      id: "1",
      title: "Bachelor's in Information Communication Technology (HONS)",
      institution: "University of Rajarata Faculty of Technology",
      period: "2020 - 2024",
      description: "Specialized in Software Engineering and Artificial Intelligence. Achieved Dean's List honors.",
      type: "degree",
      icon: <FaUniversity className="text-3xl" />,
    },
    {
      id: "2",
      title: "High School Diploma",
      institution: "Example High School",
      period: "2013 - 2019",
      description: "Focused on Science and Mathematics. Participated in various coding clubs and competitions.",
      type: "degree",
      icon: <FaGraduationCap className="text-3xl" />,
    },
    // Add more education items here
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute("data-item-id");
            if (itemId) {
              setVisibleItems((prev) => new Set([...prev, itemId]));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll("[data-item-id]");
    items.forEach((item) => observer.observe(item));

    // Calculate timeline progress
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const scrolled = windowHeight - elementTop;
          const total = elementHeight + windowHeight;
          const progressPercent = Math.min(100, Math.max(0, (scrolled / total) * 100));
          setProgress(progressPercent);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      items.forEach((item) => observer.unobserve(item));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={timelineRef}
      className="relative py-20"
      id="education-timeline"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
          >
            Education & Qualifications
          </h2>
          <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            My journey through learning and growth
          </p>
        </div>

        {/* Magical Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
            <div
              className={`absolute top-0 left-0 w-full transition-all duration-1000 ${
                darkMode ? "bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" : "bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
              }`}
              style={{
                height: `${progress}%`,
                boxShadow: `0 0 20px ${darkMode ? "rgba(147, 51, 234, 0.5)" : "rgba(147, 51, 234, 0.3)"}`,
              }}
            ></div>
            {/* Glowing dots along the line */}
            {educationData.map((item, index) => {
              const itemProgress = ((index + 1) / educationData.length) * 100;
              const isVisible = visibleItems.has(item.id);
              return (
                <div
                  key={`dot-${item.id}`}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
                  style={{
                    top: `${itemProgress}%`,
                  }}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-4 transition-all duration-1000 ${
                      isVisible
                        ? darkMode
                          ? "bg-purple-500 border-purple-300 scale-150 shadow-lg shadow-purple-500/50"
                          : "bg-purple-400 border-purple-200 scale-150 shadow-lg shadow-purple-400/50"
                        : darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-gray-300 border-gray-400"
                    }`}
                    style={{
                      animation: isVisible ? "pulse-glow 2s ease-in-out infinite" : "none",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Timeline Items */}
          <div className="space-y-24 md:space-y-32">
            {educationData.map((item, index) => {
              const isVisible = visibleItems.has(item.id);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  data-item-id={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card - Unique Elegant Design */}
                  <div
                    className={`w-full md:w-[45%] relative transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                        : isEven
                        ? "opacity-0 -translate-x-20 translate-y-10 scale-95"
                        : "opacity-0 translate-x-20 translate-y-10 scale-95"
                    }`}
                    style={{
                      transitionDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div
                      className={`group relative p-6 md:p-8 rounded-xl border-l-4 transition-all duration-500 hover:shadow-xl overflow-hidden ${
                        darkMode
                          ? "bg-gray-800/60 backdrop-blur-sm border-l-blue-400 shadow-lg"
                          : "bg-white/80 backdrop-blur-sm border-l-blue-500 shadow-md"
                      }`}
                    >
                      {/* Subtle top accent line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 ${
                          darkMode ? "bg-gradient-to-r from-blue-400 via-purple-400 to-transparent" : "bg-gradient-to-r from-blue-500 via-purple-500 to-transparent"
                        }`}
                      ></div>

                      {/* Minimalist icon in corner */}
                      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                        <div className={`text-6xl ${darkMode ? "text-blue-400" : "text-blue-500"}`}>
                          {item.icon}
                        </div>
                      </div>

                      <div className="relative z-10">
                        {/* Period - Minimalist badge */}
                        <div className="mb-4">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-mono tracking-wider uppercase ${
                              darkMode
                                ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                            }`}
                          >
                            {item.period}
                          </span>
                        </div>

                        {/* Title - Clean typography */}
                        <h3
                          className={`text-xl md:text-2xl font-bold mb-3 leading-tight ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* Institution - With subtle underline */}
                        <div className="mb-4">
                          <p
                            className={`text-base md:text-lg font-medium inline-block ${
                              darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {item.institution}
                            <span
                              className={`block h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-1 ${
                                darkMode ? "bg-blue-400" : "bg-blue-500"
                              }`}
                            ></span>
                          </p>
                        </div>

                        {/* Description - Clean paragraph */}
                        {item.description && (
                          <p
                            className={`text-sm md:text-base leading-relaxed mb-4 ${
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {item.description}
                          </p>
                        )}

                        {/* Type indicator - Minimalist */}
                        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-700/30">
                          {item.type === "degree" && (
                            <span
                              className={`text-xs font-medium uppercase tracking-wider ${
                                darkMode ? "text-blue-400" : "text-blue-600"
                              }`}
                            >
                              • Degree
                            </span>
                          )}
                          {item.type === "certification" && (
                            <span
                              className={`text-xs font-medium uppercase tracking-wider ${
                                darkMode ? "text-yellow-400" : "text-yellow-600"
                              }`}
                            >
                              • Certification
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Subtle hover effect - just a light glow */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                          darkMode
                            ? "bg-gradient-to-r from-blue-500/5 to-transparent"
                            : "bg-gradient-to-r from-blue-500/10 to-transparent"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Center Connector (Mobile) */}
                  <div className="md:hidden flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-1000 ${
                        isVisible
                          ? darkMode
                            ? "bg-purple-500 border-purple-300 scale-125 shadow-lg shadow-purple-500/50"
                            : "bg-purple-400 border-purple-200 scale-125 shadow-lg shadow-purple-400/50"
                          : darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-gray-300 border-gray-400"
                      }`}
                    >
                      <div className="text-purple-500 text-xl">{item.icon}</div>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-[10%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.5),
              0 0 40px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.8),
              0 0 60px rgba(147, 51, 234, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default EducationTimeline;

