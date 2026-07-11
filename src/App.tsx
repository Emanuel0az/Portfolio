import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Skills } from "@/features/skills/Skills";
import { Projects } from "@/features/projects/Projects";
import { Experience } from "@/features/trayectoria/Trayectoria";
import { Education } from "@/features/education/Education";
import { Contact } from "@/features/contact/Contact";
import { Footer } from "@/features/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;