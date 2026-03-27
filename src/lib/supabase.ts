import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Check if we're in a build/SSG environment
const isBuildTime = typeof window === 'undefined' && process.env.NODE_ENV === 'production';

// Lazy-initialized Supabase client to avoid build-time errors
let _supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (!_supabase) {
    if (!supabaseUrl || !supabasePublishableKey) {
      // During build time, return a mock client to allow SSG to complete
      if (isBuildTime) {
        console.warn('Supabase environment variables missing during build - using mock client');
        // Return a mock client that throws meaningful errors if actually used during build
        return createMockClient();
      }
      throw new Error(
        'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'
      );
    }
    _supabase = createClient(supabaseUrl, supabasePublishableKey);
  }
  return _supabase;
}

// Mock client for build-time that throws errors if actually used
function createMockClient(): SupabaseClient {
  const handler = {
    get() {
      return () => ({
        data: null,
        error: new Error('Supabase not configured - this is expected during build'),
      });
    },
  };
  return new Proxy({} as SupabaseClient, handler);
}

// Export a proxy that lazily initializes the client
export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    const client = getSupabase();
    const value = client[prop as keyof SupabaseClient];
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
});

export type ContactSubmission = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string | null;
  project_details?: string | null;
  status?: string;
};