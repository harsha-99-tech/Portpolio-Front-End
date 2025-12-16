"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaTools,
  FaPaintBrush,
  FaCode,
  FaRocket,
  FaAward,
  FaCheck,
} from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";
import EducationTimeline from "./EducationTimeline";

// Technologies Grid Component - Single Row with Wrap
const TechnologiesGrid = ({ technologies, darkMode, colorTheme = 'green' }: { technologies: any[], darkMode: boolean, colorTheme?: 'green' | 'orange' }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Color configuration based on theme
  const colors = colorTheme === 'orange' 
    ? {
        border: darkMode ? "border-orange-500/40 hover:border-orange-400" : "border-orange-400/50 hover:border-orange-500",
        shadow: darkMode ? "hover:shadow-orange-500/50" : "hover:shadow-orange-400/50",
        text: darkMode ? "text-orange-300" : "text-orange-700",
        textBorder: darkMode ? "border-orange-500/50" : "border-orange-400/50",
      }
    : {
        border: darkMode ? "border-green-500/40 hover:border-green-400" : "border-green-400/50 hover:border-green-500",
        shadow: darkMode ? "hover:shadow-green-500/50" : "hover:shadow-green-400/50",
        text: darkMode ? "text-green-300" : "text-green-700",
        textBorder: darkMode ? "border-green-500/50" : "border-green-400/50",
      };

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {technologies.map((tech, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={tech.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl p-2.5 backdrop-blur-md border-2 cursor-pointer transition-all duration-300 z-10 ${
                  darkMode
                    ? `bg-gray-800/60 ${colors.border} hover:bg-gray-800/80 shadow-lg ${colors.shadow}`
                    : `bg-white/70 ${colors.border} hover:bg-white shadow-lg ${colors.shadow}`
                }`}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Tooltip */}
              <div
                className={`absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 pointer-events-none z-30 ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                } ${
                  darkMode
                    ? `bg-gray-800 ${colors.text} border ${colors.textBorder}`
                    : `bg-white ${colors.text} border ${colors.textBorder} shadow-lg`
                }`}
              >
                {tech.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProfileSection = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("profile-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    { label: "Projects Completed", value: "20+", icon: FaRocket },
    { label: "Technologies Mastered", value: "10+", icon: FaCode },
    { label: "Years of Experience", value: "2+", icon: FaAward },
  ];

  const skills = [
    "Web Development",
    "Graphic Design",
    "UX/UI Design",
    "Database Management",
    "Prompt Engineering",
  ];

  const technologies = [
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
    { name: "React", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
    { name: "Python", icon: "https://img.icons8.com/ios-filled/50/000000/python.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
    { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql.png" },
    { name: "Docker", icon: "https://img.icons8.com/color/48/000000/docker.png" },
    { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
    { name: "CSS", icon: "https://img.icons8.com/ios-filled/50/000000/css3.png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/000000/tailwindcss.png" },
    { name: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" },
    { name: "GitHub", icon: "https://img.icons8.com/color/48/000000/github.png" },
  ];

  const softwares = [
    { name: "Photoshop", icon: "https://img.icons8.com/color/48/000000/adobe-photoshop.png" },
    { name: "Illustrator", icon: "https://img.icons8.com/color/48/000000/adobe-illustrator.png" },
    { name: "Figma", icon: "https://img.icons8.com/color/48/000000/figma.png" },
    { name: "InDesign", icon: "https://img.icons8.com/color/48/000000/adobe-indesign.png" },
    { name: "Canva", icon: "https://img.icons8.com/color/48/000000/canva.png" },
    { name: "DaVinci Resolve", icon: "https://img.icons8.com/color/48/000000/davinci-resolve.png" },
    { name: "Stripo", icon: "/Stripo.png" },
    { name: "Mailchimp", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mailchimp.svg" },
    { name: "Email on Acid", icon: "/emailonacid.png" },
    { name: "EmailJS", icon: "/emailjs.png" },
    { name: "VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
    { name: "WordPress", icon: "https://img.icons8.com/color/48/wordpress.png" },
    { name: "Cloudflare", icon: "https://img.icons8.com/color/48/cloudflare.png" },
    { name: "Android Studio", icon: "https://img.icons8.com/color/48/android-studio--v3.png" },
  ];

  return (
    <section
      id="profile-section"
      className="relative min-h-screen py-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
        </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            I am a passionate{" "}
            <span className="font-bold text-blue-500">developer</span> and{" "}
            <span className="font-bold text-purple-500">designer</span>, combining creativity and
            technology to build impactful solutions.
          </p>
          {/* Core Skills inline, centered */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 md:gap-4 text-base md:text-lg font-bold tracking-wide px-2">
            {skills.map((skill, index) => (
              <div key={skill} className="flex items-center whitespace-nowrap">
                <span className={darkMode ? "text-white" : "text-gray-900"}>
                  {skill.toUpperCase()}
                </span>
                {index !== skills.length - 1 && (
                  <span
                    className={`mx-4 h-4 w-px ${
                      darkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></span>
                )}
              </div>
            ))}
          </div>
        </div>

         {/* Stats Section - Enhanced Info Tiles */}
         <div
           className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${
             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
           }`}
         >
           {stats.map((stat, index) => {
             const Icon = stat.icon;
             const gradients = [
               { from: "from-blue-500", via: "via-cyan-500", to: "to-blue-600" },
               { from: "from-purple-500", via: "via-pink-500", to: "to-purple-600" },
               { from: "from-pink-500", via: "via-rose-500", to: "to-pink-600" },
             ];
             const gradient = gradients[index % gradients.length];
             
             return (
               <div
                 key={stat.label}
                 className={`group relative overflow-hidden rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                   darkMode
                     ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-gray-600"
                     : "bg-gradient-to-br from-white to-gray-50 border-gray-200/70 hover:border-gray-300 shadow-xl"
            }`}
                 style={{
                   animationDelay: `${index * 0.1}s`,
                 }}
          >
                 {/* Animated gradient background */}
                 <div
                   className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.via} ${gradient.to} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                 ></div>
                 
                 {/* Shimmer effect */}
                 <div
                   className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
                   style={{
                     animationDelay: `${index * 0.2}s`,
                   }}
                 ></div>

                 {/* Decorative corner elements */}
                 <div
                   className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-5 rounded-bl-full`}
                 ></div>
                 <div
                   className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${gradient.from} ${gradient.to} opacity-5 rounded-tr-full`}
                 ></div>

                 <div className="relative z-10">
                   {/* Icon with animated background */}
                   <div className="flex items-center justify-center mb-6">
                     <div
                       className={`relative p-5 rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.to} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                     >
                       <Icon className="text-3xl text-white relative z-10" />
                       {/* Glowing effect */}
                       <div
                         className={`absolute inset-0 bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300`}
                       ></div>
                     </div>
                   </div>

                   {/* Value with gradient text */}
                   <div
                     className={`text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r ${gradient.from} ${gradient.via} ${gradient.to} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                   >
                     {stat.value}
          </div>

                   {/* Label */}
          <div
                     className={`text-base md:text-lg font-semibold uppercase tracking-wider ${
                       darkMode ? "text-gray-300" : "text-gray-600"
            }`}
                   >
                     {stat.label}
                   </div>

                   {/* Decorative line */}
                   <div
                     className={`mt-4 h-1 w-16 bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-full group-hover:w-24 transition-all duration-300`}
                   ></div>
                 </div>

                 {/* Floating particles effect on hover */}
                 <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   {[...Array(6)].map((_, i) => (
                     <div
                       key={i}
                       className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${gradient.from} ${gradient.to} animate-float`}
                       style={{
                         left: `${20 + i * 15}%`,
                         top: `${30 + (i % 2) * 40}%`,
                         animationDelay: `${i * 0.1}s`,
                         animationDuration: `${3 + i * 0.5}s`,
                       }}
                     ></div>
                   ))}
                 </div>
               </div>
             );
           })}
         </div>


         {/* Education Timeline Section - Full Width Magical Timeline */}
         <div className="mb-16">
           <EducationTimeline />
          </div>

         {/* Technologies & Design Tools Section - Combined */}
          <div
           className={`mb-16 transition-all duration-1000 delay-400 ${
             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
           }`}
          >
           <div className="text-center mb-12">
             <h3
               className={`text-3xl md:text-4xl font-bold mb-4 ${
                 darkMode ? "text-white" : "text-gray-900"
               }`}
             >
               Technologies & Tools
             </h3>
             <div className="flex justify-center gap-4">
               <div
                 className={`h-1 w-16 rounded-full ${
                   darkMode ? "bg-gradient-to-r from-green-500 to-emerald-500" : "bg-gradient-to-r from-green-400 to-emerald-400"
                 }`}
               ></div>
               <div
                 className={`h-1 w-16 rounded-full ${
                   darkMode ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-to-r from-orange-400 to-red-400"
                 }`}
               ></div>
            </div>
          </div>

           {/* Unified Layout - Side by Side (Tech fixed, Tools wider) */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 max-w-7xl mx-auto">
             {/* Technologies Section */}
             <div className="lg:col-span-6">
               <div className="text-center mb-6">
                 <h4
                   className={`text-xl md:text-2xl font-bold mb-3 ${
                     darkMode ? "text-green-400" : "text-green-600"
                   }`}
                 >
                   Technologies
                 </h4>
               </div>
               <TechnologiesGrid technologies={technologies} darkMode={darkMode} />
             </div>

             {/* Tools Section (wider) */}
             <div className="lg:col-span-6">
               <div className="text-center mb-6">
                 <h4
                   className={`text-xl md:text-2xl font-bold mb-3 ${
                     darkMode ? "text-orange-400" : "text-orange-600"
                   }`}
                 >
                   Tools
                 </h4>
               </div>
               <TechnologiesGrid technologies={softwares} darkMode={darkMode} colorTheme="orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
