// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Link } from "react-router-dom";
// import {
//   Waves,
//   Music,
//   UtensilsCrossed,
//   Wine,
//   Palmtree,
//   Users,
//   Calendar,
//   Droplets,
// } from "lucide-react";

// export default function Home() {
//   // 🔥 NEW merged highlight cards (with images + correct routes)
//   const highlights = [
//     {
//       title: "Beachfront Restaurant",
//       desc: "Fresh cuisine with ocean views",
//       img: "/images/hero.png",
//       to: "/nine",
//       icon: UtensilsCrossed,
//     },
//     {
//       title: "Full-Service Bar",
//       desc: "Premium drinks & cocktails",
//       img: "/images/bar.png",
//       to: "/bar",
//       icon: Wine,
//     },
//     {
//       title: "Swimming Pool",
//       desc: "Relax in our pristine pool",
//       img: "/images/swim.png",
//       to: "/pool",
//       icon: Droplets,
//     },
//     {
//       title: "Garden Makuti Gazebos",
//       desc: "Tropical outdoor seating",
//       img: "/images/gazebo.png",
//       to: "/gazebo",
//       icon: Palmtree,
//     },
//     {
//       title: "Live Entertainment",
//       desc: "Music, DJ & Karaoke nights",
//       img: "/images/live.png",
//       to: "/entertainment",
//       icon: Music,
//     },
//     {
//       title: "Family-Friendly",
//       desc: "Perfect for all ages",
//       img: "/images/family.png",
//       to: "/family",
//       icon: Users,
//     },
//     {
//       title: "Water Aerobics",
//       desc: "Fitness in the pool",
//       img: "/images/aero.png",
//       to: "/entertainment/water-aerobics",
//       icon: Calendar,
//     },
//     {
//       title: "Beach Access",
//       desc: "Direct access to the beach",
//       img: "/images/bech.png",
//       to: "/beach",
//       icon: Waves,
//     },
//   ];

//   return (
//     <Layout>
//       {/* SEO */}
//       <title>The Seaside Sips - Beachfront Restaurant & Bar in Mtwapa</title>
//       <meta
//         name="description"
//         content="Experience beachfront dining, swimming pool, live music, and ocean views at The Seaside Sips in Mtwapa Beach. Where coast meets happiness."
//       />

//       {/* HERO SECTION */}
//       <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
//         <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-90"></div>

//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
//             Where Coast Meets Happiness
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-white/90">
//             Experience the perfect blend of beachfront dining, refreshing pool, and unforgettable entertainment
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" variant="secondary" className="text-lg">
//               <Link to="/contact">Book Your Visit</Link>
//             </Button>

//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/50"
//             >
//               <Link to="/offers">Explore Offerings</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* WELCOME SECTION */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to The Seaside Sips</h2>

//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Nestled along the pristine shores of Mtwapa Beach, The Seaside Sips offers an unparalleled coastal experience.
//             Our beachfront restaurant combines fresh, delicious cuisine with breathtaking ocean views.
//             Whether you're lounging by our sparkling pool, enjoying a refreshing drink at the bar,
//             or relaxing in our makuti gazebos, every moment brings you coastal bliss.
//           </p>
//         </div>
//       </section>

//       {/* 🔥 NEW HIGHLIGHTS GRID (MERGED + UPDATED) */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience Our Highlights</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {highlights.map((item, i) => (
//               <Link key={i} to={item.to}>
//                 <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
//                   <div className="h-40 w-full bg-gray-200 relative">
//                     <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
//                   </div>

//                   <CardHeader className="text-center">
//                     <item.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
//                     <CardTitle>{item.title}</CardTitle>
//                   </CardHeader>

//                   <CardContent>
//                     <p className="text-center text-muted-foreground text-sm">{item.desc}</p>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Paradise?</h2>
//           <p className="text-lg text-muted-foreground mb-8">
//             Join us for an unforgettable day by the ocean. Perfect for families, friends, and celebrations.
//           </p>

//           <Button asChild size="lg" className="text-lg">
//             <Link to="/contact">Get in Touch</Link>
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// }





import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Waves,
  Music,
  UtensilsCrossed,
  Wine,
  Palmtree,
  Users,
  Calendar,
  Droplets,
} from "lucide-react";

export default function Home() {
  // 🔥 NEW merged highlight cards (with images + correct routes) — ICONS REMOVED FROM DISPLAY
  const highlights = [
    {
      title: "Beachfront Restaurant",
      desc: "Fresh cuisine with ocean views",
      img: "/images/hero.png",
      to: "/nine",
      icon: UtensilsCrossed,
    },
    {
      title: "Full-Service Bar",
      desc: "Premium drinks & cocktails",
      img: "/images/bar.png",
      to: "/bar",
      icon: Wine,
    },
    {
      title: "Swimming Pool",
      desc: "Relax in our pristine pool",
      img: "/images/swim.png",
      to: "/pool",
      icon: Droplets,
    },
    {
      title: "Garden Makuti Gazebos",
      desc: "Tropical outdoor seating",
      img: "/images/gazebo.png",
      to: "/gazebo",
      icon: Palmtree,
    },
    {
      title: "Live Entertainment",
      desc: "Music, DJ & Karaoke nights",
      img: "/images/live.png",
      to: "/entertainment",
      icon: Music,
    },
    {
      title: "Family-Friendly",
      desc: "Perfect for all ages",
      img: "/images/family.png",
      to: "/family",
      icon: Users,
    },
    {
      title: "Water Aerobics",
      desc: "Fitness in the pool",
      img: "/images/aero.png",
      to: "/entertainment/water-aerobics",
      icon: Calendar,
    },
    {
      title: "Beach Access",
      desc: "Direct access to the beach",
      img: "/images/bech.png",
      to: "/beach",
      icon: Waves,
    },
  ];

  return (
    <Layout>
      {/* SEO */}
      <title>The Seaside Sips - Beachfront Restaurant & Bar in Mtwapa</title>
      <meta
        name="description"
        content="Experience beachfront dining, swimming pool, live music, and ocean views at The Seaside Sips in Mtwapa Beach. Where coast meets happiness."
      />

      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-90"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Where Coast Meets Happiness
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience the perfect blend of beachfront dining, refreshing pool, and unforgettable entertainment
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">Book Your Visit</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/50"
            >
              <Link to="/offers">Explore Offerings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to The Seaside Sips</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Nestled along the pristine shores of Mtwapa Beach, The Seaside Sips offers an unparalleled coastal experience.
            Our beachfront restaurant combines fresh, delicious cuisine with breathtaking ocean views.
            Whether you're lounging by our sparkling pool, enjoying a refreshing drink at the bar,
            or relaxing in our makuti gazebos, every moment brings you coastal bliss.
          </p>
        </div>
      </section>

      {/* 🔥 NEW HIGHLIGHTS GRID — ICONS REMOVED */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience Our Highlights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <Link key={i} to={item.to}>
                <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
                  <div className="h-40 w-full bg-gray-200 relative">
                    <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                  </div>

                  <CardHeader className="text-center">
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-center text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Paradise?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us for an unforgettable day by the ocean. Perfect for families, friends, and celebrations.
          </p>

          <Button asChild size="lg" className="text-lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
