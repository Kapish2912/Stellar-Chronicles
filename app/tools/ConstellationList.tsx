export default function ConstellationList() {
  const visibleConstellations = [
    { name: "Orion", bestTime: "Winter", mythology: "The Hunter" },
    { name: "Ursa Major", bestTime: "All year (N. Hemisphere)", mythology: "The Great Bear" },
    { name: "Scorpius", bestTime: "Summer", mythology: "The Scorpion" },
  ];

  return (
    <div className="mt-10 bg-black/40 border border-pink-500 rounded-lg p-6 backdrop-blur-md">
      <h2 className="text-xl font-bold text-pink-300 mb-4">🌌 Visible Constellations</h2>
      <ul className="space-y-3">
        {visibleConstellations.map((c, i) => (
          <li key={i} className="text-white/80">
            <strong>{c.name}</strong> – {c.mythology} (Best seen: {c.bestTime})
          </li>
        ))}
      </ul>
    </div>
  );
}
