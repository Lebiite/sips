// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { Droplets } from 'lucide-react';

// // ---------- IMPORT POOL IMAGES ----------
// import pool1 from '@/assets/drinks/drink1.png';
// import pool2 from '@/assets/drinks/drink2.png';
// import pool3 from '@/assets/drinks/drink3.png';
// import pool4 from '@/assets/drinks/drink4.png';
// import kids1 from '@/assets/drinks/drink5.png';
// import kids2 from '@/assets/drinks/drink6.png';
// import family1 from '@/assets/drinks/drink7.png';
// import family2 from '@/assets/drinks/drink8.png';

// export default function SwimmingPool() {
//   const images = [
//     { src: pool1, title: 'Main Pool Area' },
//     { src: pool2, title: 'Ocean View Poolside' },
//     { src: pool3, title: 'Sun Loungers & Umbrellas' },
//     { src: pool4, title: 'Pool Bar' },
//     { src: kids1, title: 'Children’s Shallow Pool' },
//     { src: kids2, title: 'Kids Splash Area' },
//     { src: family1, title: 'Family Fun Area' },
//     { src: family2, title: 'Evening Pool Ambiance' },
//   ];

//   return (
//     <Layout>
//       <title>Swimming Pool - The Seaside Sips</title>
//       <meta
//         name="description"
//         content="Relax in our pristine beachfront swimming pool at The Seaside Sips, perfect for families and children."
//       />

//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           {/* Header */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
//               <Droplets className="h-8 w-8 text-primary" />
//             </div>
//             <h1 className="text-4xl font-bold">Swimming Pool</h1>
//           </div>

//           <p className="text-lg text-muted-foreground leading-relaxed mb-8">
//             Our pristine swimming pool offers the perfect escape from the tropical heat. 
//             Surrounded by lush gardens and featuring stunning ocean views, our pool area 
//             is designed for maximum relaxation and fun for the whole family.
//           </p>

//           <h2 className="text-2xl font-bold mb-4">Pool Amenities</h2>
//           <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
//             <li>Large main pool with varying depths</li>
//             <li>Children's shallow area & splash zones</li>
//             <li>Comfortable sun loungers and umbrellas</li>
//             <li>Pool bar service available</li>
//             <li>Clean changing facilities</li>
//             <li>Lifeguard on duty during peak hours</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-4">Family-Friendly Fun</h2>
//           <p className="text-muted-foreground mb-6">
//             Our pool area is perfect for all ages. Children can enjoy the splash zones 
//             and shallow pools while adults relax by the main pool or join water activities. 
//             Evening pool parties and family events make the area lively and entertaining.
//           </p>

//           {/* Image Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
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

//           {/* Call-to-action */}
//           <Card className="bg-primary/5 border-primary/20">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold mb-4">Join Our Pool Activities</h3>
//               <p className="text-muted-foreground mb-4">
//                 Participate in family-friendly pool activities, swimming lessons for children, 
//                 and water aerobics classes for adults.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button asChild size="lg">
//                   <Link to="/entertainment/water-aerobics">Water Aerobics</Link>
//                 </Button>
//                 <Button asChild size="lg" variant="outline">
//                   <Link to="/entertainment/swimming-lessons">Swimming Lessons</Link>
//                 </Button>
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
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

// ---------- IMPORT POOL IMAGES ----------
import pool1 from '@/assets/drinks/drink1.png';
import pool2 from '@/assets/drinks/drink2.png';
import pool3 from '@/assets/drinks/drink3.png';
import pool4 from '@/assets/drinks/drink4.png';
import kids1 from '@/assets/drinks/drink5.png';
import kids2 from '@/assets/drinks/drink6.png';
import family1 from '@/assets/drinks/drink7.png';
import family2 from '@/assets/drinks/drink8.png';

export default function SwimmingPool() {
  const images = [
    { src: pool1, title: 'Main Pool Area' },
    { src: pool2, title: 'Ocean View Poolside' },
    { src: pool3, title: 'Sun Loungers & Umbrellas' },
    { src: pool4, title: 'Pool Bar' },
    { src: kids1, title: 'Children’s Shallow Pool' },
    { src: kids2, title: 'Kids Splash Area' },
    { src: family1, title: 'Family Fun Area' },
    { src: family2, title: 'Evening Pool Ambiance' },
  ];

  return (
    <Layout>
      <title>Swimming Pool - The Seaside Sips</title>
      <meta
        name="description"
        content="Relax in our pristine beachfront swimming pool at The Seaside Sips, perfect for families and children."
      />

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/0" />
        <h1 className="relative text-white text-5xl font-extrabold tracking-wide drop-shadow-xl">
          Family-Friendly Fun
        </h1>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Enjoy a refreshing escape at our pristine beachfront swimming pool. With panoramic ocean views, 
            lush greenery, and multiple pool zones for adults and children, it’s the perfect spot for relaxation and family fun.
          </p>

          {/* Pool Amenities */}
          <h2 className="text-3xl font-bold mb-4 text-center">Pool Amenities</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
            <li>Large main pool with varying depths</li>
            <li>Children's shallow area & splash zones</li>
            <li>Comfortable sun loungers and umbrellas</li>
            <li>Pool bar service for drinks & snacks</li>
            <li>Clean changing and shower facilities</li>
            <li>Lifeguard on duty during peak hours</li>
          </ul>

          {/* Family Fun Section */}
          <h2 className="text-3xl font-bold mb-4 text-center">Family-Friendly Fun</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-3xl mx-auto text-lg">
            Kids enjoy splash zones while adults relax at the main pool or join water fitness sessions. 
            Our pool area comes alive in the evening with colorful lighting and family-friendly events.
          </p>

          {/* ---------- LARGE IMAGE GALLERY ---------- */}
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

          {/* ---------- CTA SECTION ---------- */}
          <Card className="bg-primary/5 border-primary/20 rounded-2xl shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Pool Activities</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From family swimming to water aerobics and kids lessons — we have something for everyone!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="px-10 text-lg">
                  <Link to="/entertainment/water-aerobics">Water Aerobics</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-10 text-lg">
                  <Link to="/entertainment/swimming-lessons">Swimming Lessons</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </Layout>
  );
}
