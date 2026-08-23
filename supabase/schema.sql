-- ==============================================================================
-- MTS Enterprises: Supabase Table Definition & Row Level Security (RLS) Policies
-- ==============================================================================

-- 1. Create the enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  service_required TEXT NOT NULL,
  location TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Public (anon and authenticated) users can ONLY insert new enquiries
CREATE POLICY "Allow public insert only"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Note on SELECT, UPDATE, DELETE:
-- By enabling RLS and not defining SELECT, UPDATE, or DELETE policies for public/anon users,
-- public users are strictly blocked from viewing, editing, or deleting any enquiry records.
-- Only authorized admins (using the service_role key or authenticated admin roles) can view/manage enquiries.
