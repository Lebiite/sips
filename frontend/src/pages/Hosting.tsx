// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { PartyPopper } from 'lucide-react';

// export default function EventHosting() {
//   return (
//     <Layout>
//       <title>Event Hosting - The Seaside Sips</title>
//       <meta
//         name="description"
//         content="Host your special events at The Seaside Sips — weddings, corporate events, birthdays, and more in a stunning beachfront venue."
//       />

//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl">
          
//           {/* Header */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//               <PartyPopper className="h-8 w-8 text-primary" />
//             </div>
//             <h1 className="text-4xl font-bold">Event Hosting</h1>
//           </div>

//           <div className="prose prose-lg max-w-none">
            
//             {/* Intro */}
//             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//               Celebrate your most important moments with us at The Seaside Sips! 
//               Our beachfront venue provides the perfect backdrop for weddings, corporate events, 
//               birthday parties, private dinners, and more. Whether you're planning an intimate gathering 
//               or a grand celebration, our team is ready to bring your vision to life.
//             </p>

//             {/* Section: Why Choose Us */}
//             <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Our Venue?</h2>
//             <p className="text-muted-foreground mb-4">
//               Located directly on the Mtwapa coastline, our venue blends natural beauty with elegant comfort. 
//               We take pride in offering flexible event setups, professional coordination, and stunning ocean views 
//               that leave lasting impressions on your guests.
//             </p>

//             <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
//               <li>Beachfront location with spectacular ocean views</li>
//               <li>Indoor and outdoor event spaces</li>
//               <li>Full event planning and coordination</li>
//               <li>Catering options including seafood, Swahili meals, and international dishes</li>
//               <li>Custom décor and theme arrangements</li>
//               <li>Professional sound and entertainment options</li>
//             </ul>

//             {/* Section: Types of Events */}
//             <h2 className="text-2xl font-bold mt-8 mb-4">Events We Host</h2>
//             <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
//               <li>Weddings & receptions</li>
//               <li>Corporate events & team building</li>
//               <li>Birthday celebrations</li>
//               <li>Engagements & anniversaries</li>
//               <li>Private dinners & parties</li>
//               <li>Charity events & community gatherings</li>
//             </ul>

//             {/* CTA Card */}
//             <Card className="bg-primary/5 border-primary/20 mt-8">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-4">Ready to Host Your Event?</h3>
//                 <p className="text-muted-foreground mb-4">
//                   Contact our event planning team for a customized quote or to schedule a walkthrough of our venue.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button asChild size="lg">
//                     <Link to="/contact">Contact Event Team</Link>
//                   </Button>
//                   <Button asChild size="lg" variant="outline">
//                     <Link to="/gallery">View Event Gallery</Link>
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }




// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Calendar } from 'lucide-react';
// import { format } from 'date-fns';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';

// export default function EventHosting() {
//   const { data: events, isLoading } = useQuery({
//     queryKey: ['events'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/api/events');
//       if (!res.ok) throw new Error('Failed to fetch events');
//       return res.json();
//     },
//   });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     date: '',
//     message: '',
//   });

//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     console.log('Submitted:', formData);
//     // call backend here if needed
//   };

//   return (
//     <Layout>
//       <section className="relative py-20 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="relative container mx-auto max-w-5xl text-white">
//           <div className="flex justify-between items-center mb-10">
//             <h1 className="text-5xl font-bold drop-shadow-lg">Host Your Event</h1>

//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button size="lg" variant="secondary" className="font-semibold shadow-lg">
//                   Book Event
//                 </Button>
//               </DialogTrigger>

//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Book an Event</DialogTitle>
//                 </DialogHeader>

//                 <form onSubmit={handleSubmit} className="space-y-4 pt-2">
//                   <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//                   <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                   <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
//                   <Input name="eventType" placeholder="Event Type (Wedding, Birthday, etc.)" value={formData.eventType} onChange={handleChange} required />
//                   <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                   <Textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange} />

//                   <Button type="submit" className="w-full" size="lg">Submit Booking</Button>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>

//           <p className="text-lg max-w-2xl leading-relaxed">
//             The Seaside Sips is the perfect beachfront venue for weddings, birthdays,
//             corporate gatherings, celebrations, and more.
//           </p>
//         </div>
//       </section>

