// import { Layout } from "@/components/Layout";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Music, Mic2, Disc3 } from "lucide-react";

// const entertainment = [
//   {
//     icon: Music,
//     title: "Live Music Evenings",
//     description: "Enjoy soulful live performances from talented local musicians every weekend. From acoustic sessions to full band performances, our live music nights feature diverse genres including reggae, coastal fusion, jazz, and contemporary hits. The combination of great music, ocean breezes, and delicious food creates an unforgettable ambiance.",
//     schedule: "Every Friday & Saturday, 7:00 PM - 10:00 PM"
//   },
//   {
//     icon: Mic2,
//     title: "Karaoke Nights",
//     description: "Showcase your singing talents at our popular karaoke nights! Whether you're a confident performer or just singing for fun, our karaoke setup features an extensive song library with hits from various eras and genres. Sing solo or duet with friends—it's always a night full of laughter, applause, and memorable moments.",
//     schedule: "Every Wednesday, 8:00 PM - 11:00 PM"
//   },
//   {
//     icon: Disc3,
//     title: "DJ Sessions",
//     description: "Dance the night away to electrifying beats spun by our talented DJs. Our DJ sessions feature tropical vibes, Afrohouse rhythms, coastal beats, and popular international tracks that keep the energy high and the dance floor packed. The perfect blend of music genres ensures everyone finds their rhythm.",
//     schedule: "Every Thursday & Saturday, 9:00 PM - 1:00 AM"
//   }
// ];

// export default function Entertainment() {
//   return (
//     <Layout>
//       {/* SEO */}
//       <title>Experiences & Entertainment - The Seaside Sips</title>
//       <meta name="description" content="Enjoy live music, karaoke nights, and DJ sessions with tropical and Afrohouse vibes at The Seaside Sips in Mtwapa Beach." />

//       {/* Hero */}
//       <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
//         <div className="absolute inset-0 bg-[url('/images/pool.jpg')] bg-cover bg-center opacity-90"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">Experiences & Entertainment</h1>
//           <p className="text-xl">Live Music, Karaoke, and DJ Sessions by the Beach</p>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Music Meets the Ocean</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             At The Seaside Sips, the entertainment never stops. We believe that great food and drinks taste even better 
//             when accompanied by fantastic music and a lively atmosphere. Our carefully curated entertainment lineup ensures 
//             there's always something special happening by the beach.
//           </p>
//         </div>
//       </section>

//       {/* Entertainment Options */}
//       <section className="py-8 px-4 bg-muted/30">
//         <div className="container mx-auto max-w-5xl">
//           <div className="space-y-6">
//             {entertainment.map((item, index) => (
//               <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
//                 <CardHeader>
//                   <div className="flex items-center gap-4">
//                     <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <item.icon className="h-8 w-8 text-primary" />
//                     </div>
//                     <div>
//                       <CardTitle className="text-2xl">{item.title}</CardTitle>
//                       <p className="text-sm text-muted-foreground mt-1">{item.schedule}</p>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Info */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <Card>
//             <CardContent className="p-8">
//               <h2 className="text-2xl font-bold mb-4 text-center">Tropical & Afrohouse Vibes</h2>
//               <p className="text-muted-foreground leading-relaxed text-center">
//                 Our entertainment perfectly captures the coastal spirit with tropical beats and energetic Afrohouse rhythms. 
//                 The fusion of modern electronic music with traditional African sounds creates a unique atmosphere that's both 
//                 exciting and relaxing. Whether you're here to dance, sing, or simply enjoy the music with a cocktail in hand, 
//                 our entertainment lineup guarantees an unforgettable experience.
//               </p>
//               <div className="mt-6 text-center">
//                 <p className="text-sm text-muted-foreground">
//                   No cover charge for entertainment events. Tables fill up quickly on entertainment nights—reservations recommended!
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </Layout>
//   );
// }




import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Replace icons with your own images
// import live1 from "@/assets/entertainment/live1.jpg";
// import live2 from "@/assets/entertainment/live2.jpg";
// import live3 from "@/assets/entertainment/live3.jpg";
import live1 from '@/assets/drinks/drink1.png';
import live2 from '@/assets/drinks/drink2.png';
import live3 from '@/assets/drinks/drink3.png';
// import live4 from '@/assets/drinks/drink4.png';

const entertainment = [
  {
    img: live1,
    title: "Live Music Evenings",
    description:
      "Enjoy soulful live performances from talented local musicians every weekend. From acoustic sessions to full band performances, our live music nights feature diverse genres including reggae, coastal fusion, jazz, and contemporary hits.",
    schedule: "Every Friday & Saturday, 7:00 PM - 10:00 PM",
  },
  {
    img: live2,
    title: "Karaoke Nights",
    description:
      "Showcase your singing talents at our vibrant karaoke nights! Whether you're a confident performer or just singing for fun, our karaoke setup features an extensive song library with hits from all eras.",
    schedule: "Every Wednesday, 8:00 PM - 11:00 PM",
  },
  {
    img: live3,
    title: "DJ Sessions",
    description:
      "Dance the night away to electrifying beats from our talented DJs. Expect tropical vibes, Afrohouse rhythms, coastal beats, and international hits that keep the energy high.",
    schedule: "Every Thursday & Saturday, 9:00 PM - 1:00 AM",
  },
];

export default function Entertainment() {
  return (
    <Layout>
      <title>Experiences & Entertainment - The Seaside Sips</title>
      <meta
        name="description"
        content="Enjoy live music, karaoke nights, and DJ sessions with tropical and Afrohouse vibes at The Seaside Sips in Mtwapa Beach."
      />

      {/* Hero */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/images/pool.jpg')] bg-cover bg-center opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Experiences & Entertainment
          </h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow">
            Live Music, Karaoke, and DJ Sessions by the Beach
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Where Music Meets the Ocean
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At The Seaside Sips, every night brings something special. Whether you love live
            performances, want to enjoy karaoke with friends, or dance to tropical and Afrohouse
            mixes, our entertainment is crafted to elevate your beachside experience.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-8 px-4 bg-muted/40">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entertainment.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.schedule}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Outro */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Tropical & Afrohouse Vibes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our nightly entertainment blends modern beats with coastal charm. Dance, relax,
                sing, or simply enjoy the ambiance—every visit brings a new memory.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                No cover charge. Early reservations recommended for prime seating.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
