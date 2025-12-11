"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

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
      className={`p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      } hover:shadow-xl`}
    >
      {/* Project Image */}
      <div className="w-full h-48 relative rounded-md mb-4 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.project || "Project Image"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              {project.project?.charAt(0) || "P"}
            </span>
          </div>
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-semibold mb-2">
        {project.project || "Untitled"}
      </h3>

      {/* Project Description */}
      <p className="text-sm mb-4">
        {project.description || "No description provided."}
      </p>

      {/* Technologies */}
      <p className={`text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        <strong>Technologies:</strong>{" "}
        {Array.isArray(project.technologies)
          ? project.technologies.join(", ")
          : "Not Available"}
      </p>

      {/* Tools */}
      <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        <strong>Tools:</strong>{" "}
        {Array.isArray(project.tools)
          ? project.tools.join(", ")
          : "Not Available"}
      </p>

      {/* View Project Button */}
      <a
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;

