
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://pvznskelmvmobudrodmw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2em5za2VsbXZtb2J1ZHJvZG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjU5ODUsImV4cCI6MjA4ODQwMTk4NX0.2Bk-GQn9QqBxDkEUfHuFGPXR7WOBUH7Wjy8iFZH0MHs';

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Conexión centralizada a Supabase');