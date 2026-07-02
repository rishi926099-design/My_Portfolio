import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/layout/Chatbot";
import Homepage from "./page/Homepage";
import About from "./page/About";
import Project from "./page/Project";
import Contact from "./page/Contact";
import Skill from "./page/Skill";
import Experience from "./page/Experience";
import Certification from "./page/Certifications";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certificates" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* AI Chatbot */}
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
