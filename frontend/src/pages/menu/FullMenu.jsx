// import { useEffect, useState } from "react";
// import axios from "axios";

// import { Layout } from "@/components/Layout";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function Menu() {
//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const API_URL = "http://localhost:5000/api/menu/full-menu";

//   useEffect(() => {
//     const fetchFoods = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         console.log("FULL MENU DATA:", response.data); // DEBUG

//         setFoods(response.data);
//       } catch (error) {
//         console.error("ERROR FETCHING FULL MENU:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFoods();
//   }, []);

//   if (loading) {
//     return (
//       <Layout>
//         <div className="p-10 text-center text-xl">Loading menu...</div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <section className="py-12 px-4">
//         <h1 className="text-4xl font-bold text-center mb-10">
//           Full Menu
//         </h1>

//         {foods.length === 0 && (
//           <p className="text-center text-muted-foreground">
//             No menu items found.
//           </p>
//         )}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {foods.map((item: any) => (
//             <Card key={item._id} className="hover:shadow-xl transition-all">
//               <CardContent className="p-4">
//                 <img
//                   src={
//                     item.image_url
//                       ? `http://localhost:5000${item.image_url}`
//                       : "/images/placeholder-food.png"
//                   }
//                   alt={item.title}
//                   className="w-full h-48 object-cover rounded-lg mb-4"
//                 />

//                 <h2 className="text-xl font-bold">{item.title}</h2>

//                 {item.category && (
//                   <p className="text-sm text-muted-foreground mb-2">
//                     {item.category.title}
//                   </p>
//                 )}

//                 <p className="text-primary font-semibold text-lg mb-4">
//                   KES {item.price}
//                 </p>

//                 <Button className="w-full">Order</Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </Layout>
//   );
// }
