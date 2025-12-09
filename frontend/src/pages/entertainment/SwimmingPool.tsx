// import { Layout } from '@/components/Layout';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';

// export default function SwimmingPool() {
//   return (
//     <Layout>
//       <title>Swimming Pool - The Seaside Sips</title>
//       <meta
//         name="description"
//         content="Relax and enjoy our modern beachfront swimming pool at The Seaside Sips."
//       />

//       {/* HERO SECTION */}
//       <section className="relative w-full h-[60vh]">
//         <img
//           src="/images/beach4.jpg"
//           className="absolute inset-0 w-full h-full object-cover"
//           alt="Swimming pool hero"
//         />
//         <div className="absolute inset-0 bg-black/0 flex items-center justify-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
//             Swimming Pool
//           </h1>
//         </div>
//       </section>

//       {/* CONTENT SECTION */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">

//           {/* DESCRIPTION */}
//           <p className="text-lg text-muted-foreground leading-relaxed mb-10">
//             Discover the perfect blend of relaxation and fun at our pristine swimming pool.
//             Enjoy refreshing ocean breezes, lush tropical surroundings, and a peaceful ambiance —
//             ideal for families, couples, and solo travelers looking for a chill escape.
//           </p>

//           {/* AMENITIES */}
//           <h2 className="text-3xl font-bold mb-6">Pool Amenities</h2>

//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {[
//               {
//                 title: "Large main pool with varying depths",
//                 img: "/images/swim.png",
//               },
//               {
//                 title: "Dedicated children's shallow zone",
//                 img: "/images/swim.png",
//               },
//               {
//                 title: "Comfortable sun loungers & umbrellas",
//                 img: "/images/swim.png",
//               },
//               {
//                 title: "Pool bar with cocktails & snacks",
//                 img: "/images/swim.png",
//               },
//               {
//                 title: "Modern clean changing rooms",
//                 img: "/images/swim.png",
//               },
//               {
//                 title: "Lifeguard on duty during peak hours",
//                 img: "/images/swim.png",
//               },
//             ].map((item) => (
//               <Card
//                 key={item.title}
//                 className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition shadow-black/10"
//               >
//                 <div className="h-56 w-full overflow-hidden">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 <CardContent className="p-6">
//                   <h4 className="text-xl font-semibold">{item.title}</h4>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* ACTIVITIES */}
//           <h2 className="text-3xl font-bold mb-4">Pool Activities</h2>
//           <p className="text-muted-foreground mb-6">
//             Our pool area hosts water aerobics classes, fun splash activities, and both adult and
//             children swimming lessons. Whether you’re looking to exercise, learn, or simply have fun,
//             our instructors and friendly team ensure a safe and enjoyable time.
//           </p>

//           <Card className="bg-primary/5 border-primary/20 mt-6">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold mb-3">Explore Pool Activities</h3>
//               <p className="text-muted-foreground mb-4">
//                 Join energizing water aerobics or enroll children for professionally guided swimming lessons.
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

export default function SwimmingPool() {
  return (
    <Layout>
      <title>Swimming Pool - The Seaside Sips</title>
      <meta
        name="description"
        content="Relax and enjoy our modern beachfront swimming pool at The Seaside Sips."
      />

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh]">
        {/* Your background div */}
        <div className="absolute inset-0 bg-[url('/images/swim.png')] bg-cover bg-center opacity-90"></div>

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Swimming Pool
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">

          {/* DESCRIPTION */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Discover the perfect blend of relaxation and fun at our pristine swimming pool.
            Enjoy refreshing ocean breezes, lush tropical surroundings, and a peaceful ambiance —
            ideal for families, couples, and solo travelers looking for a chill escape.
          </p>

          {/* AMENITIES */}
          <h2 className="text-3xl font-bold mb-6">Pool Amenities</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Large main pool with varying depths",
                img: "/images/swim.png",
              },
              {
                title: "Dedicated children's shallow zone",
                img: "/images/swim.png",
              },
              {
                title: "Comfortable sun loungers & umbrellas",
                img: "/images/swim.png",
              },
              {
                title: "Pool bar with cocktails & snacks",
                img: "/images/swim.png",
              },
              {
                title: "Modern clean changing rooms",
                img: "/images/swim.png",
              },
              {
                title: "Lifeguard on duty during peak hours",
                img: "/images/swim.png",
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
          <h2 className="text-3xl font-bold mb-4">Pool Activities</h2>
          <p className="text-muted-foreground mb-6">
            Our pool area hosts water aerobics classes, fun splash activities, and both adult and
            children swimming lessons. Whether you’re looking to exercise, learn, or simply have fun,
            our instructors and friendly team ensure a safe and enjoyable time.
          </p>

          <Card className="bg-primary/5 border-primary/20 mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Explore Pool Activities</h3>
              <p className="text-muted-foreground mb-4">
                Join energizing water aerobics or enroll children for professionally guided swimming lessons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/entertainment/water-aerobics">Water Aerobics</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
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
