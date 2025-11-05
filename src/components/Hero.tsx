import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pajule Secondary School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
            <MapPin className="h-5 w-5" />
            <span className="text-sm md:text-base font-medium">Pajule, Pader, Uganda</span>
            <span className="mx-2">•</span>
            <Calendar className="h-5 w-5" />
            <span className="text-sm md:text-base font-medium">Founded 1972</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Pajule Secondary School
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 font-medium max-w-3xl mx-auto">
            Nurturing Future Leaders Through Quality Education
          </p>

          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Excellence in Education Since 1972
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 w-full sm:w-auto"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-lg px-8 py-6 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Visit Campus
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
