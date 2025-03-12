import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaTools,
  FaPaintBrush,
} from "react-icons/fa"; // Included necessary icons
import { useTheme } from "../../ThemeContext"; // Theme context for dark mode

const ProfileSection = () => {
  const { darkMode } = useTheme();

  return (
    <section className=" min-h-screen py-20 px-6 md:px-20 transition-colors duration-500 ">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          About Me & My Skills
        </h2>
        <p className="text-lg md:text-xl mb-12">
          I am a passionate developer and designer, combining creativity and
          technology to build impactful solutions. Here's a look at my
          background and tools I use to bring ideas to life.
        </p>

        {/* Grid Layout: All containers with the same size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Degree */}
          <div
            className={`flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <FaGraduationCap className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Degree</h3>
            <p className="text-md">
              Bachelor's in Information Communication Technology (HONS)
            </p>
            <p className="text-md">
              University of Rajarata Faculty of Technology
            </p>
          </div>

          {/* Courses */}
          <div
            className={`flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <FaLaptopCode className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <p className="text-md">Web Development</p>
            <p className="text-md">Graphic Design & UX/UI Design</p>
            <p className="text-md">Database Management</p>
            <p className="text-md">Prompt Engineering</p>
          </div>

          {/* Tools & Technologies */}
          <div
            className={`flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <FaTools className="text-5xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {/* Icons for Tools */}
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt="JavaScript"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="React"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="Node.js"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/ios-filled/50/000000/python.png"
                alt="Python"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="MongoDB"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt="HTML"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/ios-filled/50/000000/css3.png"
                alt="CSS"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
                alt="Git"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/github.png"
                alt="GitHub"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Softwares */}
          <div
            className={`flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <FaPaintBrush className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Softwares I Use</h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {/* Icons for Softwares */}
              <img
                src="https://img.icons8.com/color/48/000000/adobe-photoshop.png"
                alt="Adobe Photoshop"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/adobe-illustrator.png"
                alt="Adobe Illustrator"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/figma.png"
                alt="Figma"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/adobe-indesign.png"
                alt="Adobe InDesign"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/canva.png"
                alt="Canva"
                className="w-10 h-10"
              />
              <img
                src="https://img.icons8.com/color/48/000000/davinci-resolve.png"
                alt="DaVinci Resolve"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
