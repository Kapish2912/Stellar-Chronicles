"use client";

import Loader from "@/components/ui/Loader";
import StarParticles from "@/components/ui/StarParticles";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExplorePage() {
  return (
    <section className="relative min-h-screen px-6 py-20 text-white overflow-hidden">
      <StarParticles />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* 🌀 Header Glow Frame */}
        <Loader />
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-400 glow-pink">
            🌠 Explore the Universe with Stellar Chronicles
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Stellar Chronicles is your personalized gateway to the stars. From constellations to cosmic
            history, we bring the universe closer—beautifully visualized, deeply interactive.
          </p>
        </div>

        {/* 🚀 What is AstroWeb */}
        <motion.div
          className="bg-black/40 border border-pink-500 rounded-xl p-6 backdrop-blur-md shadow-lg space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-pink-300 glow-pink">🧭 What is Stellar Chronicles?</h2>
          <p className="text-white/80">
            Stellar Chronicles is a cosmic portal that combines astronomy, storytelling, and technology.
            It offers:
          </p>
          <ul className="list-disc pl-6 text-white/70 space-y-1">
            <li>🌀 Dynamic constellation visualization with mythological context</li>
            <li>📆 Daily cosmic events and historical space missions</li>
            <li>🔬 Tools for students, astronomers, and educators</li>
            <li>🎇 Glowing, immersive UI crafted for space lovers</li>
          </ul>
        </motion.div>

        {/* ✨ Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* 1. Constellation Explorer */}
          <motion.div
            className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/stargazing">
              <h3 className="text-xl font-bold text-pink-300 mb-2">🌌 Constellation Explorer</h3>
              <p className="text-white/80 text-sm">
                Learn about over 88 constellations like Orion, Leo, and Cassiopeia — with star maps,
                mythologies, and sky visibility guides.
              </p>
            </Link>
          </motion.div>

          {/* 2. Timeline */}
          <motion.div
            className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/events">
              <h3 className="text-xl font-bold text-pink-300 mb-2">📅 Space Timeline</h3>
              <p className="text-white/80 text-sm">
                Discover missions, discoveries, and events that happened on this day in history —
                from Apollo landings to supernovae sightings.
              </p>
            </Link>
          </motion.div>

          {/* 3. Space Tools */}
          <motion.div
            className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/tools">
              <h3 className="text-xl font-bold text-pink-300 mb-2">🛠️ Space Tools</h3>
              <p className="text-white/80 text-sm">
                Use live APIs, calculate moon phases, and fetch space weather updates in one place —
                designed for learners and professionals.
              </p>
            </Link>
          </motion.div>

          {/* 4. Start Your Journey */}
          <motion.div
            className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/stargazing">
              <h3 className="text-xl font-bold text-pink-300 mb-2">🚀 Begin Your Journey</h3>
              <p className="text-white/80 text-sm">
                Create your path through the stars. Choose your favorite constellations, track
                events, and mark your own celestial milestones.
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
