import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  console.log("Testing insert...");
  const { data, error } = await supabase
    .from('form_submissions')
    .insert({ source: 'contact-page-test-js', data: { test: "data" } });
    
  console.log("Data:", data);
  console.log("Error:", error);
}

test();
