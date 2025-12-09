import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Waves } from 'lucide-react';

export default function SwimmingLessons() {
  const { data: lessons, isLoading } = useQuery({
    queryKey: ['swimming-lessons'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/swimming-lessons');
      if (!res.ok) throw new Error("Failed to fetch swimming lessons");
      return res.json();
    },
  });

  return (
    <Layout>
      <title>Swimming Lessons - The Seaside Sips</title>
      <meta 
        name="description" 
        content="Professional swimming lessons for all ages at The Seaside Sips with certified instructors." 
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Waves className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Swimming Lessons</h1>
          </div>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Learn to swim or improve your technique with our certified swimming instructors. 
              We offer lessons for all ages and skill levels, from beginners to advanced swimmers, 
              in a safe and supportive environment.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Available Lessons</h2>

          {/* Lessons List */}
          {isLoading ? (
            <p>Loading lessons...</p>
          ) : lessons && lessons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {lessons.map((lesson: any) => (
                <Card key={lesson._id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{lesson.title}</CardTitle>

                      {lesson.price && (
                        <Badge variant="secondary">
                          ${Number(lesson.price).toFixed(2)}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-2">
                  
                    {lesson.description && (
                      <p className="text-muted-foreground">{lesson.description}</p>
                    )}

                    <div className="flex items-center text-sm">
                      <span className="font-medium">Schedule:</span>
                      <span className="ml-2 text-muted-foreground">{lesson.schedule}</span>
                    </div>

                    {lesson.instructor && (
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Instructor:</span>
                        <span className="ml-2 text-muted-foreground">{lesson.instructor}</span>
                      </div>
                    )}

                    {lesson.max_participants && (
                      <div className="flex items-center text-sm">
                        <span className="font-medium">Max Students:</span>
                        <span className="ml-2 text-muted-foreground">{lesson.max_participants}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground mb-8">
              No swimming lessons available at the moment.
            </p>
          )}

          {/* CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Ready to Learn?</h3>
              <p className="text-muted-foreground mb-4">
                Contact us to enroll in swimming lessons or get more information about our programs and pricing.
              </p>

              <Button asChild size="lg">
                <Link to="/contact">Contact Us to Enroll</Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>
    </Layout>
  );
}