//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
//             <Calendar className="h-7 w-7 text-primary" /> Upcoming Events
//           </h2>

//           {!isLoading && events && events.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {events.map((event: any) => (
//                 <Card key={event._id}>
//                   {event.image_url && (
//                     <img src={event.image_url} className="w-full h-48 object-cover rounded-t-lg" />
//                   )}

//                   <CardHeader>
//                     <CardTitle>{event.title}</CardTitle>
//                     <p className="text-sm text-muted-foreground">
//                       {format(new Date(event.event_date), 'PPP')}
//                     </p>
//                   </CardHeader>

//                   <CardContent>
//                     <p className="text-muted-foreground mb-2">{event.description}</p>
//                     <p className="text-sm"><span className="font-medium">Location:</span> {event.location}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <p className="text-muted-foreground">No upcoming events found.</p>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// }




// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { Calendar, Gift, Music, Users, Briefcase, Cake, Fire, Heart } from 'lucide-react';
// import { format } from 'date-fns';
// import { useState } from 'react';

// // ---------- EVENT TYPES (like your food categories) ----------
// const eventTypes = [
//   { icon: Gift, title: 'Weddings', desc: 'Ceremonies, receptions & bespoke packages', slug: 'weddings' },
//   { icon: Cake, title: 'Birthdays', desc: 'Kids, adults & milestone celebrations', slug: 'birthdays' },
//   { icon: Briefcase, title: 'Corporate', desc: 'Meetings, team building & launches', slug: 'corporate' },
//   { icon: Music, title: 'Concerts & Live', desc: 'Bands, DJs & live entertainment', slug: 'concerts' },
//   { icon: Fire, title: 'Beach Bonfires', desc: 'Evening bonfires with catering & music', slug: 'bonfires' },
//   { icon: Users, title: 'Private Parties', desc: 'Intimate gatherings & private hire', slug: 'private-parties' },
//   { icon: Heart, title: 'Anniversaries', desc: 'Romantic setups & anniversary dinners', slug: 'anniversaries' },
//   { icon: Calendar, title: 'Workshops & Classes', desc: 'Cooking, mixology & team workshops', slug: 'workshops' },
// ];

// type EventItem = {
//   _id: string;
//   title: string;
//   description?: string;
//   event_date: string;
//   image_url?: string;
//   location?: string;
// };

// export default function EventHosting() {
//   const { data: events, isLoading } = useQuery<EventItem[]>({
//     queryKey: ['events'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/api/events');
//       if (!res.ok) throw new Error('Failed to fetch events');
//       return res.json();
//     },
//   });

//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     date: '',
//     guests: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // basic local validation
//     if (!formData.name || !formData.email || !formData.date) {
//       alert('Please fill in name, email and date');
//       return;
//     }

//     try {
//       // POST to backend booking endpoint (adjust url as needed)
//       await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       setOpen(false);
//       setFormData({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '' });
//       alert('Booking request submitted — we will contact you soon!');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to submit booking.');
//     }
//   };

//   return (
//     <Layout>
//       {/* SEO */}
//       <title>Event Hosting - The Seaside Sips</title>
//       <meta name="description" content="Host your special events at The Seaside Sips beachfront venue." />

//       {/* Hero Section (keeps event types visible like your food hero) */}
//       <section className="relative h-[560px] flex items-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60"></div>
//         <div className="absolute inset-0 bg-[url('/images/event-hero.jpg')] bg-cover bg-center opacity-70"></div>

//         <div className="relative z-10 container mx-auto max-w-6xl px-6 text-white">
//           <div className="flex items-start justify-between gap-6 pt-12">
//             <div className="max-w-2xl">
//               <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">Host Unforgettable Events by the Sea</h1>
//               <p className="text-lg md:text-xl text-white/90 mb-6">Weddings, birthdays, corporate gatherings and more — we design experiences that your guests will remember.</p>

//               <div className="flex gap-4 flex-wrap">
//                 <Button asChild size="lg" className="shadow-lg">
//                   <Link to="#events">View Events</Link>
//                 </Button>

//                 <Dialog open={open} onOpenChange={setOpen}>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="secondary" className="bg-white/10 text-white border-white/20">Book Event</Button>
//                   </DialogTrigger>

//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>

