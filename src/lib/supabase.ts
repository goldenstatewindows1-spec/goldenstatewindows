import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  // Don't crash the whole app if env is missing — the contact form checks for
  // `supabase` and shows a graceful error instead.
  console.warn(
    "Supabase environment variables are not set. Copy .env.example to .env.local " +
      "and fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
  );
}

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export type LeadInsert = {
  name: string;
  email: string;
  phone: string;
  city?: string | null;
  project_type?: string | null;
  message?: string | null;
  source?: string;
};
