import AOSInit from "./_components/AOSInit";
import AboutMe  from "./components/about-me";
import ContactMe from "./components/contact-me";
import  HomePage  from "./components/home";
import Projects from "./components/projects";



export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <AOSInit />
      <HomePage />
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  );
}
