import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const openEnquiryForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSffXgi7hLLNPB1lmrhiGBktEn-gLtbpbHbpKe2-rVbNsu3d2w/viewform?usp=dialog', '_blank', 'noopener,noreferrer');
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About Us", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
              CeliteAgent
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={openEnquiryForm}
              className="bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300"
            >
              Get a Quote
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={openEnquiryForm}
              className="w-full mt-4 bg-gradient-primary text-primary-foreground font-semibold"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
