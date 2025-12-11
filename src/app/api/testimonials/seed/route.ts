import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';

const seedTestimonials = [
  {
    name: "John Doe",
    testimonial: "Harsha is an exceptional developer who delivered exactly what we needed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    testimonial: "Working with Harsha was a pleasure. The attention to detail and professionalism is outstanding.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    testimonial: "Great communication and timely delivery. The project exceeded our expectations.",
    rating: 4,
  },
];

export async function POST() {
  try {
    await connectDB();
    
    // Clear existing testimonials (optional - remove if you want to keep existing data)
    // await Testimonial.deleteMany({});
    
    // Insert seed testimonials
    const testimonials = await Testimonial.insertMany(seedTestimonials);

    return NextResponse.json(
      { 
        success: true, 
        message: `Successfully seeded ${testimonials.length} testimonials`,
        data: testimonials 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error seeding testimonials:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to seed testimonials' },
      { status: 500 }
    );
  }
}

