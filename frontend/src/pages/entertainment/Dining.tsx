import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

export default function Dining() {
  return (
    <Layout>
      <title>Dining - The Seaside Sips</title>
      <meta name="description" content="Experience exquisite beachfront dining at The Seaside Sips with fresh seafood and local cuisine." />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Dining Experience</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At The Seaside Sips, we pride ourselves on delivering an exceptional beachfront dining experience. 
              Our menu features fresh seafood caught daily, authentic local cuisine, and international favorites, 
              all prepared by our skilled chefs using the finest ingredients.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Culinary Philosophy</h2>
            <p className="text-muted-foreground mb-4">
              We believe in the power of fresh, locally-sourced ingredients combined with expert culinary techniques. 
              Every dish is crafted to perfection, whether you're enjoying a casual lunch by the pool or a romantic 
              dinner under the stars with ocean views.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Fresh seafood selection delivered daily</li>
              <li>Traditional Swahili coastal cuisine</li>
              <li>International menu options</li>
              <li>Vegetarian and vegan-friendly dishes</li>
              <li>Kids menu available</li>
              <li>Private dining arrangements</li>
            </ul>

            <Card className="bg-primary/5 border-primary/20 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Ready to Dine With Us?</h3>
                <p className="text-muted-foreground mb-4">
                  Browse our full menu and place an order for pickup, or reserve a table for an unforgettable dining experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/menu">View Menu & Order</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Reserve a Table</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
