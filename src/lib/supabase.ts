import { createClient } from '@supabase/supabase-js';

// These should be replaced with your actual Supabase URL and Anon Key
// You can set them in a .env file as VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-please-set-env-vars.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
