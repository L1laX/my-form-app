import { createClient } from '@supabase/supabase-js';

const supabaseURL = 'https://varalcapsnvwuqusbaab.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseURL, supabaseKey);
