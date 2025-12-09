// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// // ---- Types ----
// interface Drink {
//   _id: string;
//   name: string;
//   slug: string;
//   category: string;
//   price: number;
//   description: string;
//   image: string;
// }

// export default function DrinkCategory() {
//   const { category } = useParams<{ category: string }>();
//   const [drinks, setDrinks] = useState<Drink[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!category) return;

//     fetch(`/api/drinks/${category}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setDrinks(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [category]);

//   if (loading) {
//     return (
//       <div className="container mx-auto py-10 text-center">
//         <h2 className="text-xl font-semibold">Loading Drinks...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-12">
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold mb-8 capitalize">
//         {category?.replace("-", " ")}
//       </h1>

//       {/* Drinks Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {drinks.map((drink) => (
//           <Card
//             key={drink._id}
//             className="hover:shadow-lg hover:scale-[1.02] transition overflow-hidden"
//           >
//             <div className="h-40 w-full bg-gray-100">
//               <img
//                 src={drink.image}
//                 alt={drink.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <CardContent className="p-4">
//               <h2 className="text-xl font-bold">{drink.name}</h2>
//               <p className="text-muted-foreground text-sm mb-3">
//                 {drink.description}
//               </p>

//               <div className="flex justify-between items-center">
//                 <span className="font-semibold text-lg">
//                   KSh {drink.price}
//                 </span>

//                 <Button
//                   size="sm"
//                   onClick={() => console.log("Add to cart:", drink)}
//                 >
//                   Add to Cart
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* If no drinks */}
//       {drinks.length === 0 && (
//         <p className="text-center text-muted-foreground mt-10">
//           No drinks found in this category.
//         </p>
//       )}
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// interface Drink {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// }

// export default function DrinkCategory() {
//   const { category } = useParams();
//   const [drinks, setDrinks] = useState<Drink[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDrinks = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/drinks/${category}`);
//         const data = await res.json();
//         setDrinks(data);
//       } catch (err) {
//         console.error("Error loading drinks", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDrinks();
//   }, [category]);

//   return (
//     <div className="px-4 py-6">
//       <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-2 gap-4">
//           {drinks.map((drink) => (
//             <div key={drink._id} className="rounded-xl bg-white shadow p-3">
//               <img
//                 src={drink.image}
//                 className="w-full h-28 object-cover rounded-md"
//               />

//               <h2 className="mt-2 font-semibold">{drink.name}</h2>
//               <p className="text-sm text-gray-500">{drink.description}</p>

//               <p className="mt-1 font-bold">Ksh {drink.price}</p>

//               <button className="bg-black text-white px-3 py-1 rounded-md mt-2 w-full">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



// // src/pages/DrinkCategory.tsx
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// interface Drink {
//   _id: string;
//   name: string;
//   price: number;
//   image?: string;
//   description?: string;
// }

// export default function DrinkCategory() {
//   const { category } = useParams<{ category?: string }>();
//   const [drinks, setDrinks] = useState<Drink[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!category) {
//       setDrinks([]);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     fetch(`http://localhost:5000/api/drinks/${encodeURIComponent(category)}`)
//       .then(async (res) => {
//         if (!res.ok) {
//           const txt = await res.text();
//           throw new Error(`Server returned ${res.status}: ${txt}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setDrinks(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => {
//         console.error("Failed to load drinks:", err);
//         setError("Failed to load drinks");
//       })
//       .finally(() => setLoading(false));
//   }, [category]);

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <h1 className="text-4xl font-bold mb-6 capitalize">{category || "Drinks"}</h1>

//       {loading && <p>Loading drinks…</p>}
//       {error && <p className="text-red-600">{error}</p>}

