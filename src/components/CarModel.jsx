import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CarModel({ paintColor, headlightsOn, autoRotate }) {
  const groupRef = useRef();

  // Subtle idle floating / rotation animation if autoRotate is enabled
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* --- CHASSIS / MAIN BODY --- */}
      {/* Lower Main Body / Sill */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.1, 0.5, 4.6]} />
        <meshStandardMaterial
          color={paintColor}
          metalness={0.9}
          roughness={0.15}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Upper Cabin / Greenhouse */}
      <mesh position={[0, 0.95, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[1.85, 0.65, 2.5]} />
        <meshStandardMaterial
          color={paintColor}
          metalness={0.85}
          roughness={0.2}
          clearcoat={1.0}
        />
      </mesh>

      {/* Front Windshield Slanted Box */}
      <mesh position={[0, 0.92, 1.05]} rotation={[0.45, 0, 0]} castShadow>
        <boxGeometry args={[1.8, 0.08, 1.1]} />
        <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
      </mesh>

      {/* Rear Window Slanted Box */}
      <mesh position={[0, 0.92, -1.15]} rotation={[-0.45, 0, 0]} castShadow>
        <boxGeometry args={[1.8, 0.08, 1.1]} />
        <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
      </mesh>

      {/* Side Windows (Glass Cabin) */}
      <mesh position={[0.93, 0.95, -0.1]}>
        <boxGeometry args={[0.05, 0.55, 2.3]} />
        <meshStandardMaterial color="#0b0c10" roughness={0.1} metalness={0.9} transparent opacity={0.7} />
      </mesh>
      <mesh position={[-0.93, 0.95, -0.1]}>
        <boxGeometry args={[0.05, 0.55, 2.3]} />
        <meshStandardMaterial color="#0b0c10" roughness={0.1} metalness={0.9} transparent opacity={0.7} />
      </mesh>

      {/* Carbon Fiber Roof Panel */}
      <mesh position={[0, 1.28, -0.1]}>
        <boxGeometry args={[1.75, 0.04, 1.6]} />
        <meshStandardMaterial color="#1f2937" roughness={0.4} metalness={0.5} />
      </mesh>

      {/* --- BMW M KIDNEY GRILLE & FRONT BUMPER --- */}
      {/* Front Bumper Area */}
      <mesh position={[0, 0.35, 2.35]}>
        <boxGeometry args={[2.0, 0.45, 0.2]} />
        <meshStandardMaterial color={paintColor} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Iconic M Kidney Grille */}
      <group position={[0, 0.45, 2.45]}>
        <mesh position={[-0.2, 0, 0]}>
          <boxGeometry args={[0.32, 0.35, 0.08]} />
          <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.2, 0, 0]}>
          <boxGeometry args={[0.32, 0.35, 0.08]} />
          <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Grille Chrome Surrounds */}
        <mesh position={[-0.2, 0, 0.02]}>
          <boxGeometry args={[0.36, 0.39, 0.04]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[0.2, 0, 0.02]}>
          <boxGeometry args={[0.36, 0.39, 0.04]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* Headlights */}
      <group position={[0, 0.5, 2.38]}>
        {/* Left Headlight */}
        <mesh position={[-0.75, 0, 0]} rotation={[0, 0.1, 0]}>
          <boxGeometry args={[0.5, 0.15, 0.15]} />
          <meshStandardMaterial
            color={headlightsOn ? "#ffffff" : "#374151"}
            emissive={headlightsOn ? "#60a5fa" : "#000000"}
            emissiveIntensity={headlightsOn ? 2.5 : 0}
            metalness={0.5}
            roughness={0.1}
          />
        </mesh>
        {/* Right Headlight */}
        <mesh position={[0.75, 0, 0]} rotation={[0, -0.1, 0]}>
          <boxGeometry args={[0.5, 0.15, 0.15]} />
          <meshStandardMaterial
            color={headlightsOn ? "#ffffff" : "#374151"}
            emissive={headlightsOn ? "#60a5fa" : "#000000"}
            emissiveIntensity={headlightsOn ? 2.5 : 0}
            metalness={0.5}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Headlight Beams (Spotlights when ON) */}
      {headlightsOn && (
        <group position={[0, 0.5, 2.5]}>
          <spotLight
            position={[-0.75, 0, 0]}
            angle={0.6}
            penumbra={0.5}
            intensity={4}
            color="#93c5fd"
            distance={15}
            target-position={[-0.75, -0.5, 10]}
          />
          <spotLight
            position={[0.75, 0, 0]}
            angle={0.6}
            penumbra={0.5}
            intensity={4}
            color="#93c5fd"
            distance={15}
            target-position={[0.75, -0.5, 10]}
          />
        </group>
      )}

      {/* Lower Air Intake & M Sport Accents */}
      <mesh position={[0, 0.18, 2.42]}>
        <boxGeometry args={[1.4, 0.12, 0.1]} />
        <meshStandardMaterial color="#0b0c10" roughness={0.9} />
      </mesh>

      {/* --- REAR & TAILIGHTS --- */}
      <mesh position={[0, 0.4, -2.35]}>
        <boxGeometry args={[2.0, 0.45, 0.2]} />
        <meshStandardMaterial color={paintColor} metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Tailights */}
      <group position={[0, 0.5, -2.43]}>
        <mesh position={[-0.7, 0, 0]}>
          <boxGeometry args={[0.55, 0.14, 0.1]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1.5} />
        </mesh>
        <mesh position={[0.7, 0, 0]}>
          <boxGeometry args={[0.55, 0.14, 0.1]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={1.5} />
        </mesh>
      </group>

      {/* M340i Badge & BMW Roundel */}
      <mesh position={[0.65, 0.52, -2.46]}>
        <boxGeometry args={[0.25, 0.08, 0.02]} />
        <meshStandardMaterial color="#e5e7eb" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Twin Exhaust Tips */}
      <group position={[0, 0.15, -2.45]}>
        <mesh position={[-0.45, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[0.45, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* --- WHEELS (4x) --- */}
      {/* Front Left Wheel */}
      <group position={[-1.05, 0, 1.3]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.38, 0.38, 0.3, 32]} />
          <meshStandardMaterial color="#1f2937" roughness={0.8} />
        </mesh>
        {/* Alloy Rim */}
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.32, 16]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* M Sport Blue Caliper */}
        <mesh position={[0, 0.08, 0.12]}>
          <boxGeometry args={[0.12, 0.12, 0.08]} />
          <meshStandardMaterial color="#0066B1" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Front Right Wheel */}
      <group position={[1.05, 0, 1.3]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.38, 0.38, 0.3, 32]} />
          <meshStandardMaterial color="#1f2937" roughness={0.8} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.32, 16]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.08, 0.12]}>
          <boxGeometry args={[0.12, 0.12, 0.08]} />
          <meshStandardMaterial color="#0066B1" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Rear Left Wheel */}
      <group position={[-1.05, 0, -1.3]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.38, 0.38, 0.32, 32]} />
          <meshStandardMaterial color="#1f2937" roughness={0.8} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.34, 16]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.08, 0.12]}>
          <boxGeometry args={[0.12, 0.12, 0.08]} />
          <meshStandardMaterial color="#0066B1" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Rear Right Wheel */}
      <group position={[1.05, 0, -1.3]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.38, 0.38, 0.32, 32]} />
          <meshStandardMaterial color="#1f2937" roughness={0.8} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.34, 16]} />
          <meshStandardMaterial color="#e5e7eb" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.08, 0.12]}>
          <boxGeometry args={[0.12, 0.12, 0.08]} />
          <meshStandardMaterial color="#0066B1" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Side Mirrors */}
      <mesh position={[-0.98, 0.95, 0.7]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.18, 0.12, 0.18]} />
        <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.98, 0.95, 0.7]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.18, 0.12, 0.18]} />
        <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.1} />
      </mesh>

    </group>
  );
}
