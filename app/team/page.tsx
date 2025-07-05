"use client";

import Loader from "@/components/ui/Loader";
import StarParticles from "@/components/ui/StarParticles";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Kapish",
    role: "Frontend Developer",
    description: "Responsible for UI/UX design and page animations.",
    image: "/Kapish.png",
    github: "https://github.com/Kapish2912",
    linkedin: "https://www.linkedin.com/in/kapish-sharma-868340338",
    email: "mailto:onlinewithkapi@gmail.com",
  },
  {
    name: "Dhruv Sharma",
    role: "3D Constellation Dev",
    description: "Created Three.js based constellation visualizer and space elements.",
    image: "/Dhruv.png",
    github: "https://github.com/DhruvSharma2325",
    linkedin: "https://www.linkedin.com/in/dhruv-s-923a22280/",
    email: "mailto:ds800055@gmail.com",
  },
  {
    name: "Prashoon Mishra",
    role: "API Integrator",
    description: "Integrated real-time space APIs like ISS Tracker, Moon Phase & NASA APIs.",
    image: "/Prashoon.png",
    github: "https://www.linkedin.com/in/prashoon-mishra-2a2469338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    linkedin: "https://www.linkedin.com/in/prashoonmishra/",
    email: "mailto:prashoonmi2003@gmail.com",
  },
];

export default function TeamPage() {
  return (
    <section className="relative min-h-screen px-6 py-20 text-white overflow-hidden">
      <StarParticles />
      <Loader />

      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-400 glow-pink">
          🌟 Meet Our Stellar Team
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          The cosmic minds behind AstroWeb — bringing you a universe of knowledge and visuals.
        </p>

        {/* Team Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-black/40 border border-pink-500 rounded-2xl p-6 backdrop-blur-md 
                shadow-lg hover:shadow-[0_0_25px_#ff6ec7] transition transform hover:scale-105
                flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              {/* Avatar */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-[0_0_20px_#ff6ec7] glow-avatar">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105 rounded-full"
                />
              </div>

              {/* Name & Role */}
              <h2 className="text-xl font-bold text-pink-300 glow-pink">{member.name}</h2>
              <h3 className="text-sm text-white/70 uppercase tracking-wide">{member.role}</h3>
              <p className="text-white/80 text-sm max-w-xs">{member.description}</p>

              {/* Social Links if available */}
              {member.github && member.linkedin && member.email && (
                <div className="flex gap-5 pt-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition text-2xl hover:drop-shadow-[0_0_10px_#ff6ec7]"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition text-2xl hover:drop-shadow-[0_0_10px_#ff6ec7]"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.email}
                    className="text-white hover:text-pink-400 transition text-2xl hover:drop-shadow-[0_0_10px_#ff6ec7]"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
