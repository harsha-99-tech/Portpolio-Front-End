import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  testimonial: string;
  rating: number;
  image?: {
    data: Buffer;
    contentType: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    testimonial: {
      type: String,
      required: [true, 'Testimonial text is required'],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 1,
      max: 5,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', testimonialSchema);

export default Testimonial;

