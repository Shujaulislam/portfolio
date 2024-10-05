import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactCard from "@/components/CTA";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Skills3d from "@/components/Skills3d";



export default function Home() {
  return (
    <main>
    <Hero/>
    <About/>
    {/* <Skills/> */}
    <Skills3d/>
    <Experience/>
    <Projects/>
    {/* <Contact/> */}
    <ContactCard/>
    </main>
  );
}
