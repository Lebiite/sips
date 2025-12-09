// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const highlights = [
//     {
//       title: "Cocktails",
//       desc: "Signature mixes, classics & tropical creations",
//       img: "/images/hero.png",
//       to: "/cocktails",
//     },
//     {
//       title: "Mocktails",
//       desc: "Fresh, vibrant non-alcoholic blends",
//       img: "/images/hero.png",
//       to: "/mocktails",
//     },
//     {
//       title: "Beers",
//       desc: "Local & imported ice-cold beers",
//       img: "/images/hero.png",
//       to: "/beers",
//     },
//     {
//       title: "Wines",
//       desc: "Red, white, rosé & sparkling collection",
//       img: "/images/hero.png",
//       to: "/wines",
//     },
//     {
//       title: "Whiskey",
//       desc: "Premium selections from around the world",
//       img: "/images/hero.png",
//       to: "/whiskey",
//     },
//     {
//       title: "Rum & Vodka",
//       desc: "Smooth spirits perfect for mixing or neat",
//       img: "/images/hero.png",
//       to: "/spirits",
//     },
//     {
//       title: "Specialty Shots",
//       desc: "Fun, bold and flavor-packed",
//       img: "/images/hero.png",
//       to: "/shots",
//     },
//     {
//       title: "Fresh Juices",
//       desc: "Natural, refreshing & made to order",
//       img: "/images/hero.png",
//       to: "/juices",
//     },
//   ];

//   return (
//     <Layout>
//       {/* SEO */}
//       <title>The Seaside Sips Bar - Cocktails, Spirits & Ocean Views</title>
//       <meta
//         name="description"
//         content="Experience handcrafted cocktails, premium spirits, beachfront drinking spots and live entertainment at The Seaside Sips Bar."
//       />

//       {/* HERO SECTION */}
//       <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
//         <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-90"></div>

//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
//             Your Beachfront Bar Escape
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-white/90">
//             Sip premium cocktails, unwind with ocean views, and enjoy unforgettable nightlife vibes.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" variant="secondary" className="text-lg">
//               <Link to="/bar-menu">View Bar Menu</Link>
//             </Button>

//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/50"
//             >
//               <Link to="/contact">Reserve a Table</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* WELCOME SECTION */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Welcome to The Seaside Sips Bar
//           </h2>

//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Discover the ultimate beachfront bar experience. From handcrafted cocktails to premium
//             spirits, our bar delivers refreshing drinks and a relaxing coastal atmosphere. Enjoy your
//             favorite drink in our lounge, gazebos, or right by the ocean waves.
//           </p>
//         </div>
//       </section>

//       {/* BAR HIGHLIGHTS */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Explore Our Bar Highlights
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {highlights.map((item, i) => (
//               <Link key={i} to={item.to}>
//                 <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
//                   <div className="h-40 w-full bg-gray-200 relative">
//                     <img
//                       src={item.img}
//                       className="w-full h-full object-cover"
//                       alt={item.title}
//                     />
//                   </div>

//                   <CardHeader className="text-center">
//                     {/* ICON REMOVED */}
//                     <CardTitle>{item.title}</CardTitle>
//                   </CardHeader>

//                   <CardContent>
//                     <p className="text-center text-muted-foreground text-sm">
//                       {item.desc}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }



// import { Layout } from "@/components/Layout";
// import { Link } from "react-router-dom";

// export default function Bar() {
//   const categories = [
//     {
//       title: "Cocktails",
//       to: "/cocktails",
//       img: "/images/hero.png",
//     },
//     {
//       title: "Mocktails",
//       to: "/mocktails",
//       img: "/images/hero.png",
//     },
//     {
//       title: "Beers",
//       to: "/beers",
//       img: "/images/hero.png",
//     },
//     {
//       title: "Wines",
//       to: "/wines",
//       img: "/images/hero.png",
//     },
//     {
//       title: "Whiskey",
//       to: "/whiskey",
//       img: "/images/hero.png",
//     },
//     {
//       title: "Rum & Vodka",
//       to: "/spirits",
//       img: "/images/hero.png",
//     },
//     {
//       title: "Specialty Shots",
//       to: "/shots",
//       img: "/images/hero.png",
//     },
//     {
//       title: "Fresh Juices",
//       to: "/juices",
//       img: "/images/hero.png",
//     },
//   ];

//   return (
//     <Layout>
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h1 className="text-4xl font-bold text-center mb-8">Bar Menu</h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, i) => (
//               <Link
//                 key={i}
//                 to={item.to}
//                 className="rounded-xl overflow-hidden shadow bg-white hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-40 object-cover"
//                   alt={item.title}
//                 />

//                 <div className="p-4 text-center">
//                   <p className="font-semibold text-lg">{item.title}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }




// import { Layout } from "@/components/Layout";
// import { Link } from "react-router-dom";

// export default function Bar() {
//   const categories = [
//     { title: "Cocktails", slug: "cocktails", img: "/images/hero.png" },
//     { title: "Mocktails", slug: "mocktails", img: "/images/hero.png" },
//     { title: "Beers", slug: "beers", img: "/images/hero.png" },
//     { title: "Wines", slug: "wines", img: "/images/hero.png" },
//     { title: "Whiskey", slug: "whiskey", img: "/images/hero.png" },
//     { title: "Rum & Vodka", slug: "spirits", img: "/images/hero.png" },
//     { title: "Specialty Shots", slug: "shots", img: "/images/hero.png" },
//     { title: "Fresh Juices", slug: "juices", img: "/images/hero.png" },
//   ];

//   return (
//     <Layout>
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h1 className="text-4xl font-bold text-center mb-8">Bar Menu</h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/drinks/${item.slug}`}
//                 className="rounded-xl overflow-hidden shadow bg-white hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-40 object-cover"
//                   alt={item.title}
//                 />

//                 <div className="p-4 text-center">
//                   <p className="font-semibold text-lg">{item.title}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }




// import { Layout } from "@/components/Layout";
// import { Link } from "react-router-dom";

// export default function Bar() {
//   const categories = [
//     { title: "Cocktails", slug: "cocktails", img: "/images/hero.png" },
//     { title: "Mocktails", slug: "mocktails", img: "/images/hero.png" },
//     { title: "Beers", slug: "beers", img: "/images/hero.png" },
//     { title: "Wines", slug: "wines", img: "/images/hero.png" },
//     { title: "Whiskey", slug: "whiskey", img: "/images/hero.png" },
//     { title: "Rum & Vodka", slug: "spirits", img: "/images/hero.png" },
//     { title: "Specialty Shots", slug: "shots", img: "/images/hero.png" },
//     { title: "Fresh Juices", slug: "juices", img: "/images/hero.png" },
//   ];

//   return (
//     <Layout>
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h1 className="text-4xl font-bold text-center mb-8">Bar Menu</h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/drinks/${item.slug}`}
//                 className="rounded-xl overflow-hidden shadow bg-white hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-40 object-cover"
//                   alt={item.title}
//                 />

//                 <div className="p-4 text-center">
//                   <p className="font-semibold text-lg">{item.title}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }



// // src/pages/Bar.tsx
// import { Layout } from "@/components/Layout";
// import { Link } from "react-router-dom";

// export default function Bar() {
//   // MUST match backend "category" exactly
//   const categories = [
//     { title: "Whiskey", slug: "whiskey", img: "/images/hero.png" },
//     { title: "Rum & Vodka", slug: "rum_vodka", img: "/images/hero.png" },
//     { title: "Specialty Shots", slug: "specialty_shots", img: "/images/hero.png" },
//     { title: "Fresh Juices", slug: "fresh_juices", img: "/images/hero.png" },
//     { title: "Cocktails", slug: "cocktails", img: "/images/hero.png" },
//     { title: "Beers", slug: "beers", img: "/images/hero.png" },
//     { title: "Wines", slug: "wines", img: "/images/hero.png" },
//     { title: "Gin", slug: "gin", img: "/images/hero.png" },
//     { title: "Tequila", slug: "tequila", img: "/images/hero.png" },
//     { title: "Brandy", slug: "brandy", img: "/images/hero.png" },
//   ];

//   return (
//     <Layout>
//       <section className="py-12 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h1 className="text-4xl font-bold text-center mb-8">Bar Menu</h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/drinks/${item.slug}`}
//                 className="rounded-xl overflow-hidden shadow bg-white hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-40 object-cover"
//                   alt={item.title}
//                 />

//                 <div className="p-4 text-center">
//                   <p className="font-semibold text-lg">{item.title}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }



// // src/pages/Bar.tsx
// import { Layout } from "@/components/Layout";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// export default function Bar() {
//   // MUST match backend "category" exactly
//   const categories = [
//     { title: "Whiskey", slug: "whiskey", img: "/images/hero.png" },
//     { title: "Rum & Vodka", slug: "rum_vodka", img: "/images/hero.png" },
//     { title: "Specialty Shots", slug: "specialty_shots", img: "/images/hero.png" },
//     { title: "Fresh Juices", slug: "fresh_juices", img: "/images/hero.png" },
//     { title: "Cocktails", slug: "cocktails", img: "/images/hero.png" },
//     { title: "Beers", slug: "beers", img: "/images/hero.png" },
//     { title: "Wines", slug: "wines", img: "/images/hero.png" },
//     { title: "Gin", slug: "gin", img: "/images/hero.png" },
//     { title: "Tequila", slug: "tequila", img: "/images/hero.png" },
//     { title: "Brandy", slug: "brandy", img: "/images/hero.png" },
//   ];

//   return (
//     <Layout>
//       {/* -------------------- HERO SECTION -------------------- */}
//       <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
//         {/* Background overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-black/60"></div>

//         {/* Background image */}
//         <div className="absolute inset-0 bg-[url('/images/bar-hero.jpg')] bg-cover bg-center opacity-90"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             Bar Menu
//           </h1>
//           <p className="text-lg md:text-xl text-white/80 mb-6">
//             Explore our selection of premium drinks, cocktails, and specialty servings.
//           </p>

//           {/* <Button
//             asChild
//             size="lg"
//             variant="secondary"
//             className="text-lg"
//           >
//             <Link to="#categories">Browse Drinks</Link>
//           </Button> */}
//         </div>
//       </section>

//       {/* -------------------- CATEGORIES GRID -------------------- */}
//       <section id="categories" className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//             Choose a Drink Category
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/drinks/${item.slug}`}
//                 className="rounded-xl overflow-hidden shadow bg-white hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-40 object-cover"
//                   alt={item.title}
//                 />

//                 <div className="p-4 text-center">
//                   <p className="font-semibold text-lg">{item.title}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }



// // src/pages/Bar.tsx
// import { Layout } from "@/components/Layout";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// export default function Bar() {
//   const categories = [
//     { title: "Whiskey", slug: "whiskey", img: "/images/hero.png" },
//     { title: "Rum & Vodka", slug: "rum_vodka", img: "/images/hero.png" },
//     { title: "Specialty Shots", slug: "specialty_shots", img: "/images/hero.png" },
//     { title: "Fresh Juices", slug: "fresh_juices", img: "/images/hero.png" },
//     { title: "Cocktails", slug: "cocktails", img: "/images/hero.png" },
//     { title: "Beers", slug: "beers", img: "/images/hero.png" },
//     { title: "Wines", slug: "wines", img: "/images/hero.png" },
//     { title: "Gin", slug: "gin", img: "/images/hero.png" },
//     { title: "Tequila", slug: "tequila", img: "/images/hero.png" },
//     { title: "Brandy", slug: "brandy", img: "/images/hero.png" },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
//          <div className="absolute inset-0 bg-[url('/images/fd.png')] bg-cover bg-center opacity-90"></div>

//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
//             Discover Premium Drinks
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-white/90">
//             Explore cocktails, whiskeys, beers, wines & more — crafted to perfection.
//           </p>
//         </div>
//       </section>

//       {/* -------------------- CATEGORIES GRID -------------------- */}
//       <section id="categories" className="py-16 px-4">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//             Choose a Drink Category
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/drinks/${item.slug}`}
//                 className="rounded-xl overflow-hidden shadow bg-white hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-40 object-cover"
//                   alt={item.title}
//                 />

//                 <div className="p-4 text-center">
//                   <p className="font-semibold text-lg">{item.title}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }



// // src/pages/Bar.tsx
// import { Layout } from "@/components/Layout";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// export default function Bar() {
//   const categories = [
//     { title: "Whiskey", slug: "whiskey", img: "/images/hero.png" },
//     { title: "Rum & Vodka", slug: "rum_vodka", img: "/images/hero.png" },
//     { title: "Specialty Shots", slug: "specialty_shots", img: "/images/hero.png" },
//     { title: "Fresh Juices", slug: "fresh_juices", img: "/images/hero.png" },
//     { title: "Cocktails", slug: "cocktails", img: "/images/hero.png" },
//     { title: "Beers", slug: "beers", img: "/images/hero.png" },
//     { title: "Wines", slug: "wines", img: "/images/hero.png" },
//     { title: "Gin", slug: "gin", img: "/images/hero.png" },
//     { title: "Tequila", slug: "tequila", img: "/images/hero.png" },
//     { title: "Brandy", slug: "brandy", img: "/images/hero.png" },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
//         <div className="absolute inset-0 bg-[url('/images/fd.png')] bg-cover bg-center opacity-90"></div>

//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
//             Discover Premium Drinks
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-white/90">
//             Explore cocktails, whiskeys, beers, wines & more — crafted to perfection.
//           </p>
//         </div>
//       </section>

//       {/* -------------------- CATEGORIES GRID -------------------- */}
//       <section id="categories" className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto max-w-5xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Choose a Drink Category
//           </h2>

//           {/* MATCHED EXACT CARD SIZE + STYLE */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, i) => (
//               <Link
//                 key={i}
//                 to={`/drinks/${item.slug}`}
//                 className="block"
//               >
//                 <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden">
                  
//                   {/* Match Home page card image proportions (same height look) */}
//                   <div className="w-full h-40 overflow-hidden">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="p-6 text-center">
//                     <h3 className="text-lg font-bold mb-1">{item.title}</h3>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }




// src/pages/Bar.tsx
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Bar() {
  const categories = [
    { title: "Whiskey", slug: "whiskey", img: "/images/hero.png" },
    { title: "Rum & Vodka", slug: "rum_vodka", img: "/images/hero.png" },
    { title: "Specialty Shots", slug: "specialty_shots", img: "/images/hero.png" },
    { title: "Fresh Juices", slug: "fresh_juices", img: "/images/hero.png" },
    { title: "Cocktails", slug: "cocktails", img: "/images/hero.png" },
    { title: "Beers", slug: "beers", img: "/images/hero.png" },
    { title: "Wines", slug: "wines", img: "/images/hero.png" },
    { title: "Gin", slug: "gin", img: "/images/hero.png" },
    { title: "Tequila", slug: "tequila", img: "/images/hero.png" },
    { title: "Brandy", slug: "brandy", img: "/images/hero.png" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
        <div className="absolute inset-0 bg-[url('/images/fd.png')] bg-cover bg-center opacity-90"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Premium Drinks
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Explore cocktails, whiskeys, beers, wines & more — crafted to perfection.
          </p>
        </div>
      </section>

      {/* -------------------- CATEGORIES GRID -------------------- */}
      <section id="categories" className="py-16 px-4 bg-muted/30">
        
        {/* FULL WIDTH LIKE OTHER PAGE (NO max-w-5xl) */}
        <div className="container mx-auto w-full">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose a Drink Category
          </h2>

          {/* Wide cards, reduced margins */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-full px-2">

            {categories.map((item, i) => (
              <Link
                key={i}
                to={`/drinks/${item.slug}`}
                className="block w-full"
              >
                <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden w-full">

                  {/* SAME HEIGHT AS YOUR OTHER PAGE */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
