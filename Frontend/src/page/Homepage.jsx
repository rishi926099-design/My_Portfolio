import Hero from "../components/layout/Hero";
import About from "./About";
import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";
import Certifications from "./Certifications";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Certifications />
      <Contact />
    </>
  );
};

export default Homepage;
