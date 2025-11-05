import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Academics from "@/components/Academics";
import Faculty from "@/components/Faculty";
import CampusLife from "@/components/CampusLife";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Academics />
        <Faculty />
        <CampusLife />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
