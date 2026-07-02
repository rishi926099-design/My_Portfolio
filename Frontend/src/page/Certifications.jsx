import React, { useEffect, useState } from "react";
import { getCertifications } from "../api/certificationApi";

export default function Certifications() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const res = await getCertifications();

        const certData = Array.isArray(res?.data?.data)
          ? res.data.data
          : Array.isArray(res?.data)
            ? res.data
            : [];

        setCertifications(certData);
      } catch (err) {
        console.error(err);
        setError("Failed to load certifications.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-[#020817] to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Certifications
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Professional Certifications & Learning Journey
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-lg text-cyan-400 animate-pulse">
            Loading Certifications...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center text-red-500 text-lg">{error}</div>
        )}

        {/* Empty */}
        {!loading && !error && certifications.length === 0 && (
          <div className="text-center text-gray-400 text-lg">
            No Certifications Found
          </div>
        )}

        {/* Cards */}
        {!loading && !error && certifications.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={cert._id || index}
                className="group relative rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[1px] transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="h-full rounded-2xl bg-slate-900/90 backdrop-blur-lg p-6 border border-slate-700 group-hover:border-cyan-400 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                  {/* Top */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
                      {cert.type}
                    </span>

                    <span className="text-4xl">🏆</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.name}
                  </h2>

                  {/* Provider */}
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-cyan-400">
                      Provider :
                    </span>{" "}
                    {cert.provider}
                  </p>

                  {/* Category */}
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-cyan-400">
                      Category :
                    </span>{" "}
                    {cert.category}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-6 mt-4 min-h-[96px]">
                    {cert.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
                    <span className="text-cyan-300 font-medium">
                      📅 {cert.year}
                    </span>

                    <span className="text-green-400 font-semibold">
                      ✔ Completed
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
