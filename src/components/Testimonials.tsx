import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content: "EliteChaplin transformed our vision into a stunning reality. Their attention to detail and creative approach exceeded all our expectations. The website they built is not just beautiful, but converts visitors into customers.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      company: "Studio Pixel",
      content: "Working with EliteChaplin on our video projects has been incredible. Their AI-powered editing techniques and cinematic storytelling brought our content to life in ways we never imagined possible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "Bliss Weddings",
      content: "Our wedding album website is absolutely breathtaking! They captured the emotion and beauty of every moment. Our clients are always amazed by the presentation. Highly recommend!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "David Park",
      role: "E-commerce Owner",
      company: "Urban Style Co",
      content: "The e-commerce platform they built for us increased our sales by 250% in the first quarter. Their expertise in creating seamless user experiences is unmatched. Best investment we've made!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 sm:p-12 shadow-elegant">
            <div className="flex items-center gap-6 mb-6">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {current.name}
                </h3>
                <p className="text-muted-foreground">
                  {current.role} at {current.company}
                </p>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-lg text-foreground/90 leading-relaxed italic mb-8">
              "{current.content}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
