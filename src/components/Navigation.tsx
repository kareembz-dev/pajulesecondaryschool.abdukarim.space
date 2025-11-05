import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg md:text-xl text-foreground">Pajule Secondary School</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("academics")} className="text-foreground hover:text-primary transition-colors font-medium">
              Academics
            </button>
            <button onClick={() => scrollToSection("faculty")} className="text-foreground hover:text-primary transition-colors font-medium">
              Faculty
            </button>
            <button onClick={() => scrollToSection("news")} className="text-foreground hover:text-primary transition-colors font-medium">
              News
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-background">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("academics")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
            >
              Academics
            </button>
            <button
              onClick={() => scrollToSection("faculty")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
            >
              Faculty
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors font-medium"
            >
              Contact
            </button>
            <div className="px-4 pt-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
