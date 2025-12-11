import mongoose, { Schema, Document } from 'mongoose';

// Define the project schema
const projectSchema = new Schema(
  {
    project: {
      type: String,
      required: true,
      trim: true,
    },
    tools: {
      type: [String],
      required: true,
      trim: true,
    },
    technologies: {
      type: [String],
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      data: Buffer, // Store the image binary data
      contentType: String, // Store the MIME type
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create models for each collection
export const APP = mongoose.models.APP || mongoose.model('APP', projectSchema, 'APP');
export const WEB = mongoose.models.WEB || mongoose.model('WEB', projectSchema, 'WEB');
export const GRAPHIC = mongoose.models.GRAPHIC || mongoose.model('GRAPHIC', projectSchema, 'GRAPHIC');
export const UI = mongoose.models.UI || mongoose.model('UI', projectSchema, 'UI');
export const OT = mongoose.models.OT || mongoose.model('OT', projectSchema, 'OT');
