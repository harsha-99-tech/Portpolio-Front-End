import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { APP, WEB, GRAPHIC, UI, OT } from '@/models/Project';
import mongoose from 'mongoose';

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
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  try {
    await connectDB();
    
    const { category, id } = await params;
    const model = getModelByCategory(category);

    if (!model) {
      return NextResponse.json(
        { message: 'Invalid collection/tab' },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const item = await model.findById(id).lean();

    if (!item) {
      return NextResponse.json(
        { message: 'Item not found' },
        { status: 404 }
      );
    }

    // Format item to include base64 image data (matching your backend format)
    const formattedItem = {
      ...item,
      _id: item._id.toString(),
      id: item._id.toString(), // Also include id for compatibility
      image:
        item.image && item.image.data
          ? `data:${item.image.contentType};base64,${item.image.data.toString('base64')}`
          : null,
    };

    return NextResponse.json(formattedItem, { status: 200 });
  } catch (error) {
    console.error('Error fetching item:', error);
    return NextResponse.json(
      { message: 'Error fetching item' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  try {
    await connectDB();
    
    const { category, id } = await params;
    const model = getModelByCategory(category);

    if (!model) {
      return NextResponse.json(
        { message: 'Invalid collection/tab' },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'Invalid ID format' },
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

    const updateData: any = {
      project,
      description,
      link,
      technologies,
      tools,
    };

    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      updateData.image = {
        data: buffer,
        contentType: imageFile.type,
      };
    }

    const updatedItem = await model.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedItem) {
      return NextResponse.json(
        { message: 'Item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedItem, { status: 200 });
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json(
      { message: 'Error updating item' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  try {
    await connectDB();
    
    const { category, id } = await params;
    const model = getModelByCategory(category);

    if (!model) {
      return NextResponse.json(
        { message: 'Invalid collection/tab' },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const deletedItem = await model.findByIdAndDelete(id);

    if (!deletedItem) {
      return NextResponse.json(
        { message: 'Item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Item deleted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting item:', error);
    return NextResponse.json(
      { message: 'Error deleting item' },
      { status: 500 }
    );
  }
}

