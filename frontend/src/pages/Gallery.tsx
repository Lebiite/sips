import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star, Image as ImageIcon } from "lucide-react";

// ---------- IMPORT LOCAL IMAGES ----------
import beach1 from "@/assets/events/beach-wedding/1.png";
import beach2 from "@/assets/events/beach-wedding/2.png";
import beach3 from "@/assets/events/beach-wedding/3.png";
import beach4 from "@/assets/events/beach-wedding/4.png";

import corporate1 from "@/assets/events/corporate/1.png";
import corporate2 from "@/assets/events/corporate/2.png";
import corporate3 from "@/assets/events/corporate/3.png";

import birthday1 from "@/assets/events/birthday/1.png";
import birthday2 from "@/assets/events/birthday/2.png";
import birthday3 from "@/assets/events/birthday/3.png";
import birthday4 from "@/assets/events/birthday/4.png";

export default function Gallery() {
  const events = [
    {
      title: "Beachside Wedding Ceremony",
      date: "12th August 2024",
      rating: 5,
      description:
        "A beautiful beachfront wedding featuring tropical décor, live music, and a sunset backdrop. The couple exchanged vows by the shoreline followed by a reception filled with joy, dancing, and gourmet dining.",
      images: [beach1, beach2, beach3, beach4],
    },
    {
      title: "Corporate Networking Event",
      date: "4th July 2024",
      rating: 4,
      description:
        "A professional yet relaxed corporate gathering hosted on our beachfront terrace. Executives enjoyed cocktails, presentations, and networking opportunities accompanied by ocean views and elegant ambiance.",
      images: [corporate1, corporate2, corporate3],
    },
    {
      title: "Sunset Birthday Celebration",
      date: "19th March 2024",
      rating: 4.5,
      description:
        "A lively birthday celebration featuring a custom beachside setup, themed decorations, and entertainment. Guests enjoyed handcrafted cocktails, a live DJ, and a stunning sunset experience.",
      images: [birthday1, birthday2, birthday3, birthday4],
    },
  ];

  // Render filled stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-300" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
      }
    }
    return <div className="flex gap-1 mb-2">{stars}</div>;
  };

  return (
    <Layout>
      <title>Event Gallery - The Seaside Sips</title>
      <meta
        name="description"
        content="View our album-style event gallery showcasing weddings, corporate events, birthday celebrations, and more hosted at The Seaside Sips."
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Event Gallery</h1>
          </div>

          {/* Loop Through Events */}
          {events.map((event, index) => (
            <div key={index} className="mb-16">
              {/* Title + Date */}
              <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="h-5 w-5" />
                <span>{event.date}</span>
              </div>

              {/* Star Rating */}
              {renderStars(event.rating)}

              {/* Description */}
              <p className="text-muted-foreground mb-6">{event.description}</p>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {event.images.map((img, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={img}
                        alt={`${event.title} photo ${i + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-primary/20 my-10"></div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
