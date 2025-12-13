import { NextResponse } from 'next/server';
import { projectsByCategory } from '@/data/projects';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  try {
    const { category, id } = await params;
    const projects = projectsByCategory[category] || [];
    const project = projects.find((p) => p._id === id || p.id === id);

    if (!project) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { message: 'Error fetching project' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  // Static data mode - PUT not supported
  return NextResponse.json(
    { message: 'PUT method not supported. Use static data files instead.' },
    { status: 405 }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  // Static data mode - DELETE not supported
  return NextResponse.json(
    { message: 'DELETE method not supported. Use static data files instead.' },
    { status: 405 }
  );
}

