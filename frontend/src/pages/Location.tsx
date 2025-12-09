import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <Layout>
      {/* SEO */}
      <title>Location - The Seaside Sips</title>
      <meta name="description" content="Find us at Mtwapa Beach Villas, 3 km from Mtwapa Town. Get directions to The Seaside Sips beachfront restaurant." />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
        <div className="absolute inset-0 bg-[url('/images/bea1.jpg')] bg-cover bg-center opacity-90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Find Us</h1>
          <p className="text-xl">Your Beachfront Paradise Awaits</p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Our Address</h2>
                    <p className="text-muted-foreground">
                      Mtwapa Beach Villas<br />
                      3 km from Mtwapa Town<br />
                      Mtwapa, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Navigation className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Getting Here</h3>
                    <p className="text-muted-foreground text-sm">
                      From Mtwapa Town, head towards the coast for approximately 3 km. 
                      Look for signs to Mtwapa Beach Villas. We're located right on the beach 
                      with ample parking available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Nearby Landmarks</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>3 km from Mtwapa Town Center</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Direct beach access on the Indian Ocean</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Easy access from Mombasa Road</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Near major hotels and resorts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Free parking available on-site</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7673829!2d39.73!3d-3.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTcnMzYuMCJTIDM5wrA0Myc0OC4wIkU!5e0!3m2!1sen!2ske!4v1234567890!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Seaside Sips Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              For directions or assistance finding us, call us at{" "}
              <a href="tel:0742522439" className="text-primary hover:underline font-semibold">
                0742 522 439
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}