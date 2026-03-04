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

if (typeof supabaseKey === 'string' && supabaseKey.startsWith('sb_secret_')) {
  console.warn('Supabase secret key detected in frontend env. Use a publishable/anon key instead.');
}

const missingConfigError = new Error(
  'Supabase config missing. Check VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY/VITE_SUPABASE_ANON_KEY.'
);

export const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : {
        from() {
          return {
            insert: async () => ({ error: missingConfigError }),
          };
        },
      };

if (!supabaseUrl || !supabaseKey) {
  console.error(missingConfigError.message);
}