//             {/* Quick event type highlights on the right side of hero (keeps user informed) */}
//             <div className="hidden lg:block w-96">
//               <div className="bg-white/6 backdrop-blur-sm rounded-2xl p-6">
//                 <h3 className="text-xl font-semibold mb-4">Event Types</h3>
//                 <div className="space-y-3">
//                   {eventTypes.slice(0, 6).map((et) => (
//                     <div key={et.slug} className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
//                         <et.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <div className="font-medium">{et.title}</div>
//                         <div className="text-sm text-muted-foreground">{et.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Welcome / Description */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Host With Us?</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">Oceanfront views, tailored packages, experienced event coordinators and flexible catering options — everything you need for a flawless event.</p>
//         </div>
//       </section>

//       {/* Event Types Grid (analogous to your food categories grid) */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Events We Host</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {eventTypes.map((item, index) => (
//               <Link key={index} to={`#${item.slug}`} className="block">
//                 <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <item.icon className="h-8 w-8 text-primary" />
//                     </div>
//                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">{item.desc}</p>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events pulled from MongoDB */}
//       <section id="events" className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Calendar className="w-6 h-6 text-primary" /> Upcoming Events</h2>

//           {!isLoading && events && events.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {events.map((event) => (
//                 <Card key={event._id}>
//                   {event.image_url && (
//                     <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
//                   )}

//                   <CardHeader>
//                     <CardTitle>{event.title}</CardTitle>
//                     <p className="text-sm text-muted-foreground">{format(new Date(event.event_date), 'PPP')}</p>
//                   </CardHeader>

//                   <CardContent>
//                     {event.description && <p className="text-muted-foreground mb-2">{event.description}</p>}
//                     {event.location && (
//                       <p className="text-sm"><span className="font-medium">Location:</span> {event.location}</p>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <p className="text-muted-foreground">No upcoming events found.</p>
//           )}
//         </div>
//       </section>

//       {/* CTA / Plan your event */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <Card className="bg-primary/5 border-primary/20">
//             <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Plan Your Event</h3>
//                 <p className="text-muted-foreground mb-2">Contact our events team to discuss your requirements and get a tailored quote.</p>
//               </div>

//               <div className="flex gap-3">
//                 <Button asChild size="lg">
//                   <Link to="/contact">Contact Event Planning Team</Link>
//                 </Button>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="outline">Book Event</Button>
//                   </DialogTrigger>

//                   {/* Reuse booking form in modal */}
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </Layout>
//   );
// }



// // nice but no logic
// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { Calendar, Gift, Music, Users, Briefcase, Cake, Flame, Heart } from 'lucide-react';
// import { format } from 'date-fns';
// import { useState } from 'react';

// // ---------- EVENT TYPES (like your food categories) ----------
// const eventTypes = [
//   { icon: Gift, title: 'Weddings', desc: 'Ceremonies, receptions & bespoke packages', slug: 'weddings' },
//   { icon: Cake, title: 'Birthdays', desc: 'Kids, adults & milestone celebrations', slug: 'birthdays' },
//   { icon: Briefcase, title: 'Corporate', desc: 'Meetings, team building & launches', slug: 'corporate' },
//   { icon: Music, title: 'Concerts & Live', desc: 'Bands, DJs & live entertainment', slug: 'concerts' },
//   { icon: Flame, title: 'Beach Bonfires', desc: 'Evening bonfires with catering & music', slug: 'bonfires' },
//   { icon: Users, title: 'Private Parties', desc: 'Intimate gatherings & private hire', slug: 'private-parties' },
//   { icon: Heart, title: 'Anniversaries', desc: 'Romantic setups & anniversary dinners', slug: 'anniversaries' },
//   { icon: Calendar, title: 'Workshops & Classes', desc: 'Cooking, mixology & team workshops', slug: 'workshops' },
// ];

// type EventItem = {
//   _id: string;
//   title: string;
//   description?: string;
//   event_date: string;
//   image_url?: string;
//   location?: string;
// };

// export default function EventHosting() {
//   const { data: events, isLoading } = useQuery<EventItem[]>({
//     queryKey: ['events'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/api/events');
//       if (!res.ok) throw new Error('Failed to fetch events');
//       return res.json();
//     },
//   });

//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     date: '',
//     guests: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // basic local validation
//     if (!formData.name || !formData.email || !formData.date) {
//       alert('Please fill in name, email and date');
//       return;
//     }

