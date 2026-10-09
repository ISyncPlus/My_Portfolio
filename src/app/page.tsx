import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Footer from "@/components/sections/Footer";
import Marquee from "@/components/sections/Marquee";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Expertise />
      <Footer />
    </main>
  );
}
