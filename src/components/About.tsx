import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Expertise",
      description: "Years of experience delivering exceptional digital solutions",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge technology and creative approaches",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority, always",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={aboutImage}
              alt="Creative team at work"
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transforming Ideas
              </span>
              <br />
              <span className="text-foreground">Into Digital Realities</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At EliteChaplin, we're more than just a creative agency. We're your partners in
              digital excellence, combining technical expertise with artistic vision to deliver
              stunning websites and captivating video content that resonate with your audience.
            </p>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our mission is simple: to empower businesses and individuals with premium digital
              solutions that not only meet but exceed expectations. Every project is a new canvas,
              and we're committed to painting your vision with precision and passion.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-primary mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