//     try {
//       // POST to backend booking endpoint (adjust url as needed)
//       await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       setOpen(false);
//       setFormData({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '' });
//       alert('Booking request submitted — we will contact you soon!');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to submit booking.');
//     }
//   };

//   return (
//     <Layout>
//       {/* SEO */}
//       <title>Event Hosting - The Seaside Sips</title>
//       <meta name="description" content="Host your special events at The Seaside Sips beachfront venue." />

//       {/* Hero Section (keeps event types visible like your food hero) */}
//       <section className="relative h-[560px] flex items-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60"></div>
//         <div className="absolute inset-0 bg-[url('/images/birthday.jpg')] bg-cover bg-center opacity-70"></div>

//         <div className="relative z-10 container mx-auto max-w-6xl px-6 text-white">
//           <div className="flex items-start justify-between gap-6 pt-12">
//             <div className="max-w-2xl">
//               <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">Host Unforgettable Events by the Sea</h1>
//               <p className="text-lg md:text-xl text-white/90 mb-6">Weddings, birthdays, corporate gatherings and more — we design experiences that your guests will remember.</p>

//               <div className="flex gap-4 flex-wrap">
//                 <Button asChild size="lg" className="shadow-lg">
//                   <Link to="#events">View Events</Link>
//                 </Button>

//                 <Dialog open={open} onOpenChange={setOpen}>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="secondary" className="bg-white/10 text-white border-white/20">Book Event</Button>
//                   </DialogTrigger>

//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>

//             {/* Quick event type highlights on the right side of hero (keeps user informed) */}
//             <div className="hidden lg:block w-96">
//               <div className="bg-white/6 backdrop-blur-sm rounded-2xl p-6">
//                 <h3 className="text-xl font-semibold mb-4">Event Types</h3>
//                 <div className="space-y-3">
//                   {eventTypes.slice(0, 6).map((et) => (
//                     <div key={et.slug} className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
//                         <et.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <div className="font-medium">{et.title}</div>
//                         <div className="text-sm text-muted-foreground">{et.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Welcome / Description */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Host With Us?</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">Oceanfront views, tailored packages, experienced event coordinators and flexible catering options — everything you need for a flawless event.</p>
//         </div>
//       </section>

//       {/* Event Types Grid (analogous to your food categories grid) */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Events We Host</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {eventTypes.map((item, index) => (
//               <Link key={index} to={`#${item.slug}`} className="block">
//                 <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <item.icon className="h-8 w-8 text-primary" />
//                     </div>
//                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">{item.desc}</p>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events pulled from MongoDB */}
//       <section id="events" className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Calendar className="w-6 h-6 text-primary" /> Upcoming Events</h2>

//           {!isLoading && events && events.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {events.map((event) => (
//                 <Card key={event._id}>
//                   {event.image_url && (
//                     <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
//                   )}

//                   <CardHeader>
//                     <CardTitle>{event.title}</CardTitle>
//                     <p className="text-sm text-muted-foreground">{format(new Date(event.event_date), 'PPP')}</p>
//                   </CardHeader>

//                   <CardContent>
//                     {event.description && <p className="text-muted-foreground mb-2">{event.description}</p>}
//                     {event.location && (
//                       <p className="text-sm"><span className="font-medium">Location:</span> {event.location}</p>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <p className="text-muted-foreground">No upcoming events found.</p>
//           )}
//         </div>
//       </section>

//       {/* CTA / Plan your event */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <Card className="bg-primary/5 border-primary/20">
//             <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Plan Your Event</h3>
//                 <p className="text-muted-foreground mb-2">Contact our events team to discuss your requirements and get a tailored quote.</p>
//               </div>

//               <div className="flex gap-3">
//                 <Button asChild size="lg">
//                   <Link to="/contact">Contact Event Planning Team</Link>
//                 </Button>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="outline">Book Event</Button>
//                   </DialogTrigger>

//                   {/* Reuse booking form in modal */}
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </Layout>
//   );
// }




// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { Calendar, Gift, Music, Users, Briefcase, Cake, Flame, Heart } from 'lucide-react';
// import { format } from 'date-fns';
// import { useState } from 'react';

