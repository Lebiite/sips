// import { Layout } from "@/components/Layout";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Link } from "react-router-dom";
// import {
//   UtensilsCrossed,
//   Coffee,
//   Beef,
//   Salad,
//   Dessert,
//   Pizza,
//   Sandwich,
//   Beer,
// } from "lucide-react";

// // ---------- FOOD CATEGORIES (Replacing old highlights) ----------
// const categories = [
//   { icon: Beef, title: "Main Dishes", desc: "Grilled meats, chicken & seafood plates", slug: "main-dishes" },
//   { icon: Pizza, title: "Pizza", desc: "Wood-fired artisan pizza", slug: "pizza" },
//   { icon: Sandwich, title: "Snacks", desc: "Quick bites & light meals", slug: "snacks" },
//   { icon: Coffee, title: "Breakfast", desc: "Morning meals, coffee & pastries", slug: "breakfast" },
//   { icon: Salad, title: "Healthy Choices", desc: "Fresh salads & healthy bowls", slug: "healthy-choices" },
//   { icon: Dessert, title: "Desserts", desc: "Cakes, ice cream & sweet treats", slug: "desserts" },
//   { icon: Beer, title: "Drinks", desc: "Soft drinks, cocktails & alcoholic beverages", slug: "drinks" },
//   { icon: UtensilsCrossed, title: "Full Menu", desc: "Explore everything we offer", slug: "" },
//   //now you know make it happen 
// ];

// export default function Home() {
//   return (
//     <Layout>
//       {/* SEO */}
//       <title>The Seaside Sips - Food Menu & Restaurant</title>
//       <meta
//         name="description"
//         content="Browse our delicious menu categories including main dishes, breakfast, snacks, drinks, and desserts."
//       />

//       {/* Hero Section */}
//       <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
//          <div className="absolute inset-0 bg-[url('/images/fd.png')] bg-cover bg-center opacity-90"></div>

//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
//             Discover Delicious Moments
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-white/90">
//             Browse an exciting variety of meals, drinks & desserts crafted with passion
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" variant="secondary" className="text-lg">
//               <Link to="/menu">View Full Menu</Link>
//             </Button>
//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/50"
//             >
//               <Link to="/contact">Book a Table</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Welcome Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Our Menu</h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             Explore a wide variety of mouth-watering dishes prepared with the freshest ingredients.
//             From hearty main meals to refreshing drinks and decadent desserts, our menu has something
//             for every craving.
//           </p>
//         </div>
//       </section>

//       {/* Food Categories Grid */}
//       <section className="py-16 px-4 bg-muted/30">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Menu Categories</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {categories.map((item, index) => (
//               <Link key={index} to={`/foods/${item.slug}`} className="block">
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

//       {/* CTA Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Hungry? We’ve Got You.</h2>
//           <p className="text-lg text-muted-foreground mb-8">
//             Explore our menu and order your favorite meal today!
//           </p>
//           <Button asChild size="lg" className="text-lg">
//             <Link to="/menu">View All Dishes</Link>
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// }





import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// ---------- FOOD CATEGORIES WITH YOUR IMAGES ----------
const categories = [
  {
    img: "/images/fd.png",
    title: "Main Dishes",
    desc: "Grilled meats, chicken & seafood plates",
    slug: "main-dishes",
  },
  {
    img: "/images/fd.png",
    title: "Pizza",
    desc: "Wood-fired artisan pizza",
    slug: "pizza",
  },
  {
    img: "/images/fd.png",
    title: "Snacks",
    desc: "Quick bites & light meals",
    slug: "snacks",
  },
  {
    img: "/images/fd.png",
    title: "Breakfast",
    desc: "Morning meals, coffee & pastries",
    slug: "breakfast",
  },
  {
    img: "/images/fd.png",
    title: "Healthy Choices",
    desc: "Fresh salads & healthy bowls",
    slug: "healthy-choices",
  },
  {
    img: "/images/fd.png",
    title: "Desserts",
    desc: "Cakes, ice cream & sweet treats",
    slug: "desserts",
  },
  {
    img: "/images/fd.png",
    title: "Drinks",
    desc: "Soft drinks, cocktails & alcoholic beverages",
    slug: "drinks",
  },
  {
    img: "/images/fd.png",
    title: "Full Menu",
    desc: "Explore everything we offer",
    slug: "",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* SEO */}
      <title>The Seaside Sips - Food Menu & Restaurant</title>
      <meta
        name="description"
        content="Browse our delicious menu categories including main dishes, breakfast, snacks, drinks, and desserts."
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent"></div>
        <div className="absolute inset-0 bg-[url('/images/fd.png')] bg-cover bg-center opacity-90"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Delicious Moments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Browse an exciting variety of meals, drinks & desserts crafted with passion
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/menu">View Full Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/50"
            >
              <Link to="/contact">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Our Menu</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore a wide variety of mouth-watering dishes prepared with the freshest ingredients.
            From hearty main meals to refreshing drinks and decadent desserts, our menu has something
            for every craving.
          </p>
        </div>
      </section>

      {/* Food Categories Grid with YOUR IMAGES */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Menu Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <Link key={index} to={`/foods/${item.slug}`} className="block">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hungry? We’ve Got You.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our menu and order your favorite meal today!
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link to="/menu">View All Dishes</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
