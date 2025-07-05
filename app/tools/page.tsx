"use client";

import Loader from "@/components/ui/Loader";
import StarParticles from "@/components/ui/StarParticles";
import { motion } from "framer-motion";

// ✅ Space Tools
import MoonPhase from "@/components/ui/MoonPhase";
import ConstellationList from "./ConstellationList";
import ConstellationVisualizer from "./ConstellationVisualizer";
import ISSWidget from "./ISSWidget";
import PlanetTracker from "./PlanetTracker";

export default function ToolsPage() {
  return (
    <section className="relative min-h-screen px-6 py-20 text-white overflow-hidden">
      <StarParticles />

      <div className="max-w-6xl mx-auto space-y-14">
        <Loader />

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-400 glow-pink">
            🛠️ Space Tools
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Make your cosmic journey smarter with real-time astronomy tools, planetary data,
            APIs, and visual helpers. All built for your AstroWeb experience.
          </p>
        </div>

        {/* 🌠 3D Constellation Visualizer */}
        <motion.div
          className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md space-y-6 hover:shadow-[0_0_20px_#ff6ec7] transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl text-pink-300 font-bold text-center">
            🌠 3D Constellation Visualizer
          </h2>
          <ConstellationVisualizer />
          <p className="text-white/70 text-sm text-center">
            Explore the constellation in a 3D interactive canvas powered by Three.js and React Three Fiber.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
  className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md space-y-3 hover:shadow-[0_0_20px_#ff6ec7] transition"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
>
  <MoonPhase />
</motion.div>

          {/* 📸 NASA Picture of the Day */}
          <motion.div
            className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md space-y-3 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl text-pink-300 font-bold">📸 NASA APOD</h2>
            <a
              href="https://apod.nasa.gov/apod/astropix.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white underline hover:text-pink-300"
            >
              View Astronomy Picture of the Day →
            </a>
            <p className="text-white/70 text-sm">
              Explore NASA’s curated daily space image, with scientific descriptions.
            </p>
          </motion.div>

          {/* 🛰️ Live ISS Tracker */}
          <motion.div
            className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md space-y-3 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl text-pink-300 font-bold">🛰️ Live ISS Tracker</h2>
            <ISSWidget />
            <p className="text-white/70 text-sm">
              Track the current position of the International Space Station in real time.
            </p>
          </motion.div>

          {/* 🪐 Planetary Alignment */}
          <motion.div
            className="bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md space-y-3 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-xl text-pink-300 font-bold">🪐 Planetary Alignment</h2>
            <PlanetTracker />
            <p className="text-white/70 text-sm">
              See which planets are currently aligned and visible from Earth.
            </p>
          </motion.div>

          {/* 🌌 Visible Constellations */}
          <motion.div
            className="md:col-span-2 bg-black/40 border border-pink-500 p-6 rounded-xl backdrop-blur-md space-y-3 hover:shadow-[0_0_20px_#ff6ec7] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-xl text-pink-300 font-bold">🌌 Tonight’s Visible Constellations</h2>
            <ConstellationList />
            <p className="text-white/70 text-sm">
              Discover which constellations are currently visible in your hemisphere.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
