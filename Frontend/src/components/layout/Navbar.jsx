import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Rishikesh_Rai_Resume.pdf";
    link.download = "Rishikesh_Rai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              R.R
            </div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white whitespace-nowrap">
              RISHIKESH
              <span className="text-cyan-400"> RAI</span>
              <span className="text-blue-500">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium text-slate-300">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="/experiences"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/certificates"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Certification
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <Button
              className="hidden md:flex border-2 border-cyan-400 bg-transparent text-cyan-400 rounded-full px-4 lg:px-5 py-2 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              onClick={downloadResume}
            >
              Resume
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-md hover:bg-slate-800 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] border-t border-slate-800" : "max-h-0"
        }`}
      >
        <ul className="bg-slate-950 flex flex-col gap-5 px-6 py-5 text-slate-300 font-medium">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="/experiences" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
          </li>

          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/certificates" onClick={() => setIsOpen(false)}>
              Certification
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>

          <Button
            onClick={() => {
              downloadResume();
              setIsOpen(false);
            }}
            className="border-2 border-cyan-400 bg-transparent text-cyan-400 rounded-full mt-2"
          >
            Resume
          </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
