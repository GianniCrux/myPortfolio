import AboutMe  from "./components/about-me";
import  HomePage  from "./components/home";
import Projects from "./components/projects";



export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutMe />
      <Projects />
    </main>
  );
}
