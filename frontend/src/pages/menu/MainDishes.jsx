// src/pages/menu/main-dishes.tsx
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export default function DishesPage() {
  const { category } = useParams();
  const { addToCart, getTotalItems } = useCart();

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch dishes from backend
  useEffect(() => {
    if (!category) return;

    async function loadFoods() {
      try {
        const res = await fetch(`http://localhost:5000/api/menu/${category}`);
        const data = await res.json();
        setFoods(data);
      } catch (err) {
        console.error("❌ Failed to fetch foods:", err);
      } finally {
        setLoading(false);
      }
    }

    loadFoods();
  }, [category]);

  // ---------- PAGE 1: CATEGORY GRID ----------
  if (!category) {
    return (
      <Layout>
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Kenyan Main Dishes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "main-dishes",
                "pizza",
                "snacks",
                "breakfast",
                "healthy-choices",
                "desserts",
                "drinks",
                "full-menu",
              ].map((slug, idx) => (
                <Link key={idx} to={`/foods/${slug}`} className="block">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-2">
                        {slug.replace("-", " ").toUpperCase()}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // ---------- PAGE 2: DISHES ----------
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              {category.replace("-", " ").toUpperCase()}
            </h2>

            <Button asChild variant="default" size="lg">
              <Link
                to="/cart"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded"
              >
                <ShoppingCart className="h-5 w-5" />
                Cart ({getTotalItems()})
              </Link>
            </Button>
          </div>

          {/* LOADING */}
          {loading && <p className="text-center text-lg">Loading...</p>}

          {/* DISHES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foods.map((dish, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <CardContent className="p-6 text-center">

                  {/* 🔥 FIXED IMAGE FIELD — dish.image_url */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-gray-200">
                    <img
                      src={`http://localhost:5000${dish.image_url}`}
                      alt={dish.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-bold mb-2">{dish.title}</h3>

                  <Badge variant="secondary" className="mb-2">
                    Ksh {dish.price.toLocaleString()}
                  </Badge>

                  <Button
                    onClick={() =>
                      addToCart({
                        id: `${dish._id}`,
                        title: dish.title,
                        price: dish.price,
                        image_url: `http://localhost:5000${dish.image_url}`, // FIXED
                      })
                    }
                    className="w-full mt-2"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FOOTER */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/foods">
              <Button size="lg" className="px-6 py-3 bg-primary text-white hover:bg-primary/90">
                Back to Categories
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
}
