import EventsSection from '@/components/ui/EventsSection';
import HeroSection from '@/components/ui/HeroSection';
import Navbar from '@/components/ui/Navbar';
import StarParticles from '@/components/ui/StarParticles'; // ✅ New
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Cosmic Dark App',
  description: 'Starry sky with glowing effects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-background text-foreground font-primary relative overflow-hidden">

        {/* 🌌 Star Particles Background */}
        <StarParticles /> {/* ✅ Inserted here */}

        {/* ✨ Starfield and Glow Effects */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[-1] pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#0f172a]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-[glitterStars_60s_linear_infinite]" />
          <div className="glow"></div>
          <div className="glow"></div>
          <div className="glow"></div>
        </div>

        {/* 🚀 AstroWeb Navbar */}
        <Navbar />

        {/* 🌌 Hero Section */}
        <HeroSection />

        {/* 🌠 Events Section */}
        <EventsSection />

        {/* Page Content */}
        <main className="relative z-10 pt-20">{children}</main>
      </body>
    </html>
  );
}
