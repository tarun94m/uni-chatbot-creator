// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dblcdmuvbgluslpjdpkk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibGNkbXV2YmdsdXNscGpkcGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MDA4MTYsImV4cCI6MjA1MDA3NjgxNn0.S8KkW2TbdHH65ik-50xnH3P69yHAQ8YjNAChcZ0ZocA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);