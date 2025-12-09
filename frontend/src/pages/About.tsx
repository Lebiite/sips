import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <Layout>
      {/* SEO */}
      <title>About Us - The Seaside Sips</title>
      <meta name="description" content="Discover The Seaside Sips story - a beachfront paradise offering dining, pool, and entertainment in Mtwapa Beach, Kenya." />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
        <div className="absolute inset-0 bg-[url('/images/beach2.jpg')] bg-cover bg-center opacity-90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About The Seaside Sips</h1>
          <p className="text-xl">Your Coastal Haven in Mtwapa</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Coastal Ambiance & Fresh Air</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Seaside Sips is more than just a restaurant—it's an experience. Situated right on the breathtaking 
                Mtwapa Beach, we offer guests the rare opportunity to dine with their toes in the sand while breathing in 
                the fresh, salty ocean air. The gentle sound of waves creates a natural soundtrack to your meal, making 
                every visit feel like a mini-vacation.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Scenic Ocean Views</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our prime beachfront location provides unobstructed, panoramic views of the Indian Ocean. Watch the sunrise 
                paint the sky in vibrant colors, see fishing boats glide across the horizon, or simply gaze at the endless 
                blue expanse. Whether you're here for breakfast, lunch, or dinner, the view is always spectacular.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Exceptional Dining Experience</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our menu features fresh seafood caught daily, alongside international and local favorites prepared by our 
                skilled chefs. We pride ourselves on using the freshest ingredients to create dishes that delight the palate. 
                From casual lunches to romantic dinners, every meal is crafted with care and served with genuine coastal hospitality.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Garden Makuti Gazebos</h2>
              <p className="text-muted-foreground leading-relaxed">
                For those seeking a more intimate dining experience, our traditional makuti gazebos nestled in lush tropical 
                gardens provide the perfect setting. These charming thatched structures offer shade and privacy while still 
                allowing you to enjoy the coastal breeze and natural beauty surrounding you. Ideal for family gatherings or 
                romantic evenings.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Poolside Seating</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our sparkling swimming pool area features comfortable lounge chairs and dining tables where you can enjoy your 
                meal while taking in the vibrant atmosphere. It's the perfect spot for families—children can play safely in the 
                pool while parents relax nearby with a refreshing drink or delicious meal.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Indoor Dining Lounge</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you prefer air-conditioned comfort, our elegant indoor lounge offers a sophisticated alternative. With 
                modern décor, comfortable seating, and large windows that still frame those magnificent ocean views, it's perfect 
                for business lunches, special celebrations, or simply escaping the midday heat while enjoying your meal in style.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Family-Friendly Environment</h2>
              <p className="text-muted-foreground leading-relaxed">
                At The Seaside Sips, we welcome guests of all ages. Our facility is designed with families in mind, offering 
                swimming lessons for children, safe pool areas, spacious grounds for kids to explore, and a menu that caters 
                to even the pickiest young eaters. Parents can relax knowing their children are entertained and safe while 
                everyone enjoys this beautiful coastal paradise together.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}