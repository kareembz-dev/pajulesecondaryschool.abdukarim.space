import { Trophy, Music, Users, BookOpen } from "lucide-react";
import campusImage from "@/assets/campus-sports.jpg";

const CampusLife = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Sports Programs",
      items: ["Football", "Volleyball", "Basketball", "Athletics", "Netball"],
      description: "Competitive sports programs promoting teamwork and physical fitness.",
    },
    {
      icon: Music,
      title: "Arts & Culture",
      items: ["Music Club", "Drama Society", "Traditional Dance", "Debate Club"],
      description: "Creative expression through various artistic and cultural activities.",
    },
    {
      icon: Users,
      title: "Student Organizations",
      items: ["Student Council", "Environmental Club", "Science Club", "ICT Club"],
      description: "Leadership and special interest groups for student engagement.",
    },
    {
      icon: BookOpen,
      title: "Academic Clubs",
      items: ["Reading Club", "Math Club", "Writers' Guild", "Young Scientists"],
      description: "Extracurricular learning opportunities to enhance academic skills.",
    },
  ];

  return (
    <section id="campus" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Campus Life
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A vibrant community where students grow academically, socially, and personally
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-card max-w-4xl mx-auto">
          <img
            src={campusImage}
            alt="Students playing sports on campus"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <activity.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{activity.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {activity.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary/20 text-secondary-foreground text-xs md:text-sm px-3 py-1 rounded-full font-medium border border-secondary/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-gradient-section rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Campus Highlights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-card rounded-xl p-6 shadow-card mb-4">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm md:text-base text-muted-foreground">Clubs & Societies</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card rounded-xl p-6 shadow-card mb-4">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">8</div>
                <div className="text-sm md:text-base text-muted-foreground">Sports Teams</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card rounded-xl p-6 shadow-card mb-4">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm md:text-base text-muted-foreground">Annual Events</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card rounded-xl p-6 shadow-card mb-4">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm md:text-base text-muted-foreground">Student Participation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
