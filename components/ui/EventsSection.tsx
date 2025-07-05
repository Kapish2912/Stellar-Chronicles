"use client";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export const mockEvents = [
  {
    title: "🌕 Full Moon Night",
    date: "July 21, 2025",
    description: "Experience the celestial glow as the moon reaches its full phase tonight.",
  },
  {
    title: "🚀 Apollo 11 Launch Anniversary",
    date: "July 16, 1969",
    description: "Celebrating humanity's first steps on the Moon with stories and missions.",
  },
  {
    title: "🌌 Perseid Meteor Shower Peak",
    date: "August 12, 2025",
    description: "Don’t miss the brightest meteor shower of the year lighting up the sky.",
  },
  {
    title: "🛰️ Hubble Space Telescope Launch",
    date: "April 24, 1990",
    description: "Hubble began its journey, providing breathtaking views of deep space.",
  },
  {
    title: "☀️ Solar Eclipse Special",
    date: "October 14, 2023",
    description: "A spectacular annular solar eclipse graced the skies.",
  },
  {
    title: "🪐 Saturn Ring Day",
    date: "May 27, 2005",
    description: "Cassini captured magnificent close-ups of Saturn’s rings.",
  },
  {
    title: "🌍 Earth Day",
    date: "April 22, 1970",
    description: "Global celebration promoting environmental awareness and space sustainability.",
  },
  {
    title: "🌠 Halley's Comet Return",
    date: "February 9, 1986",
    description: "Visible once every 76 years, Halley's comet amazed stargazers worldwide.",
  },
  {
    title: "🛸 First UFO Report",
    date: "June 24, 1947",
    description: "Pilot Kenneth Arnold reported unidentified flying objects over Mount Rainier.",
  },
  {
    title: "🛰️ Sputnik Launch",
    date: "October 4, 1957",
    description: "The first artificial satellite launched by the USSR, marking the Space Age.",
  },
  {
    title: "👨‍🚀 First Human in Space",
    date: "April 12, 1961",
    description: "Yuri Gagarin orbited Earth in Vostok 1, changing history forever.",
  },
  {
    title: "🌕 First Moon Landing",
    date: "July 20, 1969",
    description: "Neil Armstrong and Buzz Aldrin landed on the Moon in Apollo 11.",
  },
  {
    title: "🌑 Chandrayaan-3 Soft Landing",
    date: "August 23, 2023",
    description: "India became the first to land on the Moon’s south pole.",
  },
  {
    title: "🌟 James Webb Telescope First Image",
    date: "July 12, 2022",
    description: "Webb captured the deepest infrared image of the distant universe.",
  },
  {
    title: "🛰️ Mars Rover Curiosity Lands",
    date: "August 6, 2012",
    description: "NASA’s Curiosity rover landed on Mars, starting its Martian journey.",
  },
  {
    title: "🌠 Shubankar Mishra Meteorite Discovery",
    date: "July 3, 2025",
    description: "Student Shubankar Mishra identified a rare cosmic rock in Odisha, India.",
  },
  {
    title: "🛰️ International Space Station Assembly Begins",
    date: "November 20, 1998",
    description: "Zarya module launched to begin ISS construction.",
  },
  {
    title: "🚀 SpaceX Falcon Heavy Launch",
    date: "February 6, 2018",
    description: "Elon Musk’s Tesla Roadster launched into orbit with Starman.",
  },
  {
    title: "🛰️ Parker Solar Probe Launched",
    date: "August 12, 2018",
    description: "Mission to touch the Sun began with NASA’s Parker Solar Probe.",
  },
  {
    title: "🌍 Blue Marble Photo Taken",
    date: "December 7, 1972",
    description: "Apollo 17 crew captured the full image of Earth — the Blue Marble.",
  },
  {
    title: "🪐 Jupiter’s Moons Discovered",
    date: "January 7, 1610",
    description: "Galileo discovered Jupiter’s largest moons: Io, Europa, Ganymede, and Callisto.",
  },
  {
    title: "🌘 First Image of a Black Hole",
    date: "April 10, 2019",
    description: "Event Horizon Telescope revealed the first-ever image of a black hole.",
  },
  {
    title: "🚀 India’s PSLV-C37 Record",
    date: "February 15, 2017",
    description: "ISRO launched 104 satellites in a single mission.",
  },
  {
    title: "🌖 Lunar Eclipse Celebration",
    date: "May 16, 2022",
    description: "Total lunar eclipse visible from North and South America.",
  },
  {
    title: "👽 NASA Confirms Exoplanets",
    date: "February 22, 2017",
    description: "Discovery of seven Earth-sized planets orbiting TRAPPIST-1.",
  },
  {
    title: "🔭 Hubble Ultra Deep Field",
    date: "March 9, 2004",
    description: "Deepest image of the universe ever taken by Hubble Telescope.",
  },
  {
    title: "🛸 Roswell Incident Anniversary",
    date: "July 8, 1947",
    description: "A mysterious object crashed in Roswell — sparking UFO theories.",
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
};

const EventsSection = () => {
  return (
    <section className="relative py-24 px-4 text-white z-10 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]" />
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-[glitterStars_60s_linear_infinite]" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -top-20 right-0 w-60 h-60 bg-fuchsia-400/30 blur-2xl rounded-full animate-pulse" />

      {/* 🚀 Rocket */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -200, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 text-pink-400 text-5xl z-20"
      >
        <FaRocket className="drop-shadow-lg animate-bounce" />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto text-center mb-16"
      >
        <motion.h2
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="text-4xl md:text-5xl font-bold glow-text"
        >
          ✨ Cosmic Events
        </motion.h2>
        <p className="text-white/70 mt-2 text-lg">Stay up to date with the universe.</p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {mockEvents.map((event, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateY: 2,
              rotateX: 2,
              boxShadow: "0px 0px 25px #ff6ec7",
            }}
            className="rounded-3xl p-6 border border-pink-500 bg-black/40 backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-pink-300 glow-text">{event.title}</h3>
            <p className="text-sm text-white/60 mt-1 mb-3">{event.date}</p>
            <p className="text-white/90 text-base leading-relaxed">{event.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EventsSection;
