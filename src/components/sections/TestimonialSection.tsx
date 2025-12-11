"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { useTheme } from "@/contexts/ThemeContext";

interface Testimonial {
  _id: string;
  name: string;
  image?: string | null;
  testimonial: string;
  rating: number;
}

const TestimonialSection = () => {
  const { darkMode } = useTheme();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);

      try {
        const response = await fetch("/api/testimonials");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      }

      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="min-h-[30vh] py-10 transition-colors duration-500"
      id="testimonials"
    >
      <div className="container mx-auto text-center">
        <h2
          className={`text-4xl font-extrabold mb-12 ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          What People Say About Us
        </h2>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center space-x-4">
            <div
              className={`spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full ${
                darkMode
                  ? "border-t-blue-500 border-gray-700"
                  : "border-t-blue-600 border-gray-200"
              }`}
            ></div>
            <p
              className={`text-lg ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Loading...
            </p>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="relative flex flex-col items-center justify-center p-10">
            <div className="relative max-w-6xl w-full px-12">
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  el: paginationRef.current,
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  if (prevRef.current && nextRef.current && paginationRef.current) {
                    if (swiper.params.navigation) {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                    }
                    if (swiper.params.pagination) {
                      swiper.params.pagination.el = paginationRef.current;
                    }
                    swiper.navigation.init();
                    swiper.pagination.init();
                  }
                }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="p-5"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial._id} className="pb-14">
                    <TestimonialCard
                      name={testimonial.name}
                      image={testimonial.image}
                      testimonial={testimonial.testimonial}
                      rating={testimonial.rating}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              ref={prevRef}
              className={`custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-600"
                  : "bg-white text-blue-500 border-gray-300 hover:bg-blue-500"
              } shadow-lg rounded-full border hover:text-white transition-all duration-300 z-10`}
            >
              ❮
            </button>
            <button
              ref={nextRef}
              className={`custom-next absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center ${
                darkMode
                  ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-600"
                  : "bg-white text-blue-500 border-gray-300 hover:bg-blue-500"
              } shadow-lg rounded-full border hover:text-white transition-all duration-300 z-10`}
            >
              ❯
            </button>

            <div ref={paginationRef} className="custom-pagination mt-6"></div>
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
              Oops! No testimonials found.
            </p>
            <p
              className={`text-md ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We're constantly adding new testimonials, stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
