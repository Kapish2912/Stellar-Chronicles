"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mockEvents } from "./EventsSection"; // Make sure mockEvents is exported as a named export

function getTodayEvent(events: typeof mockEvents) {
  const today = new Date().toDateString();
  return events.find((event: typeof mockEvents[0]) => new Date(event.date).toDateString() === today);
}

const HeroSection = () => {
  const [todayEvent, setTodayEvent] = useState<null | typeof mockEvents[0]>(null);

  useEffect(() => {
    const event = getTodayEvent(mockEvents);
    setTodayEvent(event || null);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* 🌌 Glowing Pink Aura */}
      <div className="absolute w-[600px] h-[600px] bg-pink-500 opacity-30 blur-[160px] rounded-full animate-pulse z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* 🪐 Orbiting Planets (4 total) */}
      <div className="orbit-container w-[600px] h-[600px]">
        <div className="orbit"><div className="planet" /></div>
        <div className="orbit2"><div className="planet" /></div>
        <div className="orbit3"><div className="planet" /></div>
        <div className="orbit4"><div className="planet" /></div>
      </div>

      {/* 💫 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          <span className="text-pink-300 drop-shadow-[0_0_8px_#ff6ec7]">Stellar Chronicles:</span>
          <br />
          <span className="text-accent drop-shadow-[0_0_8px_#ff6ec7]">Today in Space History</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-white/80 mb-8 text-lg md:text-xl"
        >
          Explore legendary space missions & cosmic discoveries that happened on this very day. 💫
        </motion.p>

        {/* 🌠 Today Event Card */}
        {todayEvent ? (
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="bg-black/40 backdrop-blur-xl border border-pink-500/70 rounded-xl px-6 py-5 mb-6 shadow-lg max-w-md mx-auto"
          >
            <h3 className="text-2xl font-semibold text-pink-300 glow-text">{todayEvent.title}</h3>
            <p className="text-sm text-white/60 mt-1 mb-2">{todayEvent.date}</p>
            <p className="text-white/90">{todayEvent.description}</p>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-pink-300 text-sm mb-4"
          >
            No cosmic event today — the stars are resting 🌌
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Link
            href="#events"
            className="inline-block px-8 py-3 bg-pink-500 text-black font-semibold rounded-lg 
              shadow-lg transition hover:scale-105 hover:shadow-[0_0_20px_#ff6ec7]"
          >
            See All Events 🚀
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
