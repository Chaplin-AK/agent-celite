import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

type ProjectCategory = "all" | "web" | "video";

interface Project {
  id: number;
  title: string;
  category: "web" | "video";
  description: string;
  image: string;
  videoUrl?: string;
  services: string[];
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury E-commerce Platform",
      category: "web",
      description: "Complete redesign and development of a premium e-commerce platform with custom features and seamless checkout experience",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      services: ["E-commerce", "Custom Design", "Payment Integration"],
    },
    {
      id: 2,
      title: "Cinematic Wedding Highlight",
      category: "video",
      description: "A breathtaking wedding highlight reel with cinematic color grading and emotional storytelling",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      services: ["Wedding Editing", "Color Grading", "VFX"],
    },
    {
      id: 3,
      title: "Creative Agency Portfolio",
      category: "web",
      description: "Modern portfolio website for a design agency featuring smooth animations and interactive galleries",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      services: ["Portfolio", "Animations", "Responsive Design"],
    },
    {
      id: 4,
      title: "Brand Logo Animation",
      category: "video",
      description: "Dynamic logo animation with motion graphics and sound design for a tech startup",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      services: ["Logo Animation", "Motion Graphics", "Sound Design"],
    },
    {
      id: 5,
      title: "Restaurant Management System",
      category: "web",
      description: "Full-stack restaurant management platform with billing, inventory, and table booking features",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      services: ["Management System", "Full Stack", "Database"],
    },
    {
      id: 6,
      title: "Instagram Reels Package",
      category: "video",
      description: "Series of viral-optimized Instagram reels with trending transitions and effects",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      services: ["Social Media", "Reels Editing", "Trending Effects"],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">Our Creative </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Explore our portfolio of stunning websites and captivating video content
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setActiveCategory("all")}
              variant={activeCategory === "all" ? "default" : "outline"}
              className={
                activeCategory === "all"
                  ? "bg-gradient-primary text-primary-foreground font-semibold"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }
            >
              All Projects
            </Button>
            <Button
              onClick={() => setActiveCategory("web")}
              variant={activeCategory === "web" ? "default" : "outline"}
              className={
                activeCategory === "web"
                  ? "bg-gradient-primary text-primary-foreground font-semibold"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }
            >
              Web Development
            </Button>
            <Button
              onClick={() => setActiveCategory("video")}
              variant={activeCategory === "video" ? "default" : "outline"}
              className={
                activeCategory === "video"
                  ? "bg-gradient-primary text-primary-foreground font-semibold"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }
            >
              Video Editing
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.videoUrl && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        className="bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Demo
                      </Button>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground font-semibold">
                      {project.category === "web" ? "Web" : "Video"}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
