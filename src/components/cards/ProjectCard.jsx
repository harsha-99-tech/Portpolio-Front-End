import React from "react";
import { useTheme } from "../../ThemeContext"; // Theme context for dark mode

const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme(); // Get the current theme state

  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105
        ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"} 
        hover:${darkMode ? "bg-gray-700" : "bg-gray-300"} 
       hover:shadow-xl`}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.project}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Project Title */}
      <h3 className="text-xl font-semibold mb-2">{project.project}</h3>

      {/* Project Description */}
      <p className="text-sm mb-4">{project.description}</p>

      {/* Technologies */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        <strong>Technologies:</strong>{" "}
        {Array.isArray(project.technologies)
          ? project.technologies.join(", ")
          : "Not Available"}
      </p>

      {/* Tools */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        <strong>Tools:</strong>{" "}
        {Array.isArray(project.tools)
          ? project.tools.join(", ")
          : "Not Available"}
      </p>

      {/* View Project Button */}
      <a
        href={project.link}
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
