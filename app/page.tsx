import HeroSection from "@/components/ui/hero-section";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