// // ---------- EVENT TYPES (like your food categories) ----------
// const eventTypes = [
//   { icon: Gift, title: 'Weddings', desc: 'Ceremonies, receptions & bespoke packages', slug: 'weddings' },
//   { icon: Cake, title: 'Birthdays', desc: 'Kids, adults & milestone celebrations', slug: 'birthdays' },
//   { icon: Briefcase, title: 'Corporate', desc: 'Meetings, team building & launches', slug: 'corporate' },
//   { icon: Music, title: 'Concerts & Live', desc: 'Bands, DJs & live entertainment', slug: 'concerts' },
//   { icon: Flame, title: 'Beach Bonfires', desc: 'Evening bonfires with catering & music', slug: 'bonfires' },
//   { icon: Users, title: 'Private Parties', desc: 'Intimate gatherings & private hire', slug: 'private-parties' },
//   { icon: Heart, title: 'Anniversaries', desc: 'Romantic setups & anniversary dinners', slug: 'anniversaries' },
//   { icon: Calendar, title: 'Workshops & Classes', desc: 'Cooking, mixology & team workshops', slug: 'workshops' },
// ];

// type EventItem = {
//   _id: string;
//   title: string;
//   description?: string;
//   event_date: string;
//   image_url?: string;
//   location?: string;
// };

// export default function EventHosting() {
//   const { data: events, isLoading } = useQuery<EventItem[]>({
//     queryKey: ['events'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/api/even');
//       if (!res.ok) throw new Error('Failed to fetch events');
//       return res.json();
//     },
//   });

//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     date: '',
//     guests: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // basic local validation
//     if (!formData.name || !formData.email || !formData.date) {
//       alert('Please fill in name, email and date');
//       return;
//     }

//     try {
//       // POST to backend booking endpoint (adjust url as needed)
//       await fetch('http://localhost:5000/api/even', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       setOpen(false);
//       setFormData({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '' });
//       alert('Booking request submitted — we will contact you soon!');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to submit booking.');
//     }
//   };

//   return (
//     <Layout>
//       {/* SEO */}
//       <title>Event Hosting - The Seaside Sips</title>
//       <meta name="description" content="Host your special events at The Seaside Sips beachfront venue." />

//       {/* Hero Section (keeps event types visible like your food hero) */}
//       <section className="relative h-[560px] flex items-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60"></div>
//         <div className="absolute inset-0 bg-[url('/images/birthday.jpg')] bg-cover bg-center opacity-70"></div>

//         <div className="relative z-10 container mx-auto max-w-6xl px-6 text-white">
//           <div className="flex items-start justify-between gap-6 pt-12">
//             <div className="max-w-2xl">
//               <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">Host Unforgettable Events by the Sea</h1>
//               <p className="text-lg md:text-xl text-white/90 mb-6">Weddings, birthdays, corporate gatherings and more — we design experiences that your guests will remember.</p>

//               <div className="flex gap-4 flex-wrap">
//                 <Button asChild size="lg" className="shadow-lg">
//                   <Link to="#events">View Events</Link>
//                 </Button>

//                 <Dialog open={open} onOpenChange={setOpen}>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="secondary" className="bg-white/10 text-white border-white/20">Book Event</Button>
//                   </DialogTrigger>

//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>

//             {/* Quick event type highlights on the right side of hero (keeps user informed) */}
//             <div className="hidden lg:block w-96">
//               <div className="bg-white/6 backdrop-blur-sm rounded-2xl p-6">
//                 <h3 className="text-xl font-semibold mb-4">Event Types</h3>
//                 <div className="space-y-3">
//                   {eventTypes.slice(0, 6).map((et) => (
//                     <div key={et.slug} className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
//                         <et.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <div className="font-medium">{et.title}</div>
//                         <div className="text-sm text-muted-foreground">{et.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Welcome / Description */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Host With Us?</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">Oceanfront views, tailored packages, experienced event coordinators and flexible catering options — everything you need for a flawless event.</p>
//         </div>
//       </section>

//       {/* Event Types Grid (analogous to your food categories grid) */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Events We Host</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {eventTypes.map((item, index) => (
//               <Link key={index} to={`#${item.slug}`} className="block">
//                 <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <item.icon className="h-8 w-8 text-primary" />
//                     </div>
//                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">{item.desc}</p>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events pulled from MongoDB */}
//       <section id="events" className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Calendar className="w-6 h-6 text-primary" /> Upcoming Events</h2>

