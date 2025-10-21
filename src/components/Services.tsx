import { Button } from "@/components/ui/button";
import {
  Code,
  Globe,
  ShoppingCart,
  Camera,
  FileText,
  Sparkles,
  Video,
  Play,
  Film,
  Instagram,
  Wand2,
} from "lucide-react";

const Services = () => {
  const openEnquiryForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSffXgi7hLLNPB1lmrhiGBktEn-gLtbpbHbpKe2-rVbNsu3d2w/viewform?usp=dialog', '_blank', 'noopener,noreferrer');
  };

  const webServices = [
    "Portfolio Websites",
    "Static Websites", 
    "Photo & Wedding Album Websites",
    "Simple E-commerce Websites",
    "Billing & Management Websites"
  ];

  const videoServices = [
    "AI Video Editing",
    "YouTube Intros, Logos & Outros",
    "Short Film Trailer Editing", 
    "Reel Editing (Social Media)",
    "Motion Graphics & VFX"
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and amplify your message
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Web Development Card */}
          <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Web Development</h3>
                <p className="text-muted-foreground text-lg">
                  Crafting responsive, modern websites that convert your visitors into customers.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-4">Our Web Development Services:</h4>
              <ul className="space-y-3">
                {webServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                    <span className="text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={openEnquiryForm}
              className="w-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 py-4 text-lg"
            >
              Enquire Now
            </Button>
          </div>

          {/* Video Editing Card */}
          <div className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/50 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <Video className="w-10 h-10 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Video Editing</h3>
                <p className="text-muted-foreground text-lg">
                  Transforming footage into compelling stories with cutting-edge visual effects and precision editing.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-4">Our Video Editing Services:</h4>
              <ul className="space-y-3">
                {videoServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary/60"></div>
                    <span className="text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={openEnquiryForm}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-glow transition-all duration-300 py-4 text-lg hover:from-purple-600 hover:to-blue-600"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
