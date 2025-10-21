import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X, ExternalLink } from "lucide-react";

type ProjectCategory = "all" | "web" | "video" | "film";

interface Project {
  id: number;
  title: string;
  category: "web" | "video" | "film";
  description: string;
  image: string;
  videoUrl?: string;
  demoUrl?: string;
  services: string[];
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [hoveredVideo, setHoveredVideo] = useState<Project | null>(null);

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
    {
      id: 10,
      title: "Mobsta Lyrical Video (Fan Edit)",
      category: "film",
      description: "Dynamic typography and visual sync design for high-energy fan-made music promotions",
      image: "/mobsta fan made.jpg",
      videoUrl: "https://www.youtube.com/embed/bCtclx1f9e8?si=WNL21D9SyBFzXv9X",
      services: ["Lyrical", "Fan Edit", "Typography", "Sync"],
    },
    {
      id: 11,
      title: "Leo Cinematic Eye Intro",
      category: "film",
      description: "High-impact title card reveal using intricate visual effects and seamless cinematic integration",
      image: "/eye intro.jpg",
      videoUrl: "https://www.youtube.com/embed/WcLPQJ6QmBY?si=By6LTOQSnN1m5reR",
      services: ["Cinematic", "VFX", "Title Card", "Reveal"],
    },
    {
      id: 12,
      title: "Jananayagan Title Reveal",
      category: "film",
      description: "Custom typography and impactful visual design crafted for a powerful movie title card reveal",
      image: "/jananayagan.jpg",
      videoUrl: "https://www.youtube.com/embed/No57FeHeMHQ?si=N2gZfHyTcDX3Nv6b",
      services: ["Title Reveal", "Typography", "Movie", "Custom"],
    },
    {
      id: 13,
      title: "Power House Lyrical Video",
      category: "film",
      description: "Fast-paced, trending motion typography edit designed to amplify the track's energetic rhythm",
      image: "/power house.jpg",
      videoUrl: "https://www.youtube.com/embed/KdEU7nyAMO8?si=WWbNQqW7Xb2Ix8lL",
      services: ["Lyrical", "Motion", "Typography", "Trending"],
    },
    {
      id: 14,
      title: "GOAT Character Title Reveal",
      category: "film",
      description: "Personalized character introduction sequence with bespoke typography and focused visual effects",
      image: "/goat titles.jpg",
      videoUrl: "https://www.youtube.com/embed/Sr7XKSGYpmk?si=th8SVRjIsaTkaM8d",
      services: ["Character", "Title Reveal", "Typography", "VFX"],
    },
    {
      id: 15,
      title: "Avatar Fire Title Sequence",
      category: "film",
      description: "Complex animation and VFX simulating intense fire and smoke to reveal a dramatic title",
      image: "/avathar fire.jpg",
      videoUrl: "https://www.youtube.com/embed/7qhEg8KBLsU?si=9mJJ0_oK0qPRJGLD",
      services: ["Fire VFX", "Animation", "Title Sequence", "Dramatic"],
    },
    {
      id: 16,
      title: "Avatar Water Title Sequence",
      category: "film",
      description: "Fluid and elegant animation and VFX simulating water effects for a mesmerizing title reveal",
      image: "/avathar water.jpg",
      videoUrl: "https://www.youtube.com/embed/U-p6dnNIQXQ?si=bs--zFv3wn_mD2tm",
      services: ["Water VFX", "Fluid Animation", "Title Reveal", "Elegant"],
    },
    {
      id: 17,
      title: "Vidamuyarchi Trailer Typography",
      category: "film",
      description: "High-tension trailer title typography designed for maximum impact and dramatic storytelling",
      image: "/vida.jpg",
      videoUrl: "https://www.youtube.com/embed/Fc49ua4Rh3A?si=F5C-BPohaVwT7BDv",
      services: ["Trailer", "Typography", "High-Tension", "Storytelling"],
    },
    {
      id: 18,
      title: "Jailer 2 Sequel Title Card",
      category: "film",
      description: "Signature graphic design and motion applied to create a strong, recognizable sequel title card",
      image: "/jailer.jpg",
      videoUrl: "https://www.youtube.com/embed/Jc-jxdJgTWY?si=EYOyHC3vQAjQM2tt",
      services: ["Sequel", "Title Card", "Graphic Design", "Motion"],
    },
    {
      id: 19,
      title: "Kannadi Poove Melodic Title",
      category: "film",
      description: "Soft, thematic title design using subtle motion and delicate typography to match a song's mood",
      image: "/kannadi.jpg",
      videoUrl: "https://www.youtube.com/embed/tEhZq0npqxA?si=LmsUVPCgFUo0PV9u",
      services: ["Melodic", "Soft Motion", "Typography", "Thematic"],
    },
    {
      id: 20,
      title: "Good Bad Ugly Trailer Titles",
      category: "film",
      description: "Punchy, quick-cut typography sequences optimized for a fast-moving, action-packed trailer",
      image: "/good.jpg",
      videoUrl: "https://www.youtube.com/embed/fneioXWT50g?si=7_xHxKrHAbY1O-qW",
      services: ["Trailer", "Quick-Cut", "Typography", "Action"],
    },
    {
      id: 21,
      title: "GTA VI Game Title Reveal",
      category: "film",
      description: "Bold, high-saturation, stylized title design replicating the iconic, high-quality video game aesthetic",
      image: "/gta.jpg",
      videoUrl: "https://www.youtube.com/embed/_XtBwASiBWI?si=iaF3hW_sAn5EPgkq",
      services: ["GTA VI", "Game Title", "Stylized", "High-Saturation"],
    },
    {
      id: 22,
      title: "Coolie Action Trailer Titles",
      category: "film",
      description: "Sharp, industry-standard text animation optimized for rapid comprehension in a movie trailer context",
      image: "/coolie trailer titles.jpg",
      videoUrl: "https://www.youtube.com/embed/U9feZT-nVpc?si=_P21MGX9PgGhDOsi",
      services: ["Action", "Trailer", "Text Animation", "Industry-Standard"],
    },
    {
      id: 23,
      title: "Dude Custom Title Reveal",
      category: "film",
      description: "Unique, personality-driven title card design using distinct font choices and character-specific motion",
      image: "/dude.jpg",
      videoUrl: "https://www.youtube.com/embed/5rRvTaMgSRM?si=M_Lszcb48vA55X-Z",
      services: ["Custom", "Personality", "Typography", "Character-Specific"],
    },
    {
      id: 24,
      title: "Coolie Movie Opening Title",
      category: "film",
      description: "Full cinematic introduction title design, focusing on timing, pacing, and screen presence",
      image: "/coolie og.jpg",
      videoUrl: "https://www.youtube.com/embed/9Ynv2FWTOrE?si=hjcXiICWsTOZqT6g",
      services: ["Opening Title", "Cinematic", "Timing", "Screen Presence"],
    },
    {
      id: 25,
      title: "Coolie Brand Logo Animation",
      category: "film",
      description: "Short, impactful logo sting optimized for quick brand recognition and high-quality cinematic reveal",
      image: "/coolie.jpg",
      videoUrl: "https://www.youtube.com/embed/CgXHRkblrR8?si=0ONe_pdUjXdhwXDE",
      services: ["Logo Animation", "Brand", "Cinematic", "Impact"],
    },
    {
      id: 26,
      title: "Leo Cinematic Frame Graphic",
      category: "film",
      description: "Advanced visual effects and framing techniques to isolate and highlight key emotional moments on screen",
      image: "/leo.jpg",
      videoUrl: "https://www.youtube.com/embed/EGD35XHC3ZY?si=a3tWcWWkIwofdmzK",
      services: ["Cinematic", "VFX", "Framing", "Emotional"],
    },
    {
      id: 27,
      title: "Pushpa Cinematic Title Card",
      category: "film",
      description: "Signature style title card edit reflecting the film's rustic theme and high production value",
      image: "/pushpa.jpg",
      videoUrl: "https://www.youtube.com/embed/GAGl8t_d258",
      services: ["Cinematic", "Title Card", "Rustic Theme", "Production Value"],
    },
    {
      id: 28,
      title: "Leo Das Entry Lyrical Flow",
      category: "film",
      description: "Dynamic, character-focused lyrical animation emphasizing mood, style, and impactful entry typography",
      image: "/badass.jpg",
      videoUrl: "https://www.youtube.com/embed/jAWsjW6AC8A",
      services: ["Lyrical", "Character-Focused", "Typography", "Entry Animation"],
    },
    {
      id: 29,
      title: "Naa Ready Thaan Lyrical Sync",
      category: "film",
      description: "High-energy, beat-synced lyrical video edit, perfect for promotional music videos and trailers",
      image: "/naa ready.jpg",
      videoUrl: "https://www.youtube.com/embed/toQ0V8fqjGU",
      services: ["Lyrical", "Beat-Sync", "High-Energy", "Promotional"],
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
            <Button
              onClick={() => setActiveCategory("film")}
              variant={activeCategory === "film" ? "default" : "outline"}
              className={
                activeCategory === "film"
                  ? "bg-gradient-primary text-primary-foreground font-semibold"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              }
            >
              Film Lyricals & Titles
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div 
                  className="relative h-64 overflow-hidden"
                  onMouseEnter={() => (project.category === "video" || project.category === "film") && setHoveredVideo(project)}
                  onMouseLeave={() => (project.category === "video" || project.category === "film") && setHoveredVideo(null)}
                >
                  {/* Static Image - Hidden when video is playing */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-all duration-500 ${
                      project.title === "AI Video Editing" 
                        ? "object-cover" 
                        : "object-contain bg-background/10"
                    } ${
                      hoveredVideo?.id === project.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                    }`}
                  />
                  
                  {/* Video Player - Shows on hover for video and film projects */}
                  {(project.category === "video" || project.category === "film") && hoveredVideo?.id === project.id && (
                    <div className="absolute inset-0 w-full h-full">
                      <iframe
                        src={`${project.videoUrl}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                        title={project.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  
                  {/* CTA Button Overlay - Only for web projects */}
                  {project.category === "web" && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        onClick={() => {
                          if (project.demoUrl) {
                            window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Project
                      </Button>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground font-semibold">
                      {project.category === "web" ? "Web" : project.category === "video" ? "Video" : "Film"}
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
