"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import ProjectCard from "@/components/cards/ProjectCard";

interface Project {
  _id: string;
  project?: string;
  image?: string;
  description?: string;
  technologies?: string[];
  tools?: string[];
  link?: string;
}

type TabKey = "App Dev." | "Web Dev." | "Graphic Design" | "UI Design" | "Other";

const PortfolioSection = () => {
  const { darkMode } = useTheme();

  const tabs: TabKey[] = ["App Dev.", "Web Dev.", "Graphic Design", "UI Design", "Other"];

  const tabMapping: Record<TabKey, string> = {
    "App Dev.": "app",
    "Web Dev.": "web",
    "Graphic Design": "graphic",
    "UI Design": "ui",
    Other: "ot",
  };

  const [activeTab, setActiveTab] = useState<TabKey>(tabs[0]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      try {
        const category = tabMapping[activeTab];
        const response = await fetch(`/api/projects/${category}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        // API returns array directly (matching your backend format)
        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
        setProjects([]);
      }

      setLoading(false);
    };

    fetchProjects();
  }, [activeTab]);

  return (
    <section className="min-h-screen py-4 transition-colors duration-500 relative">
      <div className="container mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-10 ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          My Portfolio
        </h2>

        {/* Tabs with wrapping on smaller screens */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-lg font-semibold rounded-full shadow-md transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-500 text-white scale-105 transform shadow-lg"
                  : darkMode
                  ? "bg-gray-800 text-gray-100 border-2 border-transparent hover:border-blue-500 hover:bg-blue-600"
                  : "bg-white text-gray-700 border-2 border-transparent hover:border-blue-500 hover:bg-blue-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Container with fixed or min-height */}
        <div className="min-h-[500px] flex justify-center items-center relative z-10">
          {/* Loading state */}
          {loading ? (
            <div className="flex justify-center items-center space-x-4">
              <div
                className={`w-16 h-16 border-4 border-t-blue-500 ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } rounded-full animate-spin`}
              ></div>
              <p
                className={`text-lg ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Loading...
              </p>
            </div>
          ) : error ? (
            <div
              className={`text-lg mt-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {error}
              </p>
              <p
                className={`text-md ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We're constantly adding new ones, stay tuned!
              </p>
            </div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project._id || project.project} project={project} />
              ))}
            </div>
          ) : (
            <div
              className={`text-lg mt-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Oops! No projects found.
              </p>
              <p
                className={`text-md ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We're constantly adding new ones, stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
