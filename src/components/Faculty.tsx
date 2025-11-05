import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const Faculty = () => {
  const departments = [
    {
      icon: BookOpen,
      name: "Sciences Department",
      head: "Dr. Sarah Okello",
      staff: 12,
      description: "Dedicated faculty with advanced degrees in Biology, Chemistry, and Physics.",
    },
    {
      icon: Calculator,
      name: "Mathematics Department",
      head: "Mr. James Ojera",
      staff: 8,
      description: "Experienced educators passionate about mathematical excellence.",
    },
    {
      icon: Globe,
      name: "Humanities Department",
      head: "Mrs. Grace Akello",
      staff: 15,
      description: "Expert teachers in History, Geography, Languages, and Social Studies.",
    },
    {
      icon: Palette,
      name: "Arts & Technical",
      head: "Mr. Patrick Opio",
      staff: 10,
      description: "Creative and technical skills development through expert instruction.",
    },
  ];

  const adminStaff = [
    { role: "Headteacher", name: "Mr. David Okumu" },
    { role: "Deputy Headteacher", name: "Mrs. Mary Aber" },
    { role: "Director of Studies", name: "Mr. Francis Oloya" },
    { role: "Senior Woman Teacher", name: "Mrs. Christine Aciro" },
  ];

  return (
    <section id="faculty" className="py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Faculty & Staff
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated educators committed to student success and academic excellence
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <Users className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">45+</div>
            <div className="text-sm md:text-base text-muted-foreground">Teaching Staff</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <Award className="h-10 w-10 text-secondary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">25+</div>
            <div className="text-sm md:text-base text-muted-foreground">Years Avg. Experience</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">80%</div>
            <div className="text-sm md:text-base text-muted-foreground">With Advanced Degrees</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-card">
            <BookOpen className="h-10 w-10 text-secondary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">4</div>
            <div className="text-sm md:text-base text-muted-foreground">Academic Departments</div>
          </div>
        </div>

        {/* Administrative Staff */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Administrative Leadership
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {adminStaff.map((staff, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2">{staff.name}</h4>
                <p className="text-sm md:text-base text-muted-foreground">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
            Academic Departments
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <dept.icon className="h-10 w-10 md:h-12 md:w-12 text-secondary mb-4" />
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">{dept.name}</h4>
                <div className="text-sm md:text-base text-muted-foreground mb-3">
                  <span className="font-semibold">Head: </span>
                  {dept.head}
                </div>
                <div className="text-sm md:text-base text-muted-foreground mb-4">
                  <span className="font-semibold">{dept.staff} Staff Members</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Calculator = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="16" y1="14" x2="16" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const Palette = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

export default Faculty;
