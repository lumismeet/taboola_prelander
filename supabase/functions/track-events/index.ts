// supabase/functions/track-event/index.ts
// @ts-ignore
import { serve } from "https://deno.land/std/http/server.ts";
// @ts-ignore
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabase = createClient(
    // @ts-ignore
  Deno.env.get("SUPABASE_URL")!,
  // @ts-ignore
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // or restrict later
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// @ts-ignore
serve(async (req) => {
  // Handle preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { visitor_id, event_type, page_url, referrer, user_agent } =
      await req.json();

    if (!visitor_id || !event_type || !page_url) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || null;

    const { error } = await supabase.from("visitor_events").insert({
      visitor_id,
      event_type,
      page_url,
      referrer: referrer || null,
      user_agent,
      ip_address: ip,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: corsHeaders }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: corsHeaders }
    );
  }
});
