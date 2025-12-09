// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { Palmtree } from 'lucide-react';

// export default function BeachAccess() {
//   return (
//     <Layout>
//       <title>Beach Access - The Seaside Sips</title>
//       <meta name="description" content="Direct beach access at The Seaside Sips - enjoy the pristine Mtwapa Beach." />

//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//               <Palmtree className="h-8 w-8 text-primary" />
//             </div>
//             <h1 className="text-4xl font-bold">Beach Access</h1>
//           </div>

//           <div className="prose prose-lg max-w-none">
//             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//               The Seaside Sips offers direct access to the beautiful Mtwapa Beach. Step from our venue onto the soft 
//               white sand and enjoy the crystal-clear waters of the Indian Ocean just steps away.
//             </p>

//             <h2 className="text-2xl font-bold mt-8 mb-4">Beach Facilities</h2>
//             <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
//               <li>Direct access from our venue to the beach</li>
//               <li>Beach loungers and umbrellas available</li>
//               <li>Beachside service from our bar and restaurant</li>
//               <li>Clean and well-maintained beach area</li>
//               <li>Water sports equipment available for rent</li>
//               <li>Safe swimming conditions with lifeguard supervision</li>
//             </ul>

//             <h2 className="text-2xl font-bold mt-8 mb-4">Beach Activities</h2>
//             <p className="text-muted-foreground mb-4">
//               Whether you want to relax on the sand, take a refreshing swim, try water sports, or simply watch the 
//               sunset over the ocean, our beach access provides the perfect setting for your coastal getaway.
//             </p>

//             <Card className="bg-primary/5 border-primary/20 mt-8">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold mb-4">Visit Us Today</h3>
//                 <p className="text-muted-foreground mb-4">
//                   Experience the perfect blend of beachfront dining and direct beach access. Contact us for more information 
//                   or to plan your visit.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button asChild size="lg">
//                     <Link to="/location">View Location & Hours</Link>
//                   </Button>
//                   <Button asChild size="lg" variant="outline">
//                     <Link to="/contact">Contact Us</Link>
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






import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function BeachAccess() {
  return (
    <Layout>
      <title>Beach Access - The Seaside Sips</title>
      <meta
        name="description"
        content="Direct beachfront access at The Seaside Sips — enjoy the pristine Mtwapa Beach with breathtaking ocean views."
      />

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh]">
        {/* Replace with your beach image */}
        <div className="absolute inset-0 bg-[url('/images/beach4.jpg')] bg-cover bg-center opacity-90"></div>

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Beach Access
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">

          {/* DESCRIPTION */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Step directly from our venue onto the soft white sands of Mtwapa Beach. Enjoy sweeping
            Indian Ocean views, warm tropical breezes, and a relaxed atmosphere perfect for unwinding,
            exploring, or enjoying beachfront dining.
          </p>

          {/* FACILITIES */}
          <h2 className="text-3xl font-bold mb-6">Beach Facilities</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Direct access from our venue to the beach",
                img: "/images/beach4.jpg",
              },
              {
                title: "Beach loungers & umbrellas available",
                img: "/images/beach2.jpg",
              },
              {
                title: "Beachside service from bar & restaurant",
                img: "/images/beach3.jpg",
              },
              {
                title: "Clean and well-maintained shoreline",
                img: "/images/beach4.jpg",
              },
              {
                title: "Water sports equipment for rent",
                img: "/images/beach4.jpg",
              },
              {
                title: "Safe swimming area with lifeguard hours",
                img: "/images/beach4.jpg",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition shadow-black/10"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ACTIVITIES */}
          <h2 className="text-3xl font-bold mb-4">Beach Activities</h2>
          <p className="text-muted-foreground mb-6">
            Whether you want to sunbathe, swim, try thrilling water sports, enjoy a romantic beach
            walk, or simply relax with a cocktail and watch the sunset, our beach access provides
            everything you need for the perfect ocean escape.
          </p>

          {/* CTA CARD */}
          <Card className="bg-primary/5 border-primary/20 mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Enjoy The Beach Lifestyle</h3>
              <p className="text-muted-foreground mb-4">
                Visit us today and experience Mtwapa Beach like never before. From beachfront dining
                to relaxing ocean views, we’ve got the perfect coastal experience waiting for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/location">View Location & Hours</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </Layout>
  );
}


