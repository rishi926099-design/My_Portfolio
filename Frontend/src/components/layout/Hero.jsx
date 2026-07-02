import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiMongodb,
  SiLinux,
  SiKubernetes,
} from "react-icons/si";

import api from "../../api/axios";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await api.get("/hero");
        setHero(response.data.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    };

    fetchHero();
  }, []);

  if (!hero) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#020817] text-white">
        Loading...
      </div>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-[#020817] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d4ed840,transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-blue-400 text-xl mb-4">
              Hi, I'm 👋
            </p>

            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              {hero.name}
            </h1>

            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 min-h-[60px]">
              <TypeAnimation
                sequence={[
                  hero.title,
                  2000,
                  hero.subtitle,
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-300 text-lg leading-8 max-w-xl">
              {hero.description}
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-4 mt-8">

              <div className="border border-blue-500 text-blue-400 px-5 py-3 rounded-xl">
                {hero.title}
              </div>

              <div className="border border-green-500 text-green-400 px-5 py-3 rounded-xl">
                {hero.subtitle}
              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition">
                View Projects
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="relative w-[500px] h-[500px]">

              <div className="absolute inset-0 rounded-full border border-cyan-500/30"></div>

              <div className="absolute inset-0 m-auto w-60 h-60 rounded-full border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_70px_#22d3ee]">
                <span className="text-6xl font-bold text-cyan-400">
                  {"</>"}
                </span>
              </div>

              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s" }}
              >

                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <FaAws className="text-yellow-400 text-6xl" />
                </div>

                <div className="absolute top-16 left-10">
                  <FaReact className="text-cyan-400 text-6xl" />
                </div>

                <div className="absolute top-16 right-10">
                  <FaDocker className="text-blue-400 text-6xl" />
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <FaNodeJs className="text-green-500 text-6xl" />
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <SiKubernetes className="text-blue-400 text-6xl" />
                </div>

                <div className="absolute bottom-16 left-10">
                  <SiMongodb className="text-green-500 text-6xl" />
                </div>

                <div className="absolute bottom-16 right-10">
                  <SiLinux className="text-yellow-300 text-6xl" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* STATS SECTION */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-blue-400">
              09+
            </h3>

            <p className="text-slate-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-green-400">
              50+
            </h3>

            <p className="text-slate-400 mt-2">
              DSA Problems Solved
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-purple-400">
              10+
            </h3>

            <p className="text-slate-400 mt-2">
              Technologies Learned
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}