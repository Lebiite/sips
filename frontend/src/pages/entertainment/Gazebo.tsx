// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { MapPin } from 'lucide-react';

// // ---------- GAZEBO IMAGES ----------
// import gazebo1 from '@/assets/drinks/drink1.png';
// import gazebo2 from '@/assets/drinks/drink2.png';
// import gazebo3 from '@/assets/drinks/drink3.png';
// import gazebo4 from '@/assets/drinks/drink4.png';

// export default function GardenGazebos() {
//   const gazebos = [gazebo1, gazebo2, gazebo3, gazebo4];

//   return (
//     <Layout>
//       <title>Garden Makuti Gazebos - The Seaside Sips</title>
//       <meta
//         name="description"
//         content="Relax in our charming garden makuti gazebos at The Seaside Sips. Perfect for family gatherings, private dinners, and serene moments by the sea."
//       />

//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           {/* Header */}
//           <div className="flex items-center gap-4 mb-8">
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//               <MapPin className="h-8 w-8 text-primary" />
//             </div>
//             <h1 className="text-4xl font-bold">Garden Makuti Gazebos</h1>
//           </div>

//           {/* Description */}
//           <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//             Our garden makuti gazebos are designed for relaxation, family fun, and private celebrations. 
//             Nestled amidst lush tropical gardens, each gazebo provides shade, comfort, and a serene escape 
//             with views of our beautiful beachfront. Ideal for private dinners, small gatherings, or a quiet moment to unwind.
//           </p>

//           {/* Gazebo Features */}
//           <h2 className="text-2xl font-bold mb-4">Gazebo Features</h2>
//           <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
//             <li>Authentic thatched makuti roofs for a tropical vibe</li>
//             <li>Comfortable seating for families or groups</li>
//             <li>Private lighting and decor for evening ambiance</li>
//             <li>Close proximity to the beach and garden paths</li>
//             <li>Option to order food & drinks directly to your gazebo</li>
//             <li>Perfect for photography and small events</li>
//           </ul>

//           {/* Gazebo Image Gallery */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//             {gazebos.map((src, idx) => (
//               <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
//                 <CardContent className="p-0">
//                   <img
//                     src={src}
//                     alt={`Gazebo ${idx + 1}`}
//                     className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
//             <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
//               <Link to="/contact">Reserve Your Gazebo</Link>
//             </Button>
//             <Button asChild size="lg" variant="outline">
//               <Link to="/gallery">View More Spaces</Link>
//             </Button>
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

// ---------- GAZEBO IMAGES ----------
import gazebo1 from '@/assets/drinks/drink1.png';
import gazebo2 from '@/assets/drinks/drink2.png';
import gazebo3 from '@/assets/drinks/drink3.png';
import gazebo4 from '@/assets/drinks/drink4.png';

export default function GardenGazebos() {
  const gazebos = [gazebo1, gazebo2, gazebo3, gazebo4];

  return (
    <Layout>
      <title>Garden Makuti Gazebos - The Seaside Sips</title>
      <meta
        name="description"
        content="Relax in our charming garden makuti gazebos at The Seaside Sips. Perfect for serene moments, private dinners, and small gatherings."
      />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/gazebo.png')",
        }}>
        <div className="absolute inset-0 bg-black/40" />

        <h1 className="relative text-white text-5xl font-extrabold tracking-wide drop-shadow-xl">
          Garden Makuti Gazebos
        </h1>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Enjoy peaceful moments inside our beautifully crafted makuti gazebos. 
            Perfect for private dinners, relaxing afternoons, family hangouts, and 
            romantic evenings surrounded by tropical gardens and the calm ocean breeze.
          </p>

          {/* Gazebo Features */}
          <h2 className="text-3xl font-bold mb-6 text-center">Gazebo Features</h2>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-12 max-w-3xl mx-auto">
            <li>Authentic thatched makuti roofing for a tropical vibe</li>
            <li>Comfortable seating suitable for couples or families</li>
            <li>Evening lighting for a warm, relaxing atmosphere</li>
            <li>Close access to beachfront and garden walkways</li>
            <li>Food and drinks delivered directly to your gazebo</li>
            <li>Perfect spot for photos, evening relaxation & small celebrations</li>
          </ul>

          {/* ---------- IMAGE GALLERY WITH BIG CARDS ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {gazebos.map((src, idx) => (
              <Card
                key={idx}
                className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-0">
                  <img
                    src={src}
                    alt={`Gazebo ${idx + 1}`}
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-primary text-white px-10 text-lg hover:bg-primary/90">
              <Link to="/contact">Reserve Your Gazebo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-10 text-lg">
              <Link to="/gallery">View More Spaces</Link>
            </Button>
          </div>

        </div>
      </section>
    </Layout>
  );
}
