import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navbar() {

  
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
         <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
        R.R
         </div>
        <h1 className="text-2xl font-bold text-white">
          RISHIKESH 
          <span className="text-cyan-400 ">RAI</span>
          <span className="text-blue-500">.</span>
        </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <li>
            <Link to="/" className="hover:text-white transition hover:scale-110 transition-all duration-300 inline-block">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className= "hover:text-white transition  hover:scale-110 transition-all duration-300 inline-block" >
              About
            </Link>
          </li>

          <li>
            <Link to="/skills" className="hover:text-white transition hover:scale-110 transition-all duration-300 inline-block">
              Skills
            </Link>
          </li>

          <li>
            <Link to="/experiences" className="hover:text-white transition hover:scale-110 transition-all duration-300 inline-block">
              Experience
            </Link>
          </li>

          <li>
            <Link to="/projects" className="hover:text-white transition hover:scale-110 transition-all duration-300 inline-block">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/certificates" className="hover:text-white transition hover:scale-110 transition-all duration-300 inline-block">
              Certification
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-white transition hover:scale-110 transition-all duration-300 inline-block">
              Contact
            </Link>
          </li>
        </ul>

        {/* Resume Button */}
        <Button
           onClick={() => {
             const link = document.createElement("a");
              link.href = "/Rishikesh_Rai_Resume.pdf";
              link.download = "Rishikesh_Rai_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="border-2 border-cyan-400 bg-transparent text-cyan-400 rounded-full px-6 py-2 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
          >
           Resume
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;