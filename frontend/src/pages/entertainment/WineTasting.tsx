import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Wine } from 'lucide-react';
import { format } from 'date-fns';

// ---------- EVENT IMAGES ----------
import drink1 from '@/assets/drinks/drink1.png';
import drink2 from '@/assets/drinks/drink2.png';
import drink3 from '@/assets/drinks/drink3.png';
import drink4 from '@/assets/drinks/drink4.png';

export default function WineTasting() {
  const { data: events, isLoading } = useQuery({
    queryKey: ['wine-tasting'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/wine-tasting-events`);
      if (!res.ok) throw new Error("Failed to fetch wine tasting events");
      return res.json();
    },
  });

  const eventImages = [drink1, drink2, drink3, drink4];

  return (
    <Layout>
      <title>Wine Tasting - The Seaside Sips</title>
      <meta
        name="description"
        content="Join our monthly wine tasting events at The Seaside Sips and explore fine wines."
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Wine className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Monthly Wine Tasting</h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Join us for our exclusive monthly wine tasting events. Discover new flavors, learn about wine regions,
            and enjoy an evening of sophistication by the sea. Each event features carefully selected wines paired
            with delicious appetizers.
          </p>

          {/* Upcoming Events */}
          <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

          {isLoading ? (
            <p>Loading events...</p>
          ) : events && events.length > 0 ? (
            <div className="space-y-6 mb-8">
              {events.map((event, idx) => (
                <Card key={event._id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <p className="text-muted-foreground mt-1">
                          {format(new Date(event.event_date), 'PPP p')}
                        </p>
                      </div>
                      {event.price && (
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          ${Number(event.price).toFixed(2)}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Event Image */}
                    <div className="w-full h-64 overflow-hidden rounded-md">
                      <img
                        src={eventImages[idx % eventImages.length]}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {event.description && (
                      <p className="text-muted-foreground">{event.description}</p>
                    )}

                    {event.wines_featured && event.wines_featured.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Featured Wines:</h4>
                        <ul className="list-disc pl-6 space-y-1">
                          {event.wines_featured.map((wine, index) => (
                            <li key={index} className="text-muted-foreground">{wine}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.max_participants && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Limited to: </span>
                        {event.max_participants} participants
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground mb-8">
              No upcoming wine tasting events scheduled at the moment.
            </p>
          )}

          {/* CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Reserve Your Spot</h3>
              <p className="text-muted-foreground mb-4">
                Wine tasting events fill up quickly! Contact us to reserve your spot for the next event or learn
                more about our wine selection.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us to Reserve</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
