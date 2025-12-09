import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

// ------------------------------
// Types based on your backend
// ------------------------------

type Category = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
};

type MenuItem = {
  _id: string;
  title: string;
  description?: string;
  price: number;
  image_url?: string;
  category?: Category; // populated by backend
};

export default function Menu() {
  const { addToCart, getTotalItems } = useCart();

  // ------------------------------------------------------------
  // Fetch from your Node backend instead of Supabase
  // ------------------------------------------------------------
  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ["menu-items"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/menu/full-menu");
      if (!res.ok) throw new Error("Failed to fetch menu");
      return res.json();
    },
  });

  // ------------------------------------------------------------
  // Group items by category title
  // ------------------------------------------------------------
  const groupedItems = menuItems?.reduce((acc, item) => {
    const categoryName = item.category?.title || "Uncategorized";
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  // ------------------------------------------------------------
  // Loading state
  // ------------------------------------------------------------
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          <p>Loading menu...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <title>Menu - The Seaside Sips</title>

      {/* Header */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
              <p className="text-lg text-muted-foreground">
                Fresh cuisine with ocean views
              </p>
            </div>

            <Button asChild variant="default" size="lg">
              <Link to="/cart">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart ({getTotalItems()})
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {groupedItems &&
            Object.keys(groupedItems).map((category) => (
              <div key={category} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 capitalize">
                  {category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedItems[category].map((item) => (
                    <Card
                      key={item._id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      )}

                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <Badge variant="secondary" className="ml-2">
                            ${item.price.toFixed(2)}
                          </Badge>
                        </div>

                        {item.description && (
                          <CardDescription>{item.description}</CardDescription>
                        )}
                      </CardHeader>

                      <CardContent>
                        <Button
                          onClick={() =>
                            addToCart({
                              id: item._id,
                              title: item.title,
                              price: item.price,
                              image_url: item.image_url,
                            })
                          }
                          className="w-full"
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

          {/* Empty state */}
          {(!groupedItems || Object.keys(groupedItems).length === 0) && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No menu items available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
