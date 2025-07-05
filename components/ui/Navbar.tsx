"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Tools", href: "/tools" },
  { name: "Explore", href: "/explore" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { href: "/stargazing", label: "Stargazing" }

];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pink/40 backdrop-blur-lg shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold relative overflow-hidden border border-pink-500 text-pink-300 uppercase flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium border-glow-pink hover:bg-pink-500 hover:text-black transition"
        >
          Stellar Chronicles 🚀
        </Link>

        

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white transition duration-300 hover:text-accent hover:drop-shadow-[0_0_6px_#ff6ec7] glow-text"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black/90 px-6 pb-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white text-lg transition duration-300 hover:text-accent hover:drop-shadow-[0_0_6px_#ff6ec7] glow-text"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
