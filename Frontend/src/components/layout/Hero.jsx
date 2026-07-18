import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiMongodb, SiLinux, SiKubernetes } from "react-icons/si";

export default function Hero() {
  const hero = {
    name: "Rishikesh Rai",
    title: "Full Stack Developer",
    subtitle: "MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer skilled in MongoDB, Express.js, React.js and Node.js. I build modern, responsive and scalable web applications with clean UI and smooth user experience.",
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#020817] text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d4ed840,transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}

          <div className="text-center lg:text-left">
            <p className="text-blue-400 text-lg sm:text-xl mb-4">Hi, I'm 👋</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              {hero.name}
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-6 min-h-[60px]">
              <TypeAnimation
                sequence={[hero.title, 2000, hero.subtitle, 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
              {hero.description}
            </p>

            {/* BADGES */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              <div className="border border-blue-500 text-blue-400 px-5 py-3 rounded-xl">
                {hero.title}
              </div>

              <div className="border border-green-500 text-green-400 px-5 py-3 rounded-xl">
                {hero.subtitle}
              </div>
            </div>

            {/* BUTTON */}

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition">
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center mt-10 lg:mt-0">
            <div
              className="
                relative
                w-[280px] h-[280px]
                sm:w-[350px] sm:h-[350px]
                md:w-[420px] md:h-[420px]
                lg:w-[500px] lg:h-[500px]
              "
            >
              {/* Outer Circle */}

              <div className="absolute inset-0 rounded-full border border-cyan-500/30"></div>

              {/* Orbit */}

              <div className="absolute inset-6 rounded-full border-2 border-dashed border-cyan-400/40"></div>

              {/* Center */}

              <div
                className="
                  absolute
                  inset-0
                  m-auto
                  w-36 h-36
                  sm:w-44 sm:h-44
                  md:w-52 md:h-52
                  lg:w-60 lg:h-60
                  rounded-full
                  border-4
                  border-cyan-400
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_70px_#22d3ee]
                "
              >
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400">
                  {"</>"}
                </span>
              </div>
              {/* Rotating Orbit */}
              <div
                className="absolute inset-0 animate-spin"
                style={{
                  animationDuration: "20s",
                  animationTimingFunction: "linear",
                }}
              >
                {/* AWS */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2">
                  <FaAws className="text-yellow-400 text-5xl" />
                </div>

                {/* React */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2">
                  <FaReact className="text-cyan-400 text-5xl" />
                </div>

                {/* MongoDB */}
                <div className="absolute left-1/2 bottom-6 -translate-x-1/2">
                  <SiMongodb className="text-green-500 text-5xl" />
                </div>

                {/* Node */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2">
                  <FaNodeJs className="text-green-500 text-5xl" />
                </div>

                {/* Kubernetes */}
                <div className="absolute top-[20%] right-[20%]">
                  <SiKubernetes className="text-blue-500 text-5xl" />
                </div>

                {/* Linux */}
                <div className="absolute bottom-[20%] left-[20%]">
                  <SiLinux className="text-yellow-300 text-5xl" />
                </div>
              </div>
              {/* Dots */}
              <div className="absolute top-[18%] left-[18%] w-2 h-2 rounded-full bg-cyan-400"></div>
              <div className="absolute top-[18%] right-[18%] w-2 h-2 rounded-full bg-cyan-400"></div>
              <div className="absolute bottom-[18%] left-[18%] w-2 h-2 rounded-full bg-cyan-400"></div>
              <div className="absolute bottom-[18%] right-[18%] w-2 h-2 rounded-full bg-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 lg:mt-20">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-blue-500 transition">
          <h3 className="text-3xl sm:text-4xl font-bold text-blue-400">09+</h3>

          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Projects Completed
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-green-500 transition">
          <h3 className="text-3xl sm:text-4xl font-bold text-green-400">50+</h3>

          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            DSA Problems Solved
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-purple-500 transition sm:col-span-2 lg:col-span-1">
          <h3 className="text-3xl sm:text-4xl font-bold text-purple-400">
            10+
          </h3>

          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Technologies Learned
          </p>
        </div>
      </div>
    </section>
  );
}
