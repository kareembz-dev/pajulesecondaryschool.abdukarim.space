import { BookOpen, Microscope, Calculator, Globe, Languages, Palette } from "lucide-react";
import academicsImage from "@/assets/academics-lab.jpg";

const Academics = () => {
  const programs = [
    {
      icon: Microscope,
      title: "Sciences",
      subjects: ["Biology", "Chemistry", "Physics"],
      description: "Modern laboratories and experienced instructors for hands-on learning.",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      subjects: ["Pure Math", "Applied Math", "Statistics"],
      description: "Comprehensive mathematics curriculum preparing students for higher education.",
    },
    {
      icon: Languages,
      title: "Languages",
      subjects: ["English", "Swahili", "French"],
      description: "Develop strong communication skills in multiple languages.",
    },
    {
      icon: Globe,
      title: "Social Studies",
      subjects: ["History", "Geography", "Economics"],
      description: "Understanding our world, past, present, and future.",
    },
    {
      icon: Palette,
      title: "Arts & Humanities",
      subjects: ["Literature", "Fine Arts", "Music"],
      description: "Fostering creativity and cultural appreciation.",
    },
    {
      icon: BookOpen,
      title: "Technical Studies",
      subjects: ["ICT", "Agriculture", "Business"],
      description: "Practical skills for modern careers and entrepreneurship.",
    },
  ];

  return (
    <section id="academics" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Academic Programs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed to prepare students for success in higher education and beyond
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
          <img
            src={academicsImage}
            alt="Students in science laboratory"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <program.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{program.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {program.subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-secondary-foreground text-xs md:text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Academic Calendar Highlights */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">Academic Calendar</h3>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-accent text-lg md:text-xl font-bold mb-2">Term 1</div>
              <div className="text-primary-foreground/90 text-sm md:text-base">February - May</div>
            </div>
            <div>
              <div className="text-accent text-lg md:text-xl font-bold mb-2">Term 2</div>
              <div className="text-primary-foreground/90 text-sm md:text-base">June - August</div>
            </div>
            <div>
              <div className="text-accent text-lg md:text-xl font-bold mb-2">Term 3</div>
              <div className="text-primary-foreground/90 text-sm md:text-base">September - November</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
