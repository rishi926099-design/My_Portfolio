import myPhoto from "../assets/myphoto.jpg";

export default function About() {
  const about = {
    name: "Rishikesh Rai",
    title: "Full Stack Developer | MERN Stack Developer",

    summary:
      "I am a final-year Computer Science Engineering student with a strong foundation in Full Stack Development, Data Structures & Algorithms, and modern software engineering practices. Passionate about building scalable web applications, solving real-world problems, and continuously learning emerging technologies.",

    careerObjective:
      "To secure a Software Engineer role where I can leverage my technical skills, contribute to innovative projects, collaborate with talented teams, and grow as a professional while delivering impactful solutions.",

    education:
      "Bachelor of Technology (B.Tech) in Computer Science Engineering",

    graduationYear: "2027",

    problemSolving:
      "Strong foundation in Data Structures, Algorithms and competitive programming with excellent analytical thinking.",

    fullStack:
      "Building responsive web applications using React.js, Node.js, Express.js, MongoDB, REST APIs and Tailwind CSS.",
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 sm:mb-12 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
            Short introduction, goals, education and passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-8">
                <img
                  src={myPhoto}
                  alt={about.name}
                  className="w-40 h-52 sm:w-48 sm:h-60 md:w-52 md:h-64 lg:w-56 lg:h-72 rounded-xl border-2 border-cyan-400 object-cover shadow-lg shadow-cyan-500/30"
                />

                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {about.name}
                  </h3>

                  <p className="text-blue-400 mt-2">{about.title}</p>
                </div>
              </div>

              {/* Professional Summary */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Professional Summary
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-7 sm:leading-8">
                {about.summary}
              </p>

              {/* Career Objective */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3">
                Career Objective
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-7">
                {about.careerObjective}
              </p>

              {/* Education */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3">
                Education
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-7">
                {about.education}
                <br />
                Expected Graduation: {about.graduationYear}
              </p>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-5">
            {/* Problem Solving */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-blue-500 transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-3">
                Problem Solving
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-7">
                {about.problemSolving}
              </p>
            </div>

            {/* Full Stack Development */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-cyan-500 transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3">
                Full Stack Development
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-7">
                {about.fullStack}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
