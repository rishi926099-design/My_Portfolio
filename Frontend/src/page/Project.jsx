import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getProjects } from "../api/projectApi";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data.data || res.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#020817] text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold cursor-pointer transition-all duration-500 hover:scale-110">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            Some of my best projects built using modern web technologies.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center text-xl text-cyan-400">
            Loading Projects...
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project._id}
                className="group
                bg-slate-900/70
                backdrop-blur-xl
                border border-slate-700
                rounded-2xl
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-4
                hover:scale-105
                hover:border-cyan-400
                hover:shadow-[0_0_50px_rgba(34,211,238,0.45)]"
              >
                <CardContent className="p-6 ">
                  {/* Featured */}
                  {project.featured && (
                    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">
                      ⭐ Featured
                    </span>
                  )}

                  {/* Title */}
                  <h2
                    className="
                    text-2xl
                    font-extrabold
                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-400
                    to-purple-500
                    bg-clip-text
                    text-transparent
                    transition-all
                    duration-500
                    group-hover:scale-105"
                  >
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 mt-4 leading-7 ">
                    {project.description}
                  </p>

                  {/* Arogyam Tagline */}
                  {project.title ===
                    "Arogyam – Healthcare Management System" && (
                    <div className="mt-5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 p-4"></div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/30
                        text-cyan-400
                        text-sm
                        hover:bg-gradient-to-r
                        hover:from-cyan-400
                        hover:to-blue-500
                        hover:text-black
                        hover:scale-110
                        transition-all
                        duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Category & Status */}
                  <div className="flex justify-between items-center mt-6">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold">
                      {project.category}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-500/10 border border-green-500/30 text-green-400"
                          : "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-8">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex-1
                      text-center
                      py-3
                      rounded-xl
                      bg-slate-800
                      text-white
                      font-semibold
                      transition-all
                      duration-500
                      hover:bg-gradient-to-r
                      hover:from-cyan-400
                      hover:to-blue-500
                      hover:text-black
                      hover:shadow-lg"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex-1
                      text-center
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-500
                      text-black
                      font-semibold
                      transition-all
                      duration-500
                      hover:scale-105
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                    >
                      Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Bottom GitHub Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/rai26012005-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            text-black
            font-bold
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]"
          >
            🚀 View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
