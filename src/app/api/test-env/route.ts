import { NextResponse } from 'next/server';

export async function GET() {
  // Check which environment variables are accessible
  const envCheck = {
    mongodb_uri: !!process.env.MONGODB_URI || !!process.env.MONGO_URI,
    emailjs_service_id: !!process.env.EMAILJS_SERVICE_ID,
    emailjs_template_id: !!process.env.EMAILJS_TEMPLATE_ID,
    emailjs_public_key: !!process.env.EMAILJS_PUBLIC_KEY,
    google_maps_api_key: !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // Show first few characters (for debugging, but don't expose full values)
    mongodb_preview: process.env.MONGODB_URI 
      ? `${process.env.MONGODB_URI.substring(0, 20)}...` 
      : process.env.MONGO_URI 
        ? `${process.env.MONGO_URI.substring(0, 20)}...`
        : 'NOT SET',
  };

  return NextResponse.json({
    message: 'Environment variable check',
    variables: envCheck,
    all_set: Object.values(envCheck).slice(0, 5).every(v => v === true),
  });
}

