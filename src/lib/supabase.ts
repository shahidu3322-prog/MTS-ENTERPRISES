import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://gltwaczzqossrasgwktl.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_iUBXYfdi0Fk5_7pRg8fhwg_OP9WwxC2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface EnquiryRecord {
  id?: string;
  full_name: string;
  mobile_number: string;
  service_required: string;
  location?: string | null;
  message?: string | null;
  created_at?: string;
}
