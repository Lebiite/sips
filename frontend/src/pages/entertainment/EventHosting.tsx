// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { Calendar } from 'lucide-react';
// import { format } from 'date-fns';

// export default function EventHosting() {
//   const { data: events, isLoading } = useQuery({
//     queryKey: ['events'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/api/events'); 
//       if (!res.ok) throw new Error("Failed to fetch events");
//       return res.json();
//     },
//   });

//   return (
//     <Layout>
//       <title>Event Hosting - The Seaside Sips</title>
//       <meta
//         name="description"
//         content="Host your special events at The Seaside Sips beachfront venue."
//       />

//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl">

//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//               <Calendar className="h-8 w-8 text-primary" />
//             </div>
//             <h1 className="text-4xl font-bold">Event Hosting</h1>
//           </div>

//           <div className="mb-8">
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               The Seaside Sips is the perfect venue for your special occasions...
//             </p>
//           </div>

//           <h2 className="text-2xl font-bold mb-4">Event Types We Host</h2>

//           <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
//             <li>Weddings and receptions</li>
//             <li>Birthday parties</li>
//             <li>Corporate events and team building</li>
//             <li>Private parties and celebrations</li>
//             <li>Beach bonfires</li>
//             <li>Anniversary celebrations</li>
//           </ul>

//           {/* EVENTS FROM MONGODB */}
//           {!isLoading && events && events.length > 0 && (
//             <>
//               <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {events.map((event: any) => (
//                   <Card key={event._id}>
//                     {event.image_url && (
//                       <img
//                         src={event.image_url}
//                         alt={event.title}
//                         className="w-full h-48 object-cover rounded-t-lg"
//                       />
//                     )}
//                     <CardHeader>
//                       <CardTitle>{event.title}</CardTitle>
//                       <p className="text-sm text-muted-foreground">
//                         {format(new Date(event.event_date), 'PPP')}
//                       </p>
//                     </CardHeader>

//                     <CardContent>
//                       {event.description && (
//                         <p className="text-muted-foreground mb-2">
//                           {event.description}
//                         </p>
//                       )}

//                       {event.location && (
//                         <p className="text-sm">
//                           <span className="font-medium">Location:</span>{' '}
//                           {event.location}
//                         </p>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </>
//           )}

//           <Card className="bg-primary/5 border-primary/20">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold mb-4">Plan Your Event</h3>
//               <p className="text-muted-foreground mb-4">
//                 Contact our events team to discuss your requirements...
//               </p>
//               <Button asChild size="lg">
//                 <Link to="/contact">Contact Event Planning Team</Link>
//               </Button>
//             </CardContent>
//           </Card>

//         </div>
//       </section>
//     </Layout>
//   );
// }



import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

export default function EventHosting() {
  const { data: events, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/events'); 
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json();
    },
  });

  return (
    <Layout>
      <title>Event Hosting - The Seaside Sips</title>
      <meta
        name="description"
        content="Host your special events at The Seaside Sips beachfront venue."
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Event Hosting</h1>
          </div>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Seaside Sips is the perfect venue for your special occasions...
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Event Types We Host</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
            <li>Weddings and receptions</li>
            <li>Birthday parties</li>
            <li>Corporate events and team building</li>
            <li>Private parties and celebrations</li>
            <li>Beach bonfires</li>
            <li>Anniversary celebrations</li>
          </ul>

          {/* EVENTS FROM MONGODB */}
          {!isLoading && events && events.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {events.map((event: any) => (
                  <Card key={event._id}>
                    {event.image_url && (
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    )}
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(event.event_date), 'PPP')}
                      </p>
                    </CardHeader>

                    <CardContent>
                      {event.description && (
                        <p className="text-muted-foreground mb-2">
                          {event.description}
                        </p>
                      )}

                      {event.location && (
                        <p className="text-sm">
                          <span className="font-medium">Location:</span>{' '}
                          {event.location}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Plan Your Event</h3>
              <p className="text-muted-foreground mb-4">
                Contact our events team to discuss your requirements...
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Event Planning Team</Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>
    </Layout>
  );
}
