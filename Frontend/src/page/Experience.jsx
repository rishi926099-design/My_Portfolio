import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  ShieldCheck,
  Database,
} from "lucide-react";

const experience = [
  {
    title: "Industrial Trainee - MERN Stack",
    company: "Substring Technology, Lucknow",
    duration: "2025 - Present",
    description:
      "Working on Full Stack MERN applications with modern frontend and backend technologies.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    icon: <Briefcase size={28} />,
  },

  {
    title: "REST API Development",
    company: "Backend Development",
    duration: "Hands-on Experience",
    description:
      "Developed scalable REST APIs with JWT Authentication, CRUD operations and role-based access.",
    skills: [
      "REST API",
      "JWT",
      "Authentication",
      "Authorization",
    ],
    icon: <ShieldCheck size={28} />,
  },

  {
    title: "Full Stack Projects",
    company: "Personal Projects",
    duration: "2024 - Present",
    description:
      "Built AI Quiz Platform, KISAN Mandi Information App and Student Management System using MERN Stack.",
    skills: [
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
    icon: <Code2 size={28} />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-blue-400">
            Professional Journey
          </p>

          <h2 className="mt-4 text-6xl font-black">
            Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Hands-on experience building scalable web
            applications using modern MERN technologies.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">

          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-blue-500/20"></div>

          <div className="space-y-10">

            {experience.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -8,
                }}
                className="relative ml-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-blue-500/50"
              >

                {/* Timeline Dot */}

                <div className="absolute -left-12 top-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-500 bg-slate-900 text-blue-400">

                  {item.icon}

                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h3 className="text-3xl font-bold">

                      {item.title}

                    </h3>

                    <p className="mt-2 text-blue-400">

                      {item.company}

                    </p>

                  </div>

                  <span className="rounded-full bg-blue-500/10 px-5 py-2 text-sm text-blue-400">

                    {item.duration}

                  </span>

                </div>

                <p className="mt-6 leading-8 text-slate-400">

                  {item.description}

                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {item.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;