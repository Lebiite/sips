// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import { Waves } from 'lucide-react';

// // ---------- IMPORT IMAGES ----------
// import drink1 from '@/assets/drinks/drink1.png';
// import drink2 from '@/assets/drinks/drink2.png';
// import drink3 from '@/assets/drinks/drink3.png';
// import drink4 from '@/assets/drinks/drink4.png';

// export default function WaterAerobics() {
//   const { data: schedules, isLoading } = useQuery({
//     queryKey: ['water-aerobics'],
//     queryFn: async () => {
//       const res = await fetch('http://localhost:5000/api/water-aerobics');
//       if (!res.ok) throw new Error('Failed to fetch water aerobics schedules');
//       return res.json();
//     },
//   });

//   const images = [
//     { src: drink1, title: 'Warm-up Exercises' },
//     { src: drink2, title: 'Group Water Aerobics' },
//     { src: drink3, title: 'Pool Stretching' },
//     { src: drink4, title: 'Cool Down & Relaxation' },
//   ];

//   return (
//     <Layout>
//       <title>Water Aerobics - The Seaside Sips</title>
//       <meta
//         name="description"
//         content="Join our water aerobics classes at The Seaside Sips for fitness and fun in the pool."
//       />

//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">

//           {/* Header */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//               <Waves className="h-8 w-8 text-primary" />
//             </div>
//             <h1 className="text-4xl font-bold">Water Aerobics</h1>
//           </div>

//           <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//             Stay fit while having fun in our pool! Our water aerobics classes are perfect for all fitness levels,
//             providing a low-impact, full-body workout in a refreshing aquatic environment.
//           </p>

//           {/* Image Gallery */}
//           <h2 className="text-2xl font-bold mb-4">Gallery</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//             {images.map((img, idx) => (
//               <Card key={idx} className="overflow-hidden">
//                 <CardContent className="p-0">
//                   <img
//                     src={img.src}
//                     alt={img.title}
//                     className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="p-2 text-center text-sm font-medium text-muted-foreground">
//                     {img.title}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Class Schedule */}
//           <h2 className="text-2xl font-bold mb-6">Class Schedule</h2>

//           {isLoading ? (
//             <p>Loading schedules...</p>
//           ) : schedules && schedules.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {schedules.map((schedule: any) => (
//                 <Card key={schedule._id}>
//                   <CardHeader>
//                     <CardTitle>{schedule.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-2">
//                     {schedule.description && (
//                       <p className="text-muted-foreground">{schedule.description}</p>
//                     )}

//                     <div className="flex items-center text-sm">
//                       <span className="font-medium">Schedule:</span>
//                       <span className="ml-2 text-muted-foreground">{schedule.schedule}</span>
//                     </div>

//                     {schedule.instructor && (
//                       <div className="flex items-center text-sm">
//                         <span className="font-medium">Instructor:</span>
//                         <span className="ml-2 text-muted-foreground">{schedule.instructor}</span>
//                       </div>
//                     )}

//                     {schedule.max_participants && (
//                       <div className="flex items-center text-sm">
//                         <span className="font-medium">Max Participants:</span>
//                         <span className="ml-2 text-muted-foreground">{schedule.max_participants}</span>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <p className="text-muted-foreground mb-8">
//               No water aerobics classes scheduled at the moment.
//             </p>
//           )}

//           {/* Call-to-action */}
//           <Card className="bg-primary/5 border-primary/20">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold mb-4">Ready to Join?</h3>
//               <p className="text-muted-foreground mb-4">
//                 Contact us to book your spot in our next water aerobics class or learn more about our fitness programs.
//               </p>
//               <Button asChild size="lg">
//                 <Link to="/contact">Contact Us to Book</Link>
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

// ---------- IMPORT IMAGES ----------
import drink1 from '@/assets/drinks/drink1.png';
import drink2 from '@/assets/drinks/drink2.png';
import drink3 from '@/assets/drinks/drink3.png';
import drink4 from '@/assets/drinks/drink4.png';

export default function WaterAerobics() {
  const { data: schedules, isLoading } = useQuery({
    queryKey: ['water-aerobics'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/water-aerobics');
      if (!res.ok) throw new Error('Failed to fetch water aerobics schedules');
      return res.json();
    },
  });

  const images = [
    { src: drink1, title: 'Warm-up Exercises' },
    { src: drink2, title: 'Group Water Aerobics' },
    { src: drink3, title: 'Pool Stretching' },
    { src: drink4, title: 'Cool Down & Relaxation' },
  ];

  return (
    <Layout>
      <title>Water Aerobics - The Seaside Sips</title>
      <meta
        name="description"
        content="Join our refreshing water aerobics sessions at The Seaside Sips. Great for fitness, fun, and full-body movement."
      />

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bech.png')" }}
      >
        <div className="absolute inset-0 bg-black/0" />
        <h1 className="relative text-white text-5xl font-extrabold tracking-wide drop-shadow-xl">
          Water Aerobics
        </h1>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Get moving in the water! Our water aerobics classes offer a fun, low-impact workout suitable for all ages and fitness levels. 
            Boost strength, flexibility, and endurance while enjoying the cool, refreshing pool environment.
          </p>

          {/* ---------- LARGE IMAGE GALLERY ---------- */}
          <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {images.map((img, idx) => (
              <Card
                key={idx}
                className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <CardContent className="p-0">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>

                <div className="p-4 text-center text-lg font-semibold text-muted-foreground">
                  {img.title}
                </div>
              </Card>
            ))}
          </div>

          {/* ---------- SCHEDULE SECTION ---------- */}
          <h2 className="text-3xl font-bold mb-8 text-center">Class Schedule</h2>

          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading schedules...</p>
          ) : schedules && schedules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {schedules.map((schedule: any) => (
                <Card key={schedule._id} className="shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl">{schedule.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {schedule.description && (
                      <p className="text-muted-foreground">{schedule.description}</p>
                    )}

                    <div className="text-sm flex items-center">
                      <span className="font-medium">Schedule:</span>
                      <span className="ml-2 text-muted-foreground">{schedule.schedule}</span>
                    </div>

                    {schedule.instructor && (
                      <div className="text-sm flex items-center">
                        <span className="font-medium">Instructor:</span>
                        <span className="ml-2 text-muted-foreground">{schedule.instructor}</span>
                      </div>
                    )}

                    {schedule.max_participants && (
                      <div className="text-sm flex items-center">
                        <span className="font-medium">Max Participants:</span>
                        <span className="ml-2 text-muted-foreground">
                          {schedule.max_participants}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground mb-16">
              No classes available at the moment.
            </p>
          )}

          {/* ---------- CTA CARD ---------- */}
          <Card className="bg-primary/5 border-primary/20 rounded-2xl shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Book your spot in our next water aerobics class and experience a refreshing full-body workout in the pool.
              </p>
              <Button asChild size="lg" className="px-10 text-lg">
                <Link to="/contact">Contact Us to Book</Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>
    </Layout>
  );
}
