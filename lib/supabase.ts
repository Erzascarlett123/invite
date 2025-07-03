// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bngomocqtgeqyozwtjld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuZ29tb2NxdGdlcXlvend0amxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NzIyMjYsImV4cCI6MjA2NzA0ODIyNn0.MeJ0fPq8rkNthd1oA_QBwMPNZGTfQWUXvLZx_g8aNK4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
