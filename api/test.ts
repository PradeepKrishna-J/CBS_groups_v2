import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_ANON_KEY || '';
    
    // Check if env vars exist
    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ 
        error: 'Missing environment variables',
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
        urlStart: supabaseUrl?.substring(0, 20)
      });
    }
    
    // Try to create client
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Try a simple query
    const { data, error } = await supabase
      .from('loan_enquiries')
      .select('count')
      .limit(1);
    
    if (error) {
      return res.status(500).json({
        error: 'Supabase query failed',
        details: error.message,
        hasUrl: true,
        hasKey: true
      });
    }
    
    return res.status(200).json({ 
      message: 'Everything working!',
      hasUrl: true,
      hasKey: true,
      supabaseConnected: true
    });
  } catch (error: any) {
    return res.status(500).json({ 
      error: 'Test failed',
      message: error?.message,
      stack: error?.stack?.substring(0, 500)
    });
  }
}
