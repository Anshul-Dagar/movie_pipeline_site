import { createClient } from '@supabase/supabase-js';

const options = {
    db: { schema: 'movies' }
  };

export default createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    options
);