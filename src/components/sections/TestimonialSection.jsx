import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../cards/TestimonialCard";
import { useTheme } from "../../ThemeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const { darkMode } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      photo: "/path-to-photo.jpg",
      testimonial: "This is an amazing service! Highly recommend it.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "/path-to-photo.jpg",
      testimonial: "Incredible experience! Will definitely come back again.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sarah Lee",
      photo: "/path-to-photo.jpg",
      testimonial: "The quality is great, and the support is excellent.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael Johnson",
      photo: "/path-to-photo.jpg",
      testimonial: "Such a professional team, very satisfied with the results.",
      rating: 4,
    },
    {
      id: 5,
      name: "Emily Davis",
      photo: "/path-to-photo.jpg",
      testimonial: "I couldn't have asked for better service. Top-notch!",
      rating: 5,
    },
    {
      id: 6,
      name: "David Brown",
      photo: "/path-to-photo.jpg",
      testimonial: "Great value for money! Highly recommend their services.",
      rating: 4,
    },
    {
      id: 7,
      name: "Alex White",
      photo: "/path-to-photo.jpg",
      testimonial: "Fantastic work! Very professional and timely delivery.",
      rating: 5,
    },
    {
      id: 8,
      name: "Sophia Green",
      photo: "/path-to-photo.jpg",
      testimonial: "Great service, exceeded my expectations.",
      rating: 4,
    },
    {
      id: 9,
      name: "James Wilson",
      photo: "/path-to-photo.jpg",
      testimonial: "Excellent experience working with this team!",
      rating: 5,
    },
    {
      id: 10,
      name: "Olivia Martinez",
      photo: "/path-to-photo.jpg",
      testimonial:
        "The best decision I made! Highly recommended!sasd asfg ag asdf sag asdf ag a asg q ga ga g ag a g ag er ghqe wg ",
      rating: 5,
    },
  ];

  const maxDots = 5;
  const totalSlides = Math.ceil(testimonials.length / 3);
  const dotsToShow = totalSlides > maxDots ? maxDots : totalSlides;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2">
          {dots.slice(0, dotsToShow)}
        </ul>
      </div>
    ),
  };

  return (
    <section
      className={` relative min-h-screen flex items-center justify-center py-16 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
      id="testimonials"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          What People Say About Us
        </h2>

        {/* Slider */}
        <div className="max-w-6xl mx-auto px-4 p-4">
          <Slider {...settings}>
            {testimonials.map(({ id, name, photo, testimonial, rating }) => (
              <div key={id} className="px-4">
                <TestimonialCard
                  name={name}
                  photo={photo}
                  testimonial={testimonial}
                  rating={rating}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Fixed Styling for Navigation & Dots */}
      <style>
        {`
          .slick-prev, .slick-next {
            width: 40px;
            height: 40px;
            z-index: 10;
            display: flex !important;
            cursor: pointer;
          }

          .slick-prev {
            left: -50px;
          }
          .slick-next {
            right: -50px;
          }

          .slick-prev:before, .slick-next:before {
            font-size: 30px;
            opacity: 1;
            ${darkMode ? "color: #fff;" : "color: #4B5563;"}
          }

          /* Fixing Active Dot */
          .slick-dots li {
          margin-top: 10px;
            display: inline-block;
            margin: 0 5px;
          }

          .slick-dots li div {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            color: 
              ${darkMode ? "color: #fff;" : "color: #4B5563;"}
            transition: all 0.3s ease-in-out;
          }

          .slick-dots li button::before {
            ${darkMode ? "color: #fff;" : "color: #4B5563;"}    
          }
          
          .slick-dots li.slick-active button:before {
            width: 15px;
            height: 15px;
            ${darkMode ? "color: #fff;" : "color: #4B5563;"} 
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialSection;
