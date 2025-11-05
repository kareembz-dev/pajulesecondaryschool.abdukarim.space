import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-lg">Pajule Secondary School</span>
            </div>
            <p className="text-primary-foreground/90 mb-4 text-sm md:text-base">
              Nurturing Future Leaders Through Quality Education Since 1972
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary rounded-lg p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary rounded-lg p-2 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary rounded-lg p-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("academics")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Academic Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faculty")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Faculty & Staff
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("news")} className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  News & Events
                </button>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Admissions</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  How to Apply
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Tuition & Fees
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Visit Campus
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/90">Pajule Town, Pader District, Northern Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/90">+256 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/90">info@pajulesecondary.ac.ug</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm md:text-base">
            © {new Date().getFullYear()} Pajule Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
