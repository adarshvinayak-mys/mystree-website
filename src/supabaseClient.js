import { createClient } from '@supabase/supabase-js';

const readEnv = (...keys) => {
  for (const key of keys) {
    const raw = import.meta.env[key];
    if (typeof raw === 'string') {
      const cleaned = raw.replace(/\r/g, '').trim();
      if (cleaned) return cleaned;
    }
  }
  return '';
};

const supabaseUrl = readEnv('VITE_SUPABASE_URL');
const supabaseKey = readEnv('VITE_SUPABASE_PUBLISHABLE_KEY', 'VITE_SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase config missing. Check VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY/VITE_SUPABASE_ANON_KEY.');
}

if (typeof supabaseKey === 'string' && supabaseKey.startsWith('sb_secret_')) {
  console.warn('Supabase secret key detected in frontend env. Use a publishable/anon key instead.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
