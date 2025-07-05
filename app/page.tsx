"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Loader from "@/components/ui/Loader"; // ✅ Import your loader

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 -z-10 starfield" />

      {/* Loader using AnimatePresence */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <motion.div
          className="container mx-auto text-center max-w-3xl space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <span className="text-xl text-pink-300 font-medium tracking-wide glow-pink">
            🌌 Journey Through the Cosmos
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white glow-pink">
            Welcome to the <span className="text-pink-400">Stellar Chronicles</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg">
            Discover the awe of space history, today’s cosmic milestones, and your personal path to the stars.
            Dive into celestial archives, constellations, and stunning cosmic events — all in one orbit.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.6, ease: "easeInOut" },
            }}
          >
            <Link
              href="/stargazing"
              className="relative overflow-hidden border border-pink-500 text-pink-300 uppercase flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium border-glow-pink hover:bg-pink-500 hover:text-black transition"
            >
              Begin Stargazing Journey 🌠
            </Link>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
