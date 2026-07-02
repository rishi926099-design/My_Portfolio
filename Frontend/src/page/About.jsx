import { useState, useEffect } from "react";
import myPhoto from "../assets/myphoto.jpg";
import { getAbout } from "../api/aboutApi";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await getAbout();
        setAbout(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAbout();
  }, []);

  if (!about) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-3">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-slate-400">
            Short introduction, goals, education and passion for technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
                <img
                  src={myPhoto}
                  alt={about.name}
                  className="w-56 h-72 rounded-xl border-2 border-cyan-400 object-cover shadow-lg shadow-cyan-500/30"
                />

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {about.name}
                  </h3>

                  <p className="text-blue-400 mt-2">{about.title}</p>
                </div>
              </div>

              {/* Professional Summary */}

              <h3 className="text-3xl font-bold text-white mb-4">
                Professional Summary
              </h3>

              <p className="text-slate-300 leading-8">{about.summary}</p>

              {/* Career Objective */}

              <h3 className="text-2xl font-bold text-white mt-8 mb-3">
                Career Objective
              </h3>

              <p className="text-slate-400 leading-7">
                {about.careerObjective}
              </p>

              {/* Education */}

              <h3 className="text-2xl font-bold text-white mt-8 mb-3">
                Education
              </h3>

              <p className="text-slate-400">
                {about.education}
                <br />
                Expected Graduation: {about.graduationYear}
              </p>
            </div>
          </div>
          {/* Right Side Cards */}
          <div className="space-y-4">
            {/* Problem Solving */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Problem Solving
              </h3>

              <p className="text-slate-400">{about.problemSolving}</p>
            </div>

            {/* Full Stack Development */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                Full Stack Development
              </h3>

              <p className="text-slate-400">{about.fullStack}</p>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-green-500 transition duration-300">
              <h3 className="text-xl font-bold text-green-400 mb-3">
                DevOps & Cloud
              </h3>

              <p className="text-slate-400">{about.devops}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
