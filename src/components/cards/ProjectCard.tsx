"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import { FaExternalLinkAlt, FaCode, FaTools } from "react-icons/fa";

interface Project {
  _id?: string;
  id?: string;
  project?: string;
  image?: string;
  description?: string;
  technologies?: string[];
  tools?: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`group relative h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
        darkMode
          ? "bg-gray-800/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/50"
          : "bg-white/90 backdrop-blur-sm border-gray-200/70 hover:border-blue-400/70 shadow-lg"
      }`}
    >
      {/* Image Section - Fixed Height */}
      <div className="relative w-full h-56 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.project || "Project Image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {project.project?.charAt(0) || "P"}
            </span>
          </div>
        )}
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Link button overlay */}
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute bottom-4 right-4 p-3 rounded-full backdrop-blur-md border transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 ${
            darkMode
              ? "bg-white/20 border-white/30 text-white hover:bg-white/30"
              : "bg-white/80 border-white/90 text-gray-900 hover:bg-white"
          }`}
        >
          <FaExternalLinkAlt className="w-4 h-4" />
        </a>
      </div>

      {/* Content Section - Flexible but constrained */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3
          className={`text-xl md:text-2xl font-bold mb-3 line-clamp-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.project || "Untitled Project"}
        </h3>

        {/* Description - Fixed height with clamp */}
        <p
          className={`text-sm md:text-base mb-4 line-clamp-3 flex-1 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description || "No description provided."}
        </p>

        {/* Technologies & Tools - Compact display */}
        <div className="space-y-3 mb-4">
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaCode className={`text-sm ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  Technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      darkMode
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-blue-100 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          {project.tools && project.tools.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaTools className={`text-sm ${darkMode ? "text-purple-400" : "text-purple-600"}`} />
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  Tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool, index) => (
                  <span
                    key={index}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      darkMode
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-purple-100 text-purple-700 border border-purple-200"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    +{project.tools.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* View Project Button - Always at bottom */}
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-500 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          } shadow-md hover:shadow-lg transform hover:scale-105`}
        >
          View Project
          <FaExternalLinkAlt className="w-3 h-3" />
        </a>
      </div>

      {/* Decorative accent */}
      <div
        className={`absolute top-0 left-0 w-1 h-full ${
          darkMode ? "bg-gradient-to-b from-blue-500 to-purple-500" : "bg-gradient-to-b from-blue-400 to-purple-400"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
    </div>
  );
};

export default ProjectCard;
