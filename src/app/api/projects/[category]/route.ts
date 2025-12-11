import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { APP, WEB, GRAPHIC, UI, OT } from '@/models/Project';

/**
 * Maps category names to their respective Mongoose models.
 */
const getModelByCategory = (category: string) => {
  switch (category) {
    case 'app':
      return APP;
    case 'web':
      return WEB;
    case 'graphic':
      return GRAPHIC;
    case 'ui':
      return UI;
    case 'ot':
      return OT;
    default:
      return null;
  }
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    await connectDB();
    
    const { category } = await params;
    const model = getModelByCategory(category);

    if (!model) {
      return NextResponse.json(
        { message: 'Invalid collection/tab' },
        { status: 400 }
      );
    }

    const items = await model.find().sort({ createdAt: -1 }).lean();

    // Format items to include base64 image data (matching your backend format)
    const formattedItems = items.map((item: any) => ({
      ...item,
      _id: item._id.toString(),
      id: item._id.toString(), // Also include id for compatibility
      image:
        item.image && item.image.data
          ? `data:${item.image.contentType};base64,${item.image.data.toString('base64')}`
          : null,
    }));

    return NextResponse.json(formattedItems, { status: 200 });
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { message: 'Error fetching items' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    await connectDB();
    
    const { category } = await params;
    const model = getModelByCategory(category);

    if (!model) {
      return NextResponse.json(
        { message: 'Invalid collection/tab' },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const project = formData.get('project') as string;
    const description = formData.get('description') as string;
    const link = formData.get('link') as string;
    const technologies = JSON.parse(formData.get('technologies') as string || '[]');
    const tools = JSON.parse(formData.get('tools') as string || '[]');
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

    const newItem = new model({
      project,
      description,
      link,
      technologies,
      tools,
      image,
    });

    const savedItem = await newItem.save();

    return NextResponse.json(savedItem, { status: 201 });
  } catch (error: any) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { message: 'Error creating item' },
      { status: 400 }
    );
  }
}
