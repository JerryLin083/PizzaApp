import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gvaxsgcsyzfqoxwnlrak.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2YXhzZ2NzeXpmcW94d25scmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzAxNjQsImV4cCI6MjAxNDg0NjE2NH0.JdC6hk5U-fAui2NfI5New_plqogKpYTSpo6ZJjRS2u8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
