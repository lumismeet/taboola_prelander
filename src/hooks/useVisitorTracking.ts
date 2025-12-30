import { useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const VISITOR_ID_KEY = 'visitor_id';

const getOrCreateVisitorId = (): string => {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  return visitorId;
};

export const useVisitorTracking = () => {
  const visitorId = getOrCreateVisitorId();

  const trackEvent = useCallback(async (eventType: 'page_view' | 'cta_click') => {
    try {
      const { error } = await supabase.from('visitor_events').insert({
        visitor_id: visitorId,
        event_type: eventType,
        page_url: window.location.href,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
      });

      if (error) {
        console.error('Error tracking event:', error);
      }
    } catch (err) {
      console.error('Failed to track event:', err);
    }
  }, [visitorId]);

  const trackPageView = useCallback(() => {
    trackEvent('page_view');
  }, [trackEvent]);

  const trackCtaClick = useCallback(() => {
    trackEvent('cta_click');
  }, [trackEvent]);

  // Track page view on mount
  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  return { trackCtaClick, trackPageView, visitorId };
};
