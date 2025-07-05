"use client";
import { useEffect, useState } from "react";

interface ISSPosition {
  latitude: string;
  longitude: string;
}

export default function ISSWidget() {
  const [pos, setPos] = useState<ISSPosition | null>(null);

  useEffect(() => {
    async function fetchISS() {
      const res = await fetch("http://api.open-notify.org/iss-now.json");
      const json = await res.json();
      setPos(json.iss_position);
    }
    fetchISS();
    const timer = setInterval(fetchISS, 5000); // update every 5s
    return () => clearInterval(timer);
  }, []);

  if (!pos) return <p className="text-white">Loading ISS data...</p>;

  return (
    <div>
      <h3 className="text-xl text-pink-300 font-bold">🛰️ ISS Tracker</h3>
      <p className="text-white/80">
        Latitude: {pos.latitude} <br />
        Longitude: {pos.longitude}
      </p>
    </div>
  );
}
