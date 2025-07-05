"use client";

import { useEffect, useState } from "react";

export default function MoonPhaseWidget() {
  const [phase, setPhase] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchMoonPhase = async () => {
      const res = await fetch(
        `https://api.farmsense.net/v1/moonphases/?d=${Math.floor(
          new Date().getTime() / 1000
        )}`
      );
      const data = await res.json();
      if (data && data[0]) {
        setPhase(data[0].Phase);
        setDate(data[0].Date);
      }
    };

    fetchMoonPhase();
  }, []);

  return (
    <div className="bg-black/40 border border-pink-500 p-4 rounded-xl backdrop-blur-md space-y-2">
      <h3 className="text-lg font-bold text-pink-300">🌘 Current Moon Phase</h3>
      <p className="text-white/80">Phase: {phase || "Loading..."}</p>
      <p className="text-white/50 text-sm">Date: {date}</p>
    </div>
  );
}
