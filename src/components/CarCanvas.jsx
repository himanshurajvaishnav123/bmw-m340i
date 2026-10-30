import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Lightbulb, RotateCcw, Eye, Sparkles, Sun, Moon } from "lucide-react";
import CarModel from "./CarModel";
import ColorPicker from "./ColorPicker";
import Hotspots from "./Hotspots";
import { useGLTF } from "@react-three/drei";
function RealCarModel(props) {
  const { scene } = useGLTF("/models/bmw_m340i.glb");
  return <primitive object={scene} {...props} />;
}
export default function CarCanvas() {
  const [paintColor, setPaintColor] = useState("#0055A5"); // Default Portimao Blue
  const [headlightsOn, setHeadlightsOn] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <section
      id="configurator"
      className="relative w-full h-[85vh] min-h-[600px] bg-gradient-to-b from-bmw-dark via-bmw-card/40 to-bmw-dark overflow-hidden my-12 py-6"
    >
      {/* Header Overlay */}
      <div className="absolute top-6 left-6 z-20 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bmw-mBlue/20 border border-bmw-mBlue/30 text-bmw-mLightBlue text-xs font-mono mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Interactive 3D Studio
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          3D Visualizer & Configurator
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Rotate 360°, inspect high-tech M components, toggle lights, and
          customize paint colors in real-time.
        </p>
      </div>

      {/* Control Buttons (Top Right Overlay) */}
      <div className="absolute top-6 right-6 z-20 flex flex-wrap gap-2">
        {/* Headlights Toggle */}
        <button
          onClick={() => setHeadlightsOn(!headlightsOn)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border backdrop-blur-md transition-all ${
            headlightsOn
              ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              : "bg-bmw-card/80 border-bmw-border text-gray-400 hover:text-white"
          }`}
        >
          <Lightbulb
            className={`w-4 h-4 ${headlightsOn ? "text-yellow-400 fill-yellow-400" : ""}`}
          />
          Headlights {headlightsOn ? "ON" : "OFF"}
        </button>

        {/* Auto Rotate Toggle */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border backdrop-blur-md transition-all ${
            autoRotate
              ? "bg-bmw-mBlue/30 border-bmw-mBlue text-bmw-mLightBlue shadow-[0_0_15px_rgba(0,102,177,0.3)]"
              : "bg-bmw-card/80 border-bmw-border text-gray-400 hover:text-white"
          }`}
        >
          <RotateCcw
            className={`w-4 h-4 ${autoRotate ? "animate-spin" : ""}`}
          />
          Auto-Rotate
        </button>
      </div>

      {/* Color Picker Overlay (Bottom Center/Left) */}
      <div className="absolute bottom-6 left-6 z-20 max-w-sm sm:max-w-md">
        <ColorPicker currentColor={paintColor} onChangeColor={setPaintColor} />
      </div>

      {/* Hotspots Component Overlay */}
      <Hotspots
        activeHotspot={activeHotspot}
        onSelectHotspot={setActiveHotspot}
      />

      {/* Three.js R3F Canvas */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas
          shadows
          camera={{ position: [3.8, 1.8, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            {/* Studio Lights Setup */}
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[5, 8, 5]}
              intensity={1.8}
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-camera-left={-6}
              shadow-camera-right={6}
              shadow-camera-top={6}
              shadow-camera-bottom={-6}
            />
            <directionalLight
              position={[-5, 5, -5]}
              intensity={0.8}
              color="#93c5fd"
            />
            <directionalLight position={[0, -2, -5]} intensity={0.4} />

            {/* HDR Environment Reflections */}
            <Environment preset="city">
              <Lightformer
                intensity={2}
                color="#ffffff"
                position={[0, 5, -9]}
                scale={[10, 50, 1]}
              />
              <Lightformer
                intensity={2}
                color="#60a5fa"
                position={[-5, 2, -1]}
                scale={[20, 1, 1]}
                rotation={[0, 0, Math.PI / 3]}
              />
            </Environment>

            {/* The 3D BMW M340i Car Model */}
            <CarModel
              paintColor={paintColor}
              headlightsOn={headlightsOn}
              autoRotate={autoRotate}
            />

            {/* Realistic Ground Reflections & Shadows */}
            <ContactShadows
              position={[0, -0.4, 0]}
              opacity={0.75}
              scale={12}
              blur={2.5}
              far={4}
            />

            {/* Orbit Controls */}
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={3.2}
              maxDistance={7.5}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2 - 0.05}
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
