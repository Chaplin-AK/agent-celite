import { Phone, Mail, MessageCircle, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const openEnquiryForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSffXgi7hLLNPB1lmrhiGBktEn-gLtbpbHbpKe2-rVbNsu3d2w/viewform?usp=dialog', '_blank', 'noopener,noreferrer');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 76394 26929\n+91 63744 01608",
      href: "tel:+917639426929",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "elitechaplin@gmail.com",
      href: "mailto:elitechaplin@gmail.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+91 76394 26929",
      href: "https://wa.me/917639426929",
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/chaplinelite/", label: "Instagram" },
    { icon: <Youtube className="w-6 h-6" />, href: "http://www.youtube.com/@CELITETEMPLATES", label: "YouTube" },
    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/company/celite/", label: "LinkedIn" },
    { icon: <Send className="w-6 h-6" />, href: "https://t.me/chaplinelite", label: "Telegram" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's start a conversation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-lg font-semibold text-foreground whitespace-pre-line">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Let's Talk Button */}
          <div className="flex justify-center mt-12">
            <Button
              onClick={openEnquiryForm}
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold text-xl px-10 py-5 md:px-14 md:py-7 w-[220px] md:w-[260px] hover:shadow-glow transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
