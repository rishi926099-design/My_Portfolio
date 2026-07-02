import {

  
  Mail,
  ArrowUp,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold">
              Rishikesh 
              <span className="text-blue-500">.</span>
            </h2>

            <p className="text-slate-400 mt-4">
              Full Stack Developer passionate about
              building modern web applications and
              solving real-world problems.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#skills">Experience</a>
              </li>



              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right */}
          
          

           <div>
  <h3 className="text-lg font-semibold mb-4">
    Connect
  </h3>

  <div className="space-y-4">

    <a
      href="mailto:rishi926099@gmail.com"
      className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
    >
      <Mail size={20} />
      <span>rishi926099@gmail.com</span>
    </a>

    <a
      href="mailto:rishikeshrai26012005@gmail.com"
      className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
    >
      <Mail size={20} />
      <span>rishikeshrai26012005@gmail.com</span>
    </a>

    <a
      href="https://linkedin.com/in/rishikesh-rai-0947683b6"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
    >
      <FaLinkedin size={20} />
      <span>linkedin.com/in/rishikesh-rai-0947683b6</span>
    </a>

  </div>
</div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-slate-500 text-sm">
            © 2026 Rishikesh Rai. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 flex items-center gap-2 text-slate-400 hover:text-white"
          >
            Back To Top
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
     </div>
    </footer>
  );
}

export default Footer;