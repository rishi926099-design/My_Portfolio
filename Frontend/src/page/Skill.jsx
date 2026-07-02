import React, { useEffect, useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/skills");
        setSkills(res.data.data);
      } catch (error) {
        console.log("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // icon handler (FaReact, SiMongodb etc.)
  const getIcon = (iconName, color) => {
    const FaIcon = FaIcons[iconName];
    const SiIcon = SiIcons[iconName];

    const Icon = FaIcon || SiIcon;

    if (!Icon) return null;

    return <Icon size={28} color={color || "#fff"} />;
  };

  if (loading) {
    return (
      <div className="text-white text-center py-20">Loading Skills...</div>
    );
  }

  // group by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";

    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);

    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0f172a] text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>

        <p className="text-center text-gray-400 mb-12">
          My tech stack based on real-world projects and experience.
        </p>

        <div className="space-y-12">
          {Object.keys(groupedSkills).map((category, index) => (
            <div key={index}>
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 border-l-4 border-cyan-400 pl-3">
                {category}
              </h3>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {groupedSkills[category].map((skill) => (
                  <div
                    key={skill._id}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-cyan-400 hover:-translate-y-2 hover:scale-105 transition-all duration-500"
                  >
                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mb-4">
                      {getIcon(skill.icon, skill.color)}
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>

                    {/* Percentage */}
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-cyan-400">{skill.percentage}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-700"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
