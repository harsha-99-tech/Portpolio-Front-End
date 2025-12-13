import { NextResponse } from 'next/server';
import { testimonials } from '@/data/testimonials';

export async function GET() {
  try {
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        message: 'Error fetching testimonials',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  // Static data mode - POST not supported
  return NextResponse.json(
    { message: 'POST method not supported. Use static data files instead.' },
    { status: 405 }
  );
}