//           {!isLoading && events && events.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {events.map((event) => (
//                 <Card key={event._id}>
//                   {event.image_url && (
//                     <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
//                   )}

//                   <CardHeader>
//                     <CardTitle>{event.title}</CardTitle>
//                     <p className="text-sm text-muted-foreground">{format(new Date(event.event_date), 'PPP')}</p>
//                   </CardHeader>

//                   <CardContent>
//                     {event.description && <p className="text-muted-foreground mb-2">{event.description}</p>}
//                     {event.location && (
//                       <p className="text-sm"><span className="font-medium">Location:</span> {event.location}</p>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <p className="text-muted-foreground">No upcoming events found.</p>
//           )}
//         </div>
//       </section>

//       {/* CTA / Plan your event */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <Card className="bg-primary/5 border-primary/20">
//             <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Plan Your Event</h3>
//                 <p className="text-muted-foreground mb-2">Contact our events team to discuss your requirements and get a tailored quote.</p>
//               </div>

//               <div className="flex gap-3">
//                 <Button asChild size="lg">
//                   <Link to="/contact">Contact Event Planning Team</Link>
//                 </Button>
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="outline">Book Event</Button>
//                   </DialogTrigger>

//                   {/* Reuse booking form in modal */}
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </Layout>
//   );
// }





// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { Calendar, Gift, Music, Users, Briefcase, Cake, Flame, Heart } from 'lucide-react';
// import { format } from 'date-fns';
// import { useState } from 'react';

// // ---------- EVENT TYPES ----------
// const eventTypes = [
//   { icon: Gift, title: 'Weddings', desc: 'Ceremonies, receptions & bespoke packages', slug: 'weddings' },
//   { icon: Cake, title: 'Birthdays', desc: 'Kids, adults & milestone celebrations', slug: 'birthdays' },
//   { icon: Briefcase, title: 'Corporate', desc: 'Meetings, team building & launches', slug: 'corporate' },
//   { icon: Music, title: 'Concerts & Live', desc: 'Bands, DJs & live entertainment', slug: 'concerts' },
//   { icon: Flame, title: 'Beach Bonfires', desc: 'Evening bonfires with catering & music', slug: 'bonfires' },
//   { icon: Users, title: 'Private Parties', desc: 'Intimate gatherings & private hire', slug: 'private-parties' },
//   { icon: Heart, title: 'Anniversaries', desc: 'Romantic setups & anniversary dinners', slug: 'anniversaries' },
//   { icon: Calendar, title: 'Workshops & Classes', desc: 'Cooking, mixology & team workshops', slug: 'workshops' },
// ];

// type EventItem = {
//   _id: string;
//   title: string;
//   description?: string;
//   event_date: string;
//   image_url?: string;
//   location?: string;
// };

// export default function EventHosting() {
//   const { data: events, isLoading } = useQuery<EventItem[]>({
//     queryKey: ['events'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/api/even');
//       if (!res.ok) throw new Error('Failed to fetch events');
//       return res.json();
//     },
//   });

//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     date: '',
//     guests: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.date) {
//       alert('Please fill in name, email and date');
//       return;
//     }

//     try {
//       await fetch('http://localhost:5000/api/even', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       setOpen(false);
//       setFormData({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '' });
//       alert('Booking request submitted — we will contact you soon!');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to submit booking.');
//     }
//   };

//   return (
//     <Layout>
//       <title>Event Hosting - The Seaside Sips</title>
//       <meta name="description" content="Host your special events at The Seaside Sips beachfront venue." />

//       {/* Hero Section */}
//       <section className="relative h-[560px] flex items-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60"></div>
//         <div className="absolute inset-0 bg-[url('/images/birthday.jpg')] bg-cover bg-center opacity-70"></div>

//         <div className="relative z-10 container mx-auto max-w-6xl px-6 text-white">
//           <div className="flex items-start justify-between gap-6 pt-12">
//             <div className="max-w-2xl">
//               <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
//                 Host Unforgettable Events by the Sea
//               </h1>
//               <p className="text-lg md:text-xl text-white/90 mb-6">
//                 Weddings, birthdays, corporate gatherings and more — we design experiences that your guests will remember.
//               </p>

//               <div className="flex gap-4 flex-wrap">
//                 <Button asChild size="lg" className="shadow-lg">
//                   <Link to="#events">View Events</Link>
//                 </Button>

