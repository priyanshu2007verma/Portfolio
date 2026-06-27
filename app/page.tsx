import Sidebar from "../components/layout/Sidebar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Journey from "../components/journey/Journey";
import Milestones from "../components/milestones/Milestones";
import Contact from "../components/contact/Contact";
import AskAuron from "../components/auron-ai/AskAuron";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Sidebar />

      <div className="ml-[220px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Milestones />
        <Contact />
        <AskAuron />
      </div>
    </main>
  );
}