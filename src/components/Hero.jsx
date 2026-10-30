import React from 'react';
import { ChevronDown, Gauge, Zap, Flame, Compass } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bmw-mBlue/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-bmw-mRed/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bmw-card/80 border border-bmw-border backdrop-blur-md mb-6 shadow-xl animate-float">
          <span className="w-2 h-2 rounded-full bg-bmw-mRed animate-ping"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            The Ultimate Driving Machine
          </span>
          <span className="text-bmw-mBlue font-bold">| M Power</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          BMW <span className="text-bmw-mBlue">M340i</span> <span className="text-gray-400 font-light">xDrive</span>
          <span className="block mt-2 metallic-text text-3xl sm:text-5xl lg:text-6xl">
            Pure Driving Dynamics
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-light">
          Engineered by BMW M. Powered by a 382 HP M TwinPower Turbo inline 6-cylinder engine,
          intelligent xDrive all-wheel drive, and razor-sharp motorsport agility.
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center border border-bmw-border">
            <span className="text-xs uppercase text-gray-400 font-mono mb-1 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-bmw-mRed" /> Engine
            </span>
            <span className="text-lg sm:text-xl font-bold text-white">3.0L Inline-6</span>
            <span className="text-[11px] text-gray-400">M TwinPower Turbo</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center border border-bmw-border">
            <span className="text-xs uppercase text-gray-400 font-mono mb-1 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> Power
            </span>
            <span className="text-lg sm:text-xl font-bold text-white">374 HP</span>
            <span className="text-[11px] text-gray-400">500 Nm Torque</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center border border-bmw-border">
            <span className="text-xs uppercase text-gray-400 font-mono mb-1 flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-bmw-mBlue" /> Acceleration
            </span>
            <span className="text-lg sm:text-xl font-bold text-white">0-100 km/h</span>
            <span className="text-[11px] text-emerald-400 font-mono">4.4 seconds</span>
          </div>

          <div className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center border border-bmw-border">
            <span className="text-xs uppercase text-gray-400 font-mono mb-1 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-purple-400" /> Drivetrain
            </span>
            <span className="text-lg sm:text-xl font-bold text-white">xDrive AWD</span>
            <span className="text-[11px] text-gray-400">M Sport Diff</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#configurator"
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-bmw-mBlue via-blue-600 to-bmw-mDarkBlue text-white font-bold text-sm uppercase tracking-wider shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 border border-blue-400/30"
          >
            Launch 3D Configurator
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
          <a
            href="#performance"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-bmw-border flex items-center justify-center gap-2"
          >
            Explore Performance Specs
          </a>
        </div>

      </div>
    </section>
  );
}
