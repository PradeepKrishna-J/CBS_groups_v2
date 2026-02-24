// Supabase Database Integration
// Best for non-technical users: Easy-to-use admin dashboard with CSV/Excel export
// Setup instructions below

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with better error handling
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials:', {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseKey
  });
}

const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveEnquiry(data: any) {
  try {
    const { fullName, phone, email, loanType, loanAmount, submittedAt } = data;
    
    console.log('Attempting to save enquiry:', { fullName, phone, loanType });
    
    const { error } = await supabase
      .from('loan_enquiries')
      .insert([
        {
          full_name: fullName,
          phone,
          email,
          loan_type: loanType,
          loan_amount: loanAmount,
          submitted_at: submittedAt
        }
      ]);
    
    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    
    console.log('Successfully saved enquiry');
    return { success: true };
  } catch (err) {
    console.error('Error in saveEnquiry:', err);
    throw err;
  }
}

// ============================================
// SETUP INSTRUCTIONS
// ============================================
// 1. Install package: npm install @supabase/supabase-js
//
// 2. Create Supabase account:
//    - Go to https://supabase.com
//    - Sign up (free)
//    - Create new project
//    - Set a database password (save it!)
//
// 3. Create the table:
//    - In Supabase dashboard, go to "SQL Editor"
//    - Run this SQL:
//
//      CREATE TABLE loan_enquiries (
//        id BIGSERIAL PRIMARY KEY,
//        full_name VARCHAR(255) NOT NULL,
//        phone VARCHAR(20) NOT NULL,
//        email VARCHAR(255),
//        loan_type VARCHAR(100) NOT NULL,
//        loan_amount VARCHAR(100),
//        submitted_at TIMESTAMP NOT NULL,
//        created_at TIMESTAMP DEFAULT NOW()
//      );
//
// 4. Get your credentials:
//    - In Supabase dashboard, go to "Settings" → "API"
//    - Copy "Project URL" (looks like: https://xxxxx.supabase.co)
//    - Copy "anon public" key (long string)
//
// 5. Add to Vercel:
//    - Go to your Vercel project
//    - Settings → Environment Variables
//    - Add: SUPABASE_URL = your project URL
//    - Add: SUPABASE_ANON_KEY = your anon public key
//    - Redeploy the project
//
// ============================================
// HOW TO VIEW & EXPORT DATA (Non-Technical Users)
// ============================================
// 1. Login to Supabase dashboard
// 2. Click "Table Editor" in left sidebar
// 3. Click "loan_enquiries" table
// 4. You'll see all form submissions in a spreadsheet-like view
// 5. To export:
//    - Click the "..." menu (top right)
//    - Choose "Export to CSV"
//    - Open in Excel or Google Sheets
// 6. You can also:
//    - Filter by date, loan type, etc.
//    - Search for specific entries
//    - Delete unwanted records
//    - Sort by any column
