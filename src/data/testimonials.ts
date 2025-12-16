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
   
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "2",
    id: "2",
    name: "Jane Smith",
    testimonial: "Professional service and great communication throughout the project.",
    rating: 5,
    
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _id: "3",
    id: "3",
    name: "Mike Johnson",
    testimonial: "Highly recommend! The quality of work is outstanding.",
    rating: 5,
    
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more testimonials here
];

