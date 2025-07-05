"use client";

import Loader from "@/components/ui/Loader";
import StarParticles from "@/components/ui/StarParticles";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNasa, SiNextdotjs, SiTailwindcss, SiThreedotjs } from "react-icons/si";

export default function AboutPage() {
  const cards = [
    {
      title: "🚀 Our Mission",
      description:
        "To bring the vast universe closer through stunning visualizations, live celestial data, and space exploration tools — all tailored for students, developers, and cosmic dreamers.",
      delay: 0.2,
    },
    {
      title: "🌌 What We Offer",
      description:
        "Stargazing tools, planetary alignment data, real-time satellite tracking, historical space events, 3D constellation visuals, and cosmic widgets to deepen your space curiosity.",
      delay: 0.3,
    },
    {
      title: "🧠 Who It’s For",
      description:
        "Anyone with a passion for space — educators, astronomy hobbyists, school students, astrophysicists, web developers, and explorers at heart.",
      delay: 0.4,
    },
    {
      title: "🪐 Cosmic Vision",
      description:
        "To create an open-source galaxy hub that evolves with AI-powered exploration, star mapping, and real-time global sky data — all accessible from a single portal.",
      delay: 0.5,
    },
  ];

  const techStack = [
    { icon: <SiNextdotjs className="text-white text-2xl" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-sky-400 text-2xl" />, name: "Tailwind CSS" },
    { icon: <SiThreedotjs className="text-pink-400 text-2xl" />, name: "Three.js" },
    { icon: <FaReact className="text-cyan-400 text-2xl" />, name: "Framer Motion" },
    { icon: <SiNasa className="text-red-400 text-2xl" />, name: "NASA APIs" },
  ];

  return (
    <section className="relative min-h-screen px-6 py-20 text-white overflow-hidden">
      <StarParticles />
      <Loader />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-400 glow-pink animate-pulse">
            🌠 About Stellar Chronicles
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            A digital observatory built to educate, explore, and empower the next generation of starseekers.
          </p>
        </div>

        {/* Floating Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-black/30 backdrop-blur-xl border border-pink-500 rounded-xl p-6 text-center transform hover:-translate-y-2 transition duration-300 shadow-[0_0_30px_#ff6ec7] animate-float"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay }}
            >
              <h2 className="text-xl font-bold text-pink-300 mb-2 glow-pink">
                {card.title}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="bg-black/30 backdrop-blur-xl border border-pink-500 rounded-xl p-8 space-y-6 shadow-[0_0_40px_#ff6ec7] animate-float">
          <h2 className="text-2xl text-pink-300 font-bold text-center glow-pink mb-4">
            🛠️ Built With
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <div className="bg-black/50 p-4 rounded-full border border-pink-500 shadow-[0_0_15px_#ff6ec7]">
                  {tech.icon}
                </div>
                <span className="text-sm text-white/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
