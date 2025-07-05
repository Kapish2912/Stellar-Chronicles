"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { constellations } from "@/components/ui/constellations";

const events = [
  { title: "🌕 Full Moon", date: "July 21, 2025" },
  { title: "🌠 Perseid Meteor Shower", date: "August 12, 2025" },
  { title: "🌑 Partial Lunar Eclipse", date: "September 17, 2025" },
];

const cosmicFacts = [
  "Neutron stars can spin 600 times per second.",
  "A spoonful of a neutron star weighs about a billion tons.",
  "Venus rotates backwards compared to most planets.",
  "There are more stars in the universe than grains of sand on Earth.",
];

const featuredConstellation =
  constellations[Math.floor(Math.random() * constellations.length)];

export default function StargazingJourney() {
  const [factIndex, setFactIndex] = useState(0);

  return (
    <section className="min-h-screen px-6 py-20 text-white relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#111827]">
      {/* 🌌 Background Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* 🌟 Left: Constellation Image */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="w-[400px] h-[400px] rounded-2xl border-4 border-pink-500 p-4 bg-black/30 backdrop-blur-md relative shadow-[0_0_40px_#ff6ec7] animate-pulse"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src={featuredConstellation.image}
              alt={featuredConstellation.name}
              className="w-full h-full object-contain rounded-xl"
            />
          </motion.div>
        </div>

        {/* 🌠 Right: Info & Events */}
        <div className="flex-1 space-y-10">
          {/* ✨ Title */}
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-pink-200 flex items-center gap-2 drop-shadow-[0_0_12px_#ff6ec7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BsStars className="text-3xl text-pink-300 animate-pulse" />
            Stargazing Journey
          </motion.h1>

          {/* 🌌 Featured Constellation */}
          <motion.div
            className="bg-black/40 border border-pink-500 rounded-xl p-4 backdrop-blur-md drop-shadow-[0_0_10px_#ff6ec7]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-pink-300 mb-1 drop-shadow-[0_0_6px_#ff6ec7]">
              ✨ Featured Constellation: {featuredConstellation.name}
            </h2>
            <p className="text-white/80 text-sm">{featuredConstellation.description}</p>
          </motion.div>

          {/* 📅 Events */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event, i) => (
              <motion.div
                key={i}
                className="bg-black/40 border border-pink-500 rounded-xl p-4 backdrop-blur-md hover:scale-105 hover:shadow-[0_0_15px_#ff6ec7] transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <h3 className="text-base font-bold text-pink-300">{event.title}</h3>
                <p className="text-white/60 text-sm">{event.date}</p>
              </motion.div>
            ))}
          </div>

          {/* 🚀 Cosmic Fact */}
          <div className="text-center pt-4">
            <h2 className="text-lg font-semibold text-pink-300 mb-2 drop-shadow-[0_0_6px_#ff6ec7]">
              🚀 Did You Know?
            </h2>
            <p className="text-white text-base">{cosmicFacts[factIndex]}</p>
            <button
              className="mt-3 bg-pink-500 px-5 py-2 rounded-md text-black font-semibold hover:bg-pink-400 hover:shadow-[0_0_12px_#ff6ec7] transition"
              onClick={() => setFactIndex((prev) => (prev + 1) % cosmicFacts.length)}
            >
              Show Another Fact
            </button>
          </div>

          {/* 🎯 CTA */}
          <div className="text-center">
            <motion.a
              href="/journey"
              className="inline-block mt-6 px-8 py-4 rounded-lg bg-pink-500 text-black font-bold shadow-lg border-glow-pink hover:scale-105 hover:shadow-[0_0_25px_#ff6ec7] transition"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              🌌 Embark on the Full Cosmic Journey
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
