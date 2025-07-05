"use client";
import { useEffect, useState } from "react";

export default function MoonPhase() {
  const [phase, setPhase] = useState<string>("");

  useEffect(() => {
    async function fetchMoon() {
      const res = await fetch(
        `https://api.weatherapi.com/v1/astronomy.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=Delhi`
      );
      const data = await res.json();
      setPhase(data.astronomy.astro.moon_phase);
    }
    fetchMoon();
  }, []);

  return (
    <div className="space-y-2">
      <h2 className="text-xl text-pink-300 font-bold">🌑 Current Moon Phase</h2>
      <p className="text-white/80 text-lg">{phase || "Loading..."}</p>
      <p className="text-white/60 text-sm">
        Real-time lunar phase fetched via WeatherAPI.
      </p>
    </div>
  );
}