//       {!loading && !error && drinks.length === 0 && (
//         <p className="text-muted-foreground">No drinks found in this category.</p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {drinks.map((drink) => (
//           <Card key={drink._id} className="overflow-hidden hover:shadow-lg transition">
//             <div className="h-40 w-full bg-gray-100">
//               <img
//                 src={drink.image || "/images/hero.png"}
//                 alt={drink.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <CardContent className="p-4">
//               <h2 className="text-lg font-semibold">{drink.name}</h2>
//               {drink.description && <p className="text-sm text-muted-foreground mb-3">{drink.description}</p>}
//               <div className="flex justify-between items-center">
//                 <div className="font-semibold">KSh {drink.price}</div>
//                 <Button size="sm" onClick={() => console.log("Add to cart:", drink)}>
//                   Add to Cart
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }




// // src/pages/DrinkCategory.tsx
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// interface Drink {
//   _id: string;
//   name: string;
//   price: number;
//   image?: string;
//   description?: string;
// }

// const API_BASE = "http://localhost:5000";

// export default function DrinkCategory() {
//   const { category } = useParams<{ category?: string }>();
//   const [drinks, setDrinks] = useState<Drink[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!category) {
//       setDrinks([]);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     fetch(`${API_BASE}/api/drinks/${encodeURIComponent(category)}`)
//       .then(async (res) => {
//         if (!res.ok) {
//           const txt = await res.text();
//           throw new Error(`Server returned ${res.status}: ${txt}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setDrinks(Array.isArray(data) ? data : []);
//       })
//       .catch((err) => {
//         console.error("Failed to load drinks:", err);
//         setError("Failed to load drinks");
//       })
//       .finally(() => setLoading(false));
//   }, [category]);

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <h1 className="text-4xl font-bold mb-6 capitalize">
//         {category || "Drinks"}
//       </h1>

//       {loading && <p>Loading drinks…</p>}
//       {error && <p className="text-red-600">{error}</p>}

//       {!loading && !error && drinks.length === 0 && (
//         <p className="text-muted-foreground">No drinks found in this category.</p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {drinks.map((drink) => {
//           const imgSrc = drink.image
//             ? `${API_BASE}${drink.image}`
//             : "/images/hero.png";

//           return (
//             <Card key={drink._id} className="overflow-hidden hover:shadow-lg transition">
//               <div className="h-40 w-full bg-gray-100">
//                 <img
//                   src={imgSrc}
//                   alt={drink.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <CardContent className="p-4">
//                 <h2 className="text-lg font-semibold">{drink.name}</h2>
//                 {drink.description && (
//                   <p className="text-sm text-muted-foreground mb-3">
//                     {drink.description}
//                   </p>
//                 )}

//                 <div className="flex justify-between items-center">
//                   <div className="font-semibold">KSh {drink.price}</div>
//                   <Button size="sm" onClick={() => console.log("Add to cart:", drink)}>
//                     Add to Cart
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }





// // src/pages/DrinkCategory.tsx
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Layout } from "@/components/Layout";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ShoppingCart } from "lucide-react";
// import { useCart } from "@/contexts/CartContext";

// interface Drink {
//   _id: string;
//   name: string;
//   price: number;
//   image?: string;
//   description?: string;
// }

// const API_BASE = "http://localhost:5000";

// export default function DrinkCategory() {
//   const { category } = useParams<{ category?: string }>();
//   const { addToCart, getTotalItems } = useCart();

//   const [drinks, setDrinks] = useState<Drink[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Load drinks
//   useEffect(() => {
//     if (!category) return;

//     setLoading(true);
//     fetch(`${API_BASE}/api/drinks/${encodeURIComponent(category)}`)
//       .then((res) => res.json())
//       .then((data) => setDrinks(Array.isArray(data) ? data : []))
//       .catch(() => setError("Failed to load drinks"))
//       .finally(() => setLoading(false));
//   }, [category]);

//   return (
//     <Layout>
//       <section className="py-16 px-4">
//         <div className="container mx-auto text-center">

//           {/* HEADER */}
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold capitalize">
//               {category?.replace("-", " ") || "Drinks"}
//             </h2>

