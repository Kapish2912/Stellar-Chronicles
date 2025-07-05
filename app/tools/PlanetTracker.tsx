"use client";
import { useEffect, useState } from "react";

interface Planet {
  englishName: string;
  semimajorAxis: number;
  isPlanet: boolean;
}

export default function PlanetTracker() {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    interface Body {
      englishName: string;
      semimajorAxis: number;
      isPlanet: boolean;
    }

    async function fetchPlanets() {
      const res = await fetch("https://api.le-systeme-solaire.net/rest/bodies/");
      const json = await res.json();
      setPlanets(json.bodies.filter((b: Body) => b.isPlanet).slice(0, 8));
    }

    fetchPlanets();
  }, []);

  if (!planets.length) return <p className="text-white">Loading planets...</p>;

  return (
    <div>
      <h3 className="text-xl text-pink-300 font-bold">🪐 Planetary Alignment</h3>
      <ul className="text-white/80 list-disc ml-5">
        {planets.map((p) => (
          <li key={p.englishName}>
            {p.englishName} — a≈{(p.semimajorAxis / 1e6).toFixed(2)} million km
          </li>
        ))}
      </ul>
    </div>
  );
}
