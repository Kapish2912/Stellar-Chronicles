"use client";

import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ConstellationVisualizer() {
  // Example star coordinates: RA/Dec converted to spherical
  const stars: { position: [number, number, number]; name: string }[] = [
    { position: [1, 1, 0], name: "Betelgeuse" },
    { position: [-1, -0.5, 0.5], name: "Rigel" },
    { position: [0.5, -0.2, -1], name: "Bellatrix" },
  ];

  return (
    <div className="w-full h-[400px] bg-black/30 rounded-lg border border-pink-500 backdrop-blur-md mb-8">
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* Ambient glow */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Starfield & points */}
        <Stars radius={5} depth={1} count={2000} factor={4} saturation={0} fade />
        {stars.map((star, i) => (
          <mesh key={i} position={star.position}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#ff6ec7" />
          </mesh>
        ))}

        {/* Orbit controls */}
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.1} />
      </Canvas>
    </div>
  );
}
