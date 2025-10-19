import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X, ExternalLink } from "lucide-react";

type ProjectCategory = "all" | "web" | "video";

interface Project {
  id: number;
  title: string;
  category: "web" | "video";
  description: string;
  image: string;
  videoUrl?: string;
  demoUrl?: string;
  services: string[];
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: "Celite.in E-commerce Website",
      category: "web",
      description: "A modern, fully-functional e-commerce platform featuring seamless checkout experience, secure payment processing, comprehensive product management, and responsive design optimized for all devices",
      image: "/celite.in.png",
      demoUrl: "https://celite.in",
      services: ["E-commerce", "Payment Integration", "Product Management"],
    },
    {
      id: 2,
      title: "Static Portfolio Website",
      category: "web",
      description: "A lightning-fast, secure static portfolio website built for maximum performance and elegance. Perfect for freelancers and professionals who need a minimal, high-speed online presence with exceptional SEO optimization",
      image: "/static-portfolio.webp",
      demoUrl: "http://chaplinsiva.netlify.app",
      services: ["Static Website", "Performance", "SEO Optimization"],
    },
    {
      id: 3,
      title: "Dynamic Portfolio Website",
      category: "web",
      description: "An interactive, content-managed portfolio website with advanced features including dynamic content updates, complex user interactions, and scalable architecture for growing businesses and creative professionals",
      image: "/dynamic-portfolio.webp",
      demoUrl: "http://sreram.netlify.app",
      services: ["Dynamic Website", "CMS Integration", "Interactive Features"],
    },
    {
      id: 4,
      title: "Cinematic Wedding Highlight",
      category: "video",
      description: "A breathtaking wedding highlight reel with cinematic color grading and emotional storytelling",
      image: "/wedding.png",
      videoUrl: "https://www.youtube.com/embed/_7FS49HiAkk",
      services: ["Wedding Editing", "Color Grading", "VFX"],
    },
    
    {
      id: 6,
      title: "AI Video Editing",
      category: "video",
      description: "Advanced AI-powered editing with automated color grading, smart object tracking, scene detection, and next‑generation video enhancement for crystal‑clear results",
      image: "/ai%20video.png",
      videoUrl: "https://www.youtube.com/embed/cmqynXLIqDI",
      services: ["AI Video Editing", "Color Grading", "Object Tracking"],
    },
    {
      id: 7,
      title: "Premium Photo Slideshow",
      category: "video",
      description: "High‑quality, professional photo compilation with cinematic transitions, custom music, and personalized effects for an elegant storytelling experience",
      image: "/photo%20slideshow.png",
      videoUrl: "https://www.youtube.com/embed/QpA60HpzLcE",
      services: ["Photo Slideshow", "Cinematic Transitions", "Custom Music"],
    },
    {
      id: 8,
      title: "Custom Birthday Photo Video",
      category: "video",
      description: "Memorable, personalized birthday videos crafted from your photos with celebratory music, animated titles, and heart‑warming transitions",
      image: "/birthday.png",
      videoUrl: "https://www.youtube.com/embed/AwZitQe1kWc",
      services: ["Birthday Video", "Personalized Titles", "Music Sync"],
    },
    {
      id: 9,
      title: "YouTube Intro Package",
      category: "video",
      description: "Custom YouTube intro animations with brand integration and professional sound design",
      image: "/intro.png",
      videoUrl: "https://www.youtube.com/embed/MA5tSTL7Kns",
      services: ["YouTube Intros", "Brand Animation", "Sound Design"],
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
                  {/* Universal CTA Button Overlay */}
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="lg"
                      onClick={() => {
                        if (project.category === "video" && project.videoUrl) {
                          navigate("/demo", { state: { title: project.title, url: project.videoUrl } });
                        } else if (project.demoUrl) {
                          window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      className="bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow"
                    >
                      {project.category === "video" ? (
                        <>
                          <Play className="mr-2 h-5 w-5" />
                          Watch Demo
                        </>
                      ) : (
                        <>
                          <ExternalLink className="mr-2 h-5 w-5" />
                          View Project
                        </>
                      )}
                    </Button>
                  </div>
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
