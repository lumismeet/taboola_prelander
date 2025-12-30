-- Create table for tracking anonymous visitors and their actions
CREATE TABLE public.visitor_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('page_view', 'cta_click')),
  page_url TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public inserts (anonymous tracking)
ALTER TABLE public.visitor_events ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert events (anonymous tracking)
CREATE POLICY "Allow anonymous event inserts"
ON public.visitor_events
FOR INSERT
WITH CHECK (true);

-- Allow anyone to read events (for dashboard - you can restrict this later)
CREATE POLICY "Allow public read for dashboard"
ON public.visitor_events
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_visitor_events_visitor_id ON public.visitor_events(visitor_id);
CREATE INDEX idx_visitor_events_event_type ON public.visitor_events(event_type);
CREATE INDEX idx_visitor_events_created_at ON public.visitor_events(created_at);