import { Calendar, Award, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      icon: Award,
      date: "January 15, 2024",
      category: "Achievement",
      title: "Outstanding UNEB Results",
      description: "Our students achieved exceptional results in the 2023 Uganda National Examinations Board exams, with 95% pass rate in UCE.",
    },
    {
      icon: Users,
      date: "January 10, 2024",
      category: "Event",
      title: "Inter-School Sports Championship",
      description: "Pajule Secondary School won the regional football championship, showcasing excellent teamwork and sportsmanship.",
    },
    {
      icon: BookOpen,
      date: "December 20, 2023",
      category: "Academics",
      title: "New Science Laboratory Opening",
      description: "State-of-the-art science laboratory now operational, enhancing hands-on learning opportunities for our students.",
    },
  ];

  const upcomingEvents = [
    { date: "Feb 5", event: "New Term Begins - Term 1 2024", time: "8:00 AM" },
    { date: "Feb 12", event: "Parents & Teachers Meeting", time: "10:00 AM" },
    { date: "Mar 1", event: "Science Fair Competition", time: "9:00 AM" },
    { date: "Mar 15", event: "Inter-House Sports Day", time: "All Day" },
    { date: "Apr 10", event: "Career Guidance Workshop", time: "2:00 PM" },
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            News & Events
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings at Pajule Secondary School
          </p>
        </div>

        {/* Latest News */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Latest News</h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="h-8 w-8 text-primary" />
                    <span className="bg-primary/10 text-primary text-xs md:text-sm px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Upcoming Events</h3>
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[70px]">
                      <div className="text-lg md:text-xl font-bold">{event.date.split(" ")[1]}</div>
                      <div className="text-xs md:text-sm uppercase">{event.date.split(" ")[0]}</div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-base md:text-lg text-foreground mb-1">{event.event}</h4>
                    <p className="text-sm md:text-base text-muted-foreground">{event.time}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
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

export default News;
