import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, MousePointerClick, TrendingUp, Users } from 'lucide-react';

interface Stats {
  uniqueVisitors: number;
  totalPageViews: number;
  totalClicks: number;
  conversionRate: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({
    uniqueVisitors: 0,
    totalPageViews: 0,
    totalClicks: 0,
    conversionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get all events
        const { data: events, error } = await supabase
          .from('visitor_events')
          .select('visitor_id, event_type');

        if (error) {
          console.error('Error fetching stats:', error);
          return;
        }

        if (events) {
          const pageViews = events.filter(e => e.event_type === 'page_view');
          const clicks = events.filter(e => e.event_type === 'cta_click');
          
          const uniqueVisitorIds = new Set(events.map(e => e.visitor_id));
          const uniqueClickerIds = new Set(clicks.map(e => e.visitor_id));

          const uniqueVisitors = uniqueVisitorIds.size;
          const totalPageViews = pageViews.length;
          const totalClicks = clicks.length;
          const conversionRate = uniqueVisitors > 0 
            ? (uniqueClickerIds.size / uniqueVisitors) * 100 
            : 0;

          setStats({
            uniqueVisitors,
            totalPageViews,
            totalClicks,
            conversionRate,
          });
        }
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Unique Visitors',
      value: stats.uniqueVisitors,
      icon: Users,
      description: 'Total unique visitors',
    },
    {
      title: 'Page Views',
      value: stats.totalPageViews,
      icon: Eye,
      description: 'Total page views',
    },
    {
      title: 'CTA Clicks',
      value: stats.totalClicks,
      icon: MousePointerClick,
      description: 'Total button clicks',
    },
    {
      title: 'Conversion Rate',
      value: `${stats.conversionRate.toFixed(1)}%`,
      icon: TrendingUp,
      description: 'Visitors who clicked',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading stats...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat) => (
            <Card key={stat.title} className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <a 
            href="/" 
            className="text-primary hover:underline text-sm"
          >
            ← Back to main page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
