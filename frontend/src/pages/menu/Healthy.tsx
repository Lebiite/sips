//perfect than any of the above
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

// ---------- IMPORT IMAGES ----------
import pizza1 from "@/assets/pizzas/pizza1.png";
import pizza2 from "@/assets/pizzas/pizza2.png";
import pizza3 from "@/assets/pizzas/pizza3.png";
import pizza4 from "@/assets/pizzas/pizza4.png";
import pizza5 from "@/assets/pizzas/pizza5.png";
import pizza6 from "@/assets/pizzas/pizza6.png";
import pizza7 from "@/assets/pizzas/pizza7.png";
import pizza8 from "@/assets/pizzas/pizza8.png";
import pizza9 from "@/assets/pizzas/pizza9.png";
import pizza10 from "@/assets/pizzas/pizza10.png";
import pizza11 from "@/assets/pizzas/pizza11.png";
import pizza12 from "@/assets/pizzas/pizza12.png";

// ---------- CATEGORY DATA ----------
const categories = [
  { title: "Classic", img: pizza1, desc: "Margherita, Pepperoni, Regina & more" },
  { title: "Nyama Choma", img: pizza2, desc: "Beef, goat & grilled meat fusion flavors" },
  { title: "Chicken", img: pizza3, desc: "BBQ chicken, tandoori & peri-peri flavors" },
  { title: "Seafood", img: pizza4, desc: "Fresh fish, prawns & calamari toppings" },
  { title: "Vegetarian", img: pizza5, desc: "Sukuma, spinach & fresh garden vegetables" },
  { title: "Thin Crust", img: pizza6, desc: "Crispy, light & stone-baked options" },
  { title: "Loaded", img: pizza7, desc: "Packed toppings with maximum flavor" },
  { title: "Specialty", img: pizza8, desc: "Unique chef creations & seasonal picks" },
  { title: "Signature", img: pizza9, desc: "Our chef’s most popular signature recipes" },
  { title: "Healthy", img: pizza10, desc: "Low-calorie, gluten-free & whole-grain options" },
  { title: "Fresh Herb", img: pizza11, desc: "Basil, coriander, parsley & other herbs" },
  { title: "All", img: pizza12, desc: "Browse our full Kenyan-inspired menu" },
];

// ---------- PIZZAS PER CATEGORY WITH PRICES ----------
const pizzasPerCategory = {
  classic: [
    { img: pizza1, title: "Classic Pizza 1", price: 1200 },
    { img: pizza2, title: "Classic Pizza 2", price: 1300 },
    { img: pizza3, title: "Classic Pizza 3", price: 1250 },
    { img: pizza4, title: "Classic Pizza 4", price: 1400 },
    { img: pizza5, title: "Classic Pizza 5", price: 1500 },
    { img: pizza6, title: "Classic Pizza 6", price: 1350 },
    { img: pizza7, title: "Classic Pizza 7", price: 1450 },
    { img: pizza8, title: "Classic Pizza 8", price: 1550 },
    { img: pizza9, title: "Classic Pizza 9", price: 1600 },
    { img: pizza10, title: "Classic Pizza 10", price: 1700 },
    { img: pizza11, title: "Classic Pizza 11", price: 1650 },
    { img: pizza12, title: "Classic Pizza 12", price: 1800 },
  ],
  "nyama-choma": Array.from({ length: 12 }).map((_, i) => ({
    img: pizza2,
    title: `Nyama Choma Pizza ${i + 1}`,
    price: 1500 + i * 50,
  })),
  chicken: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza3,
    title: `Chicken Pizza ${i + 1}`,
    price: 1400 + i * 50,
  })),
  vegetarian: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza5,
    title: `Vegetarian Pizza ${i + 1}`,
    price: 1300 + i * 50,
  })),
  seafood: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza4,
    title: `Seafood Pizza ${i + 1}`,
    price: 1600 + i * 50,
  })),
  "thin-crust": Array.from({ length: 12 }).map((_, i) => ({
    img: pizza6,
    title: `Thin Crust Pizza ${i + 1}`,
    price: 1350 + i * 50,
  })),
  loaded: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza7,
    title: `Loaded Pizza ${i + 1}`,
    price: 1450 + i * 50,
  })),
  specialty: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza8,
    title: `Specialty Pizza ${i + 1}`,
    price: 1550 + i * 50,
  })),
  signature: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza9,
    title: `Signature Pizza ${i + 1}`,
    price: 1650 + i * 50,
  })),
  healthy: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza10,
    title: `Healthy Pizza ${i + 1}`,
    price: 1500 + i * 50,
  })),
  herbs: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza11,
    title: `Fresh Herb Pizza ${i + 1}`,
    price: 1400 + i * 50,
  })),
  all: Array.from({ length: 12 }).map((_, i) => ({
    img: pizza12,
    title: `Pizza ${i + 1}`,
    price: 1500 + i * 50,
  })),
};

export default function PizzaPage() {
  const { category } = useParams();
  const { addToCart, getTotalItems } = useCart();

  // ---------- PAGE 1: SHOW 12 MAIN CATEGORIES ----------
  if (!category) {
    return (
      <Layout>
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Choose Your Pizza
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={`/pizza/${cat.title.toLowerCase().replace(/\s+/g,'-')}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-gray-200">
                        <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{cat.title}</h3>
                      <p className="text-sm text-muted-foreground">{cat.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/nine">
                <Button size="lg" className="px-6 py-3 bg-secondary text-white hover:bg-secondary/90">
                  Go to Main Menu (Nine)
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // ---------- PAGE 2: SHOW PIZZAS UNDER CATEGORY ----------
  const pizzas = pizzasPerCategory[category] || [];

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          {/* HEADER WITH CART BUTTON */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              {category.replace("-", " ").toUpperCase()}
            </h2>
            <div className="flex justify-end">
              <Button asChild variant="default" size="lg">
                <Link to="/cart" className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded">
                  <ShoppingCart className="h-5 w-5" />
                  Cart ({getTotalItems()})
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pizzas.map((pizza, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border border-gray-200">
                    <img src={pizza.img} alt={pizza.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{pizza.title}</h3>
                  <Badge variant="secondary" className="mb-2">
                    Ksh {pizza.price.toLocaleString()}
                  </Badge>
                  <Button
                    onClick={() =>
                      addToCart({
                        id: `${category}-${idx}`,
                        title: pizza.title,
                        price: pizza.price,
                        image_url: pizza.img,
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

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/nine">
              <Button size="lg" className="px-6 py-3 bg-secondary text-white hover:bg-secondary/90">
                Go to Main Menu (Nine)
              </Button>
            </Link>

            <Link to="/pizza">
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
