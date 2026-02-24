import type { VercelRequest, VercelResponse } from '@vercel/node';
import { saveEnquiry } from './db.js';

// This is a Vercel serverless function
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Received enquiry submission');
    console.log('Environment check:', {
      hasSupabaseUrl: !!process.env.SUPABASE_URL,
      hasSupabaseKey: !!process.env.SUPABASE_ANON_KEY
    });

    const { fullName, phone, email, loanType, loanAmount, submittedAt } = req.body;

    // Validate required fields
    if (!fullName || !phone || !loanType) {
      return res.status(400).json({ 
        message: 'Missing required fields: fullName, phone, and loanType are required' 
      });
    }

    // Prepare enquiry data
    const enquiryData = {
      fullName,
      phone,
      email: email || '',
      loanType,
      loanAmount: loanAmount || '',
      submittedAt: submittedAt || new Date().toISOString()
    };

    console.log('Saving enquiry...');
    
    // Save to database
    await saveEnquiry(enquiryData);

    console.log('Enquiry saved successfully');

    // Return success response
    return res.status(200).json({ 
      message: 'Enquiry submitted successfully',
      success: true 
    });

  } catch (error: any) {
    console.error('Error processing enquiry:', error);
    console.error('Error details:', {
      message: error?.message,
      stack: error?.stack
    });
    return res.status(500).json({ 
      message: error?.message || 'Internal server error',
      success: false 
    });
  }
}