//             <Button asChild variant="default" size="lg">
//               <Link
//                 to="/cart"
//                 className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded"
//               >
//                 <ShoppingCart className="h-5 w-5" />
//                 Cart ({getTotalItems()})
//               </Link>
//             </Button>
//           </div>

//           {/* Loading */}
//           {loading && <p className="text-lg text-muted-foreground">Loading...</p>}
//           {error && <p className="text-red-600">{error}</p>}

//           {/* DRINKS GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {drinks.map((drink) => {
//               const imgSrc = drink.image
//                 ? `${API_BASE}${drink.image}`
//                 : "/images/hero.png";

//               return (
//                 <Card
//                   key={drink._id}
//                   className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
//                 >
//                   <CardContent className="p-6 text-center">

//                     {/* IMAGE */}
//                     <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-gray-200">
//                       <img
//                         src={imgSrc}
//                         alt={drink.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     <h3 className="text-lg font-bold mb-2">
//                       {drink.name}
//                     </h3>

//                     {drink.description && (
//                       <p className="text-sm text-muted-foreground mb-3">
//                         {drink.description}
//                       </p>
//                     )}

//                     <Badge variant="secondary" className="mb-2">
//                       KSh {drink.price}
//                     </Badge>

//                     <Button
//                       onClick={() =>
//                         addToCart({
//                           id: drink._id,
//                           title: drink.name,
//                           price: drink.price,
//                           image_url: imgSrc,
//                         })
//                       }
//                       className="w-full mt-2"
//                     >
//                       Add to Cart
//                     </Button>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {/* FOOTER / BACK BTN */}
//           <div className="mt-12 flex justify-center">
//             <Link to="/bar">
//               <Button size="lg" className="px-6 py-3 bg-primary text-white hover:bg-primary/90">
//                 Back to Bar Categories
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }



// src/pages/DrinkCategory.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface Drink {
  _id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
}

const API_BASE = "http://localhost:5000";

export default function DrinkCategory() {
  const { category } = useParams<{ category?: string }>();
  const { addToCart, getTotalItems } = useCart();

  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    async function loadDrinks() {
      try {
        const res = await fetch(`${API_BASE}/api/drinks/${category}`);
        const data = await res.json();
        setDrinks(data);
      } catch (err) {
        console.error("Drink fetch failed", err);
      } finally {
        setLoading(false);
      }
    }

    loadDrinks();
  }, [category]);

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">

          {/* ---------- HEADER ---------- */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold capitalize">
              {category?.replace("-", " ") || "Drinks"}
            </h2>

            <Button asChild size="lg">
              <Link
                to="/cart"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded"
              >
                <ShoppingCart className="h-5 w-5" />
                Cart ({getTotalItems()})
              </Link>
            </Button>
          </div>

          {/* ---------- LOADING ---------- */}
          {loading && <p className="text-lg">Loading drinks…</p>}

          {/* ---------- GRID ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {drinks.map((drink) => {
              const imgSrc = drink.image
                ? `${API_BASE}${drink.image}`
                : "/images/hero.png";

              return (
                <Card
                  key={drink._id}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <CardContent className="p-6 text-center">

                    {/* IMAGE */}
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-gray-200">
                      <img
                        src={imgSrc}
                        alt={drink.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-bold mb-2">{drink.name}</h3>

                    {drink.description && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {drink.description}
                      </p>
                    )}

                    <Badge variant="secondary" className="mb-2">
                      KSh {drink.price.toLocaleString()}
                    </Badge>

                    <Button
                      onClick={() =>
                        addToCart({
                          id: drink._id,
                          title: drink.name,
                          price: drink.price,
                          image_url: imgSrc,
                        })
                      }
                      className="w-full mt-2"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* ---------- FOOTER ---------- */}
          <div className="mt-12">
            <Link to="/bar">
              <Button size="lg" className="px-6 py-3 bg-primary text-white">
                Back to Bar Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
