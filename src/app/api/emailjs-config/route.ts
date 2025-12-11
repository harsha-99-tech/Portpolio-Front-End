import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get EmailJS configuration from environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    // Check which variables are missing for better error messages
    const missingVars = [];
    if (!serviceId) missingVars.push('EMAILJS_SERVICE_ID');
    if (!templateId) missingVars.push('EMAILJS_TEMPLATE_ID');
    if (!publicKey) missingVars.push('EMAILJS_PUBLIC_KEY');

    if (missingVars.length > 0) {
      console.error('Missing EmailJS environment variables:', missingVars);
      return NextResponse.json(
        { 
          message: `EmailJS configuration is missing. Please set the following environment variables: ${missingVars.join(', ')}`,
          missing: missingVars
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        serviceId,
        templateId,
        publicKey,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching EmailJS config:', error);
    return NextResponse.json(
      { message: 'Error fetching EmailJS configuration' },
      { status: 500 }
    );
  }
}

