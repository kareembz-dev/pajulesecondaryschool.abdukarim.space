import { Users, Award, BookOpen, Target } from "lucide-react";
import aboutImage from "@/assets/about-students.jpg";

const About = () => {
  const stats = [
    { icon: Users, label: "Students", value: "850+" },
    { icon: Award, label: "Teachers", value: "45+" },
    { icon: BookOpen, label: "Programs", value: "12+" },
    { icon: Target, label: "Years of Excellence", value: "51+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic excellence and personal growth in every student.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where every student can thrive and succeed.",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Fostering honesty, responsibility, and ethical behavior in all our students.",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Embracing modern teaching methods and technology for better learning outcomes.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Pajule Secondary School
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Committed to providing accessible, quality education that empowers students to achieve their full potential
          </p>
        </div>

        {/* Mission Statement with Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              To provide accessible, quality education that empowers students to achieve their full potential and contribute positively to their communities. We believe in nurturing not just academic excellence, but also character, leadership, and a commitment to lifelong learning.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Since our founding in 1972, Pajule Secondary School has been a cornerstone of education in Pader, transforming the lives of thousands of students and shaping the future of our community.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={aboutImage}
              alt="Students studying together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <stat.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1">
                <value.icon className="h-10 w-10 md:h-12 md:w-12 text-secondary mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
