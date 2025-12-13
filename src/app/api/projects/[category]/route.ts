import { NextResponse } from 'next/server';
import { projectsByCategory } from '@/data/projects';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    const projects = projectsByCategory[category] || [];

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        message: 'Error fetching projects',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  // Static data mode - POST not supported
  return NextResponse.json(
    { message: 'POST method not supported. Use static data files instead.' },
    { status: 405 }
  );
}
