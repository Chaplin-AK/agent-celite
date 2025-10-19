import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              EliteChaplin
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Transforming ideas into stunning digital realities through premium web development
              and cutting-edge video editing services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Phone: +91 76394 26929</p>
              <p>Email: elitechaplin@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EliteChaplin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
