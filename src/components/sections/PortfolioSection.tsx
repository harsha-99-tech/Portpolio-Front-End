"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import ProjectCard from "@/components/cards/ProjectCard";
import { projectsByCategory, StaticProject } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

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
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  // Use static data instead of API
  const projects = useMemo(() => {
    const category = tabMapping[activeTab];
    const staticProjects = projectsByCategory[category] || [];
    // Convert StaticProject to Project format (convert null to undefined for image)
    return staticProjects.map((p) => ({
      ...p,
      image: p.image ?? undefined,
    }));
  }, [activeTab]);

  // Reset carousel when tab changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
      // Re-initialize navigation when tab changes
      if (projects.length >= 3 && prevRef.current && nextRef.current) {
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, [activeTab, projects.length]);

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

        {/* Projects Carousel Container */}
        <div className="min-h-[500px] flex justify-center items-center relative z-10 px-4">
          {projects.length > 0 ? (
            <div className="relative w-full max-w-7xl">
              {projects.length >= 3 ? (
                <>
                  {/* Carousel - Only show when 3+ projects */}
                  <Swiper
                    key={`swiper-${activeTab}-${projects.length}`}
                    modules={[Navigation, Pagination, Autoplay]}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    onBeforeInit={(swiper) => {
                      if (prevRef.current && nextRef.current && paginationRef.current) {
                        if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                          swiper.params.navigation.prevEl = prevRef.current;
                          swiper.params.navigation.nextEl = nextRef.current;
                        }
                        if (swiper.params.pagination && typeof swiper.params.pagination === 'object') {
                          swiper.params.pagination.el = paginationRef.current;
                        }
                      }
                    }}
                    onInit={(swiper) => {
                      if (prevRef.current && nextRef.current && paginationRef.current && projects.length >= 3) {
                        swiper.navigation.init();
                        swiper.pagination.init();
                      }
                    }}
                    loop={projects.length >= 3}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    pagination={projects.length >= 3 ? {
                      el: paginationRef.current,
                      clickable: true,
                      dynamicBullets: true,
                    } : false}
                    navigation={projects.length >= 3 ? {
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    } : false}
                    autoplay={projects.length >= 3 ? {
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    } : false}
                    className="pb-16"
                  >
                    {projects.map((project) => (
                      <SwiperSlide key={project._id || project.project} className="h-auto">
                        <div className="h-full flex items-stretch">
                          <ProjectCard project={project} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation Buttons - Moved further out, only show when 3+ projects */}
                  {projects.length >= 3 && (
                    <>
                      <button
                        ref={prevRef}
                        className={`portfolio-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 lg:-translate-x-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 transition-all duration-300 z-20 ${
                          darkMode
                            ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-600 hover:border-blue-500 hover:text-white"
                            : "bg-white text-blue-500 border-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white shadow-lg"
                        }`}
                        aria-label="Previous projects"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        ref={nextRef}
                        className={`portfolio-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 lg:translate-x-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 transition-all duration-300 z-20 ${
                          darkMode
                            ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-600 hover:border-blue-500 hover:text-white"
                            : "bg-white text-blue-500 border-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white shadow-lg"
                        }`}
                        aria-label="Next projects"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Pagination - only show when 3+ projects */}
                  {projects.length >= 3 && (
                    <div ref={paginationRef} className="portfolio-pagination mt-8"></div>
                  )}
                </>
              ) : (
                /* Simple Grid Layout - When less than 3 projects */
                <div className={`grid grid-cols-1 ${projects.length === 2 ? 'md:grid-cols-2' : ''} gap-6 md:gap-8 max-w-5xl mx-auto`}>
                  {projects.map((project) => (
                    <div key={project._id || project.project} className="h-full">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              )}
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
