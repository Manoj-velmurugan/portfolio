import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";

export default function App() {
  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
