// Static testimonials data - replace with your actual testimonial data

export interface StaticTestimonial {
  _id: string;
  id: string;
  name: string;
  testimonial: string;
  rating: number;
  image?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export const testimonials: StaticTestimonial[] = [
  {
    _id: "1",
    id: "1",
    name: "John Doe",
    testimonial: "Excellent work! The project was delivered on time and exceeded expectations.",
    rating: 5,
    // Image options:
    // 1. Local file in public folder: "/images/testimonials/john-doe.jpg"
    // 2. External URL: "https://example.com/avatar.jpg"
    // 3. Base64 data URI: "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
    image: "/images/testimonials/john-doe.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    id: "2",
    name: "Jane Smith",
    testimonial: "Professional service and great communication throughout the project.",
    rating: 5,
    image: "/images/testimonials/jane-smith.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    id: "3",
    name: "Mike Johnson",
    testimonial: "Highly recommend! The quality of work is outstanding.",
    rating: 5,
    image: "/images/testimonials/mike-johnson.jpg", // Replace with your image path
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more testimonials here
];

