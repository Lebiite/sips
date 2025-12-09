import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  UtensilsCrossed,
  Wine,
  Droplets,
  Waves,
  Users,
  PartyPopper,
  Calendar,
  GlassWater,
} from 'lucide-react';

// ✅ MANUAL LINKS HERE — Edit anytime
const offers = [
  {
    icon: UtensilsCrossed,
    title: "Dining",
    link: "/dining", // <-- CHANGE LINK HERE
    description:
      "Indulge in our diverse menu featuring fresh seafood, grilled specialties, and international cuisine. Our chefs prepare each dish with locally-sourced ingredients and coastal-inspired flavors. From light appetizers to hearty main courses, every meal is an experience to savor.",
  },
  {
    icon: Wine,
    title: "Bar",
    link: "/bar", // <-- CHANGE LINK HERE
    description:
      "Our full-service bar offers an extensive selection of premium spirits, craft cocktails, local and imported beers, and fine wines. Whether you prefer a classic mojito, a tropical fruit punch, or a smooth whiskey on the rocks, our skilled bartenders will craft the perfect drink for you.",
  },
  {
    icon: Droplets,
    title: "Swimming Pool",
    link: "/swimming-pool", // <-- CHANGE LINK HERE
    description:
      "Dive into our crystal-clear swimming pool, designed for both relaxation and recreation. With separate areas for children and adults, comfortable sun loungers, and poolside service, it's the perfect place to cool off and unwind. Open daily from 8:00 AM to 6:30 PM.",
  },
  {
    icon: GlassWater,
    title: "Water Aerobics",
    link: "/entertainment/water-aerobics", // <-- CHANGE LINK HERE
    description:
      "Join our energizing water aerobics sessions led by certified instructors. These low-impact, high-energy workouts are perfect for all fitness levels. Burn calories, improve cardiovascular health, and have fun—all while enjoying the refreshing pool environment.",
  },
  {
    icon: Users,
    title: "Swimming Lessons",
    link: "/swimming-lessons", // <-- CHANGE LINK HERE
    description:
      "Learn to swim or improve your technique with our professional swimming instructors. We offer lessons for all ages and skill levels, from beginners to advanced swimmers.",
  },
  {
    icon: Waves,
    title: "Beach Access",
    link: "/beach-access", // <-- CHANGE LINK HERE
    description:
      "Step directly from our facility onto the beautiful Mtwapa Beach. Enjoy pristine white sand, warm Indian Ocean waters, and stunning coastal views.",
  },
  {
    icon: PartyPopper,
    title: "Event Hosting",
    link: "/hosting", // <-- CHANGE LINK HERE
    description:
      "Host your special occasions with us! From birthday parties to corporate events and weddings, we provide the perfect beachfront venue with full planning services.",
  },
  {
    icon: Calendar,
    title: "Monthly Wine Tasting",
    link: "/monthly-wine-tasting", // <-- CHANGE LINK HERE
    description:
      "Join our monthly wine tasting events. Sample selected wines paired with gourmet appetizers while learning from expert hosts. Booking required.",
  },
];

export default function Offers() {
  return (
    <Layout>
      {/* SEO */}
      <title>What We Offer - The Seaside Sips</title>
      <meta
        name="description"
        content="Explore our beachfront dining, swimming pool, water aerobics, swimming lessons, beach access, event hosting, and monthly wine tasting at The Seaside Sips."
      />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
        <div className="absolute inset-0 bg-[url('/images/pi.jpg')] bg-cover bg-center opacity-100"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">What We Offer</h1>
          <p className="text-xl">Everything You Need for the Perfect Coastal Experience</p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer, index) => (
              <Link key={index} to={offer.link}>
                <Card className="hover:shadow-xl cursor-pointer transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <offer.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{offer.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {offer.description}
                    </p>
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
