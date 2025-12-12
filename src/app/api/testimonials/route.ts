import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';

export async function GET() {
  try {
    await connectDB();
    
    const testimonials = await Testimonial.find().sort({ createdAt: -1 }).lean();

    // Format testimonials to include base64 image data (matching your backend format)
    const formattedTestimonials = testimonials.map((item: any) => ({
      ...item,
      _id: item._id.toString(),
      id: item._id.toString(), // Also include id for compatibility
      image:
        item.image && item.image.data
          ? `data:${item.image.contentType};base64,${item.image.data.toString('base64')}`
          : null,
    }));

    return NextResponse.json(formattedTestimonials, { status: 200 });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        message: 'Error fetching testimonials',
        error: errorMessage,
        hasMongoUri: !!(process.env.MONGODB_URI || process.env.MONGO_URI)
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const testimonial = formData.get('testimonial') as string;
    const rating = parseInt(formData.get('rating') as string || '5');
    const imageFile = formData.get('image') as File | null;

    let image = null;
    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      image = {
        data: buffer,
        contentType: imageFile.type,
      };
    }

    const newTestimonial = new Testimonial({
      name,
      testimonial,
      rating,
      image,
    });

    const savedTestimonial = await newTestimonial.save();

    return NextResponse.json(savedTestimonial, { status: 201 });
  } catch (error: any) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { message: 'Error creating testimonial' },
      { status: 400 }
    );
  }
}

