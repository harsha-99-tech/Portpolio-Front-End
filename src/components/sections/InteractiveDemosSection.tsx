"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { FaGithub, FaCode, FaCopy, FaCheck } from "react-icons/fa";
import { interactiveDemos, DemoType } from "@/data/interactiveDemos";

const InteractiveDemosSection = () => {
  const { darkMode } = useTheme();
  const [particleCount, setParticleCount] = useState(20);
  const [buttonRipple, setButtonRipple] = useState<{ x: number; y: number } | null>(null);
  const [morphingShape, setMorphingShape] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const itemsPerPage = 6;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = darkMode ? "rgba(59, 130, 246, 0.5)" : "rgba(37, 99, 235, 0.3)";

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [particleCount, darkMode]);

  // Morphing shape animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphingShape((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setButtonRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setTimeout(() => setButtonRipple(null), 600);
  };

  // Component factory function to render demo components based on type
  const renderDemoComponent = (type: DemoType): React.ReactElement => {
    switch (type) {
      case "ripple-button":
        return (
          <button
            onClick={handleRipple}
            className={`relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              darkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Click Me
            {buttonRipple && (
              <span
                className="absolute rounded-full bg-white opacity-50 pointer-events-none animate-ripple"
                style={{
                  left: buttonRipple.x,
                  top: buttonRipple.y,
                  width: 0,
                  height: 0,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </button>
        );

      case "morphing-shape":
        return (
          <div className="flex items-center justify-center h-32">
            <div
              className={`transition-all duration-1000 ${
                darkMode ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-purple-400 to-pink-400"
              }`}
              style={{
                width: "80px",
                height: "80px",
                borderRadius:
                  morphingShape === 0
                    ? "50%"
                    : morphingShape === 1
                    ? "20%"
                    : morphingShape === 2
                    ? "0%"
                    : "30%",
                transform: `rotate(${morphingShape * 45}deg)`,
              }}
            />
          </div>
        );

      case "particle-system":
        return (
          <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-dashed border-gray-400">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ background: darkMode ? "rgba(17, 24, 39, 0.5)" : "rgba(243, 244, 246, 0.5)" }}
            />
            <div className="absolute bottom-2 left-2 flex gap-2">
              <button
                onClick={() => setParticleCount(Math.max(10, particleCount - 5))}
                className={`px-3 py-1 rounded text-sm ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                -
              </button>
              <span className={`px-3 py-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {particleCount} particles
              </span>
              <button
                onClick={() => setParticleCount(Math.min(50, particleCount + 5))}
                className={`px-3 py-1 rounded text-sm ${
                  darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                +
              </button>
            </div>
          </div>
        );

      case "gradient-card-hover":
        return (
          <div className="w-full h-48" style={{ perspective: "1000px" }}>
            <div 
              className="relative h-full rounded-xl overflow-hidden transition-transform duration-500"
              style={{ 
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(15deg) rotateX(5deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  darkMode
                    ? "from-blue-600 via-purple-600 to-pink-600"
                    : "from-blue-400 via-purple-400 to-pink-400"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white font-bold text-xl">Hover Me</span>
              </div>
            </div>
          </div>
        );

      case "loading-animation":
        return (
          <div className="flex items-center justify-center h-32">
            <div className="relative w-16 h-16">
              <div
                className={`absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin`}
              />
              <div
                className={`absolute inset-0 border-4 border-transparent border-r-purple-500 rounded-full animate-spin`}
                style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
              />
            </div>
          </div>
        );

      case "text-gradient":
        return (
          <div className="flex items-center justify-center h-32">
            <h3
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift"
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Animated Text
            </h3>
          </div>
        );

      case "pulse-glow":
        return (
          <div className="flex items-center justify-center h-32">
            <div
              className={`w-20 h-20 rounded-full ${
                darkMode ? "bg-blue-500" : "bg-blue-400"
              } animate-pulse shadow-lg`}
              style={{
                boxShadow: darkMode
                  ? "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)"
                  : "0 0 20px rgba(37, 99, 235, 0.6), 0 0 40px rgba(37, 99, 235, 0.4)",
              }}
            />
          </div>
        );

      case "bounce":
        return (
          <div className="flex items-center justify-center h-32">
            <div
              className={`w-12 h-12 rounded-full ${
                darkMode ? "bg-purple-500" : "bg-purple-400"
              } animate-bounce`}
            />
          </div>
        );

      case "rotating-cube":
        return (
          <div className="flex items-center justify-center h-32 perspective-1000">
            <div className="relative w-16 h-16 animate-spin" style={{ transformStyle: "preserve-3d" }}>
              <div
                className={`absolute w-16 h-16 ${
                  darkMode ? "bg-blue-600/80" : "bg-blue-500/80"
                } border-2 ${darkMode ? "border-blue-400" : "border-blue-300"}`}
                style={{ transform: "rotateY(0deg) translateZ(32px)" }}
              />
              <div
                className={`absolute w-16 h-16 ${
                  darkMode ? "bg-purple-600/80" : "bg-purple-500/80"
                } border-2 ${darkMode ? "border-purple-400" : "border-purple-300"}`}
                style={{ transform: "rotateY(90deg) translateZ(32px)" }}
              />
              <div
                className={`absolute w-16 h-16 ${
                  darkMode ? "bg-pink-600/80" : "bg-pink-500/80"
                } border-2 ${darkMode ? "border-pink-400" : "border-pink-300"}`}
                style={{ transform: "rotateY(180deg) translateZ(32px)" }}
              />
              <div
                className={`absolute w-16 h-16 ${
                  darkMode ? "bg-indigo-600/80" : "bg-indigo-500/80"
                } border-2 ${darkMode ? "border-indigo-400" : "border-indigo-300"}`}
                style={{ transform: "rotateY(-90deg) translateZ(32px)" }}
              />
            </div>
          </div>
        );

      case "progress-bar":
        return (
          <div className="w-full px-4">
            <div className={`w-full h-4 rounded-full overflow-hidden ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}>
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"
                style={{ width: "75%" }}
              />
            </div>
          </div>
        );

      case "floating-elements":
        return (
          <div className="relative w-full h-32 flex items-center justify-center">
            <div
              className={`absolute w-8 h-8 rounded-full ${
                darkMode ? "bg-blue-500" : "bg-blue-400"
              } animate-float`}
              style={{ left: "20%", animationDelay: "0s" }}
            />
            <div
              className={`absolute w-6 h-6 rounded-full ${
                darkMode ? "bg-purple-500" : "bg-purple-400"
              } animate-float`}
              style={{ left: "50%", animationDelay: "0.5s" }}
            />
            <div
              className={`absolute w-10 h-10 rounded-full ${
                darkMode ? "bg-pink-500" : "bg-pink-400"
              } animate-float`}
              style={{ left: "80%", animationDelay: "1s" }}
            />
          </div>
        );

      case "wave-animation":
        return (
          <div className="w-full h-32 flex items-center justify-center overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z"
                fill={darkMode ? "rgba(59, 130, 246, 0.3)" : "rgba(37, 99, 235, 0.2)"}
                className="animate-pulse"
              >
                <animate
                  attributeName="d"
                  values="M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z;M0,50 Q50,80 100,50 T200,50 L200,100 L0,100 Z;M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        );

      case "typewriter":
        return (
          <div className="flex items-center justify-center h-32">
            <div className={`text-2xl font-mono ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
              <span className="inline-block animate-pulse">|</span>
              <span className="ml-1">Hello World</span>
            </div>
          </div>
        );

      case "shimmer":
        return (
          <div className="w-full px-4">
            <div
              className={`h-20 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
          </div>
        );

      case "flip-card":
        return (
          <div className="w-full h-32" style={{ perspective: "1000px" }}>
            <div 
              className="relative w-full h-full transition-transform duration-500"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(180deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg)";
              }}
            >
              <div
                className={`absolute inset-0 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-blue-600" : "bg-blue-500"
                } text-white font-bold`}
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                Front
              </div>
              <div
                className={`absolute inset-0 rounded-lg flex items-center justify-center ${
                  darkMode ? "bg-purple-600" : "bg-purple-500"
                } text-white font-bold`}
                style={{ 
                  backfaceVisibility: "hidden", 
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                Back
              </div>
            </div>
          </div>
        );

      default:
        return <div>Demo not found</div>;
    }
  };

  // Use data from the data file
  const demos = interactiveDemos;

  // Pagination logic
  const totalPages = Math.ceil(demos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDemos = demos.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to the section instead of top of page
    const section = document.getElementById("interactive-demos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleCode = (demoId: string) => {
    setShowCode((prev) => ({
      ...prev,
      [demoId]: !prev[demoId],
    }));
  };

  const copyCode = async (code: string, demoId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(demoId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <section id="interactive-demos" className="py-16 md:py-20 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Interactive Demos
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore interactive components and animations built with modern web technologies
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {currentDemos.map((demo, index) => (
            <div
              key={startIndex + index}
              className={`group relative rounded-lg overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50"
                  : "bg-white border border-gray-200/80 hover:border-gray-300 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Action Buttons - Top Right Corner */}
              <div className="absolute top-3 right-3 z-10 flex gap-2">
                {demo.code && (
                  <button
                    onClick={() => toggleCode(demo.id)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      darkMode
                        ? "bg-gray-700/50 text-gray-400 hover:bg-gray-600 hover:text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                    aria-label="Show code"
                  >
                    <FaCode className="text-base" />
                  </button>
                )}
                <a
                  href={demo.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-700/50 text-gray-400 hover:bg-gray-600 hover:text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                  aria-label="View code on GitHub"
                >
                  <FaGithub className="text-base" />
                </a>
              </div>

              {/* Demo Component */}
              <div className="p-6 flex items-center justify-center min-h-[220px] group/demo">
                {renderDemoComponent(demo.type)}
              </div>

              {/* Code Display Section */}
              {demo.code && showCode[demo.id] && (
                <div className={`px-5 py-4 border-t ${darkMode ? "border-gray-700/30 bg-gray-900/50" : "border-gray-200/50 bg-gray-50"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      Code ({demo.codeLanguage || "tsx"})
                    </span>
                    <button
                      onClick={() => copyCode(demo.code!, demo.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                        copiedId === demo.id
                          ? darkMode
                            ? "bg-green-600 text-white"
                            : "bg-green-500 text-white"
                          : darkMode
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {copiedId === demo.id ? (
                        <>
                          <FaCheck className="text-xs" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="text-xs" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className={`overflow-x-auto rounded-md p-3 text-xs ${
                    darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-900 text-gray-100"
                  }`}>
                    <code>{demo.code}</code>
                  </pre>
                </div>
              )}

              {/* Footer with Title and Description */}
              <div className={`px-5 pb-5 pt-3 border-t ${darkMode ? "border-gray-700/30" : "border-gray-200/50"}`}>
                <h3
                  className={`text-base font-semibold mb-1 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {demo.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {demo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentPage === 1
                  ? darkMode
                    ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? darkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : darkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentPage === totalPages
                  ? darkMode
                    ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveDemosSection;