//                 <Dialog open={open} onOpenChange={setOpen}>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="secondary" className="bg-white/10 text-white border-white/20">
//                       Book Event
//                     </Button>
//                   </DialogTrigger>

//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>

//             {/* Right sidebar event types */}
//             <div className="hidden lg:block w-96">
//               <div className="bg-white/6 backdrop-blur-sm rounded-2xl p-6">
//                 <h3 className="text-xl font-semibold mb-4">Event Types</h3>
//                 <div className="space-y-3">
//                   {eventTypes.slice(0, 6).map((et) => (
//                     <div key={et.slug} className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
//                         <et.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <div className="font-medium">{et.title}</div>
//                         <div className="text-sm text-muted-foreground">{et.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Host With Us */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Host With Us?</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Oceanfront views, tailored packages, experienced event coordinators and flexible catering options — everything you need for a flawless event.
//           </p>
//         </div>
//       </section>

//       {/* Event Types Grid */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Events We Host</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {eventTypes.map((item, index) => (
//               <Link key={index} to={`#${item.slug}`} className="block">
//                 <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <item.icon className="h-8 w-8 text-primary" />
//                     </div>
//                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">{item.desc}</p>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section id="events" className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
//             <Calendar className="w-6 h-6 text-primary" /> Upcoming Events
//           </h2>

//           {!isLoading && events && events.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {events.map((event) => {
//                 const safeDate =
//                   event.event_date && !isNaN(Date.parse(event.event_date))
//                     ? format(new Date(event.event_date), 'PPP')
//                     : 'No date';

//                 return (
//                   <Card key={event._id}>
//                     {event.image_url && (
//                       <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
//                     )}

//                     <CardHeader>
//                       <CardTitle>{event.title}</CardTitle>
//                       <p className="text-sm text-muted-foreground">{safeDate}</p>
//                     </CardHeader>

//                     <CardContent>
//                       {event.description && (
//                         <p className="text-muted-foreground mb-2">{event.description}</p>
//                       )}
//                       {event.location && (
//                         <p className="text-sm">
//                           <span className="font-medium">Location:</span> {event.location}
//                         </p>
//                       )}
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="text-muted-foreground">No upcoming events found.</p>
//           )}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <Card className="bg-primary/5 border-primary/20">
//             <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
//               <div>
//                 <h3 className="text-xl font-bold mb-2">Plan Your Event</h3>
//                 <p className="text-muted-foreground mb-2">
//                   Contact our events team to discuss your requirements and get a tailored quote.
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <Button asChild size="lg">
//                   <Link to="/contact">Contact Event Planning Team</Link>
//                 </Button>

//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="lg" variant="outline">Book Event</Button>
//                   </DialogTrigger>

//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book an Event</DialogTitle>
//                     </DialogHeader>

//                     <form onSubmit={handleSubmit} className="space-y-3 pt-2">
//                       <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
//                       <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                       <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

//                       <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
//                         <option value="">Select event type</option>
//                         {eventTypes.map((t) => (
//                           <option key={t.slug} value={t.title}>{t.title}</option>
//                         ))}
//                       </select>

//                       <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
//                       <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
//                       <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

//                       <Button type="submit" className="w-full">Submit Booking</Button>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </div>
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Calendar, Gift, Music, Users, Briefcase, Cake, Flame, Heart } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

// ---------- EVENT TYPES ----------
const eventTypes = [
  { icon: Gift, title: 'Weddings', desc: 'Ceremonies, receptions & bespoke packages', slug: 'weddings' },
  { icon: Cake, title: 'Birthdays', desc: 'Kids, adults & milestone celebrations', slug: 'birthdays' },
  { icon: Briefcase, title: 'Corporate', desc: 'Meetings, team building & launches', slug: 'corporate' },
  { icon: Music, title: 'Concerts & Live', desc: 'Bands, DJs & live entertainment', slug: 'concerts' },
  { icon: Flame, title: 'Beach Bonfires', desc: 'Evening bonfires with catering & music', slug: 'bonfires' },
  { icon: Users, title: 'Private Parties', desc: 'Intimate gatherings & private hire', slug: 'private-parties' },
  { icon: Heart, title: 'Anniversaries', desc: 'Romantic setups & anniversary dinners', slug: 'anniversaries' },
  { icon: Calendar, title: 'Workshops & Classes', desc: 'Cooking, mixology & team workshops', slug: 'workshops' },
];

type EventItem = {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
  eventType?: string;
  date: string; // THIS IS THE CORRECT FIELD
  guests?: string;
  message?: string;
  image_url?: string;
  location?: string;
};

export default function EventHosting() {
  const { data: events, isLoading } = useQuery<EventItem[]>({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/even');
      if (!res.ok) throw new Error('Failed to fetch events');
      return res.json();
    },
  });

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date) {
      alert('Please fill in name, email and date');
      return;
    }

    try {
      await fetch('http://localhost:5000/api/even', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setOpen(false);
      setFormData({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '' });
      alert('Booking request submitted — we will contact you soon!');
    } catch (err) {
      console.error(err);
      alert('Failed to submit booking.');
    }
  };

  return (
    <Layout>
      <title>Event Hosting - The Seaside Sips</title>
      <meta name="description" content="Host your special events at The Seaside Sips beachfront venue." />

      {/* Hero Section */}
      <section className="relative h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60"></div>
        <div className="absolute inset-0 bg-[url('/images/birthday.jpg')] bg-cover bg-center opacity-70"></div>

        <div className="relative z-10 container mx-auto max-w-6xl px-6 text-white">
          <div className="flex items-start justify-between gap-6 pt-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                Host Unforgettable Events by the Sea
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Weddings, birthdays, corporate gatherings and more — we design experiences that your guests will remember.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Button asChild size="lg" className="shadow-lg">
                  <Link to="#events">View Events</Link>
                </Button>

                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="secondary" className="bg-white/10 text-white border-white/20">
                      Book Event
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book an Event</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                      <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                      <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                      <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

                      <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
                        <option value="">Select event type</option>
                        {eventTypes.map((t) => (
                          <option key={t.slug} value={t.title}>{t.title}</option>
                        ))}
                      </select>

                      <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
                      <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
                      <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

                      <Button type="submit" className="w-full">Submit Booking</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Right sidebar event types */}
            <div className="hidden lg:block w-96">
              <div className="bg-white/6 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Event Types</h3>
                <div className="space-y-3">
                  {eventTypes.slice(0, 6).map((et) => (
                    <div key={et.slug} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <et.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{et.title}</div>
                        <div className="text-sm text-muted-foreground">{et.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Host With Us */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Host With Us?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oceanfront views, tailored packages, experienced event coordinators and flexible catering options — everything you need for a flawless event.
          </p>
        </div>
      </section>

      {/* Event Types Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Events We Host</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((item, index) => (
              <Link key={index} to={`#${item.slug}`} className="block">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" /> Upcoming Events
          </h2>

          {!isLoading && events && events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => {
                const safeDate =
                  event.date && !isNaN(Date.parse(event.date))
                    ? format(new Date(event.date), 'PPP')
                    : 'No date';

                return (
                  <Card key={event._id}>
                    {event.image_url && (
                      <img src={event.image_url} alt={event.name} className="w-full h-48 object-cover rounded-t-lg" />
                    )}

                    <CardHeader>
                      <CardTitle>{event.eventType || 'Event'}</CardTitle>
                      <p className="text-sm text-muted-foreground">{safeDate}</p>
                    </CardHeader>

                    <CardContent>
                      {event.message && (
                        <p className="text-muted-foreground mb-2">{event.message}</p>
                      )}
                      {event.location && (
                        <p className="text-sm">
                          <span className="font-medium">Location:</span> {event.location}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <p className="text-muted-foreground">No upcoming events found.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Plan Your Event</h3>
                <p className="text-muted-foreground mb-2">
                  Contact our events team to discuss your requirements and get a tailored quote.
                </p>
              </div>

              <div className="flex gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">Contact Event Planning Team</Link>
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline">Book Event</Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book an Event</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                      <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                      <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                      <Input name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />

                      <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full rounded-md border p-2">
                        <option value="">Select event type</option>
                        {eventTypes.map((t) => (
                          <option key={t.slug} value={t.title}>{t.title}</option>
                        ))}
                      </select>

                      <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
                      <Input name="guests" placeholder="Estimated guests" value={formData.guests} onChange={handleChange} />
                      <Textarea name="message" placeholder="Additional details" value={formData.message} onChange={handleChange} />

                      <Button type="submit" className="w-full">Submit Booking</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
