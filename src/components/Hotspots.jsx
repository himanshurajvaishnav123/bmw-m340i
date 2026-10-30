import React, { useState } from 'react';
import { Info, X, Shield, Zap, Disc, Cpu } from 'lucide-react';

export const HOTSPOTS = [
  {
    id: 'brakes',
    title: 'M Sport Brakes',
    position: [-1.4, 0.2, 1.3],
    icon: Disc,
    summary: 'Blue painted 4-piston fixed front calipers with perforated compound brake discs for extreme thermal resistance and stopping power.',
    specs: ['348mm Front Discs', '345mm Rear Discs', 'M Sport Blue Calipers']
  },
  {
    id: 'suspension',
    title: 'Adaptive M Suspension',
    position: [0, 0.1, 0.5],
    icon: Shield,
    summary: 'Electronically controlled dampers adjust automatically to road conditions and driving style for optimized agility and ride comfort.',
    specs: ['Variable Damper Control', 'Lowered M Sport Stance', 'Comfort & Sport+ Modes']
  },
  {
    id: 'engine',
    title: 'M TwinPower Turbo Inline-6',
    position: [0, 0.6, 1.8],
    icon: Cpu,
    summary: '3.0-litre 6-cylinder gasoline engine featuring twin-scroll turbocharging, Valvetronic fully variable valve control, and High Precision Injection.',
    specs: ['374 HP @ 5,500-6,500 rpm', '500 Nm @ 1,900-5,000 rpm', '0-100 km/h in 4.4s']
  },
  {
    id: 'diff',
    title: 'M Sport Differential',
    position: [0, 0.2, -1.3],
    icon: Zap,
    summary: 'Electronically controlled locking rear differential optimizes traction and cornering stability during dynamic driving maneuvers.',
    specs: ['Fully Variable Locking (0-100%)', 'Enhanced Cornering Agility', 'Optimized xDrive Torque Split']
  },
];

export default function Hotspots({ activeHotspot, onSelectHotspot }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
      {/* Hotspot Floating Buttons over 3D viewer container */}
      <div className="relative w-full h-full max-w-5xl mx-auto">
        {HOTSPOTS.map((hotspot) => {
          const Icon = hotspot.icon;
          const isActive = activeHotspot === hotspot.id;

          return (
            <div key={hotspot.id} className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                 style={{
                   // Approximate screen positioning mapping for UI overlay
                   top: hotspot.id === 'engine' ? '38%' : hotspot.id === 'suspension' ? '50%' : hotspot.id === 'brakes' ? '65%' : '60%',
                   left: hotspot.id === 'engine' ? '50%' : hotspot.id === 'suspension' ? '45%' : hotspot.id === 'brakes' ? '28%' : '72%',
                 }}>
              <button
                onClick={() => onSelectHotspot(isActive ? null : hotspot.id)}
                className={`relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-bmw-mBlue text-white scale-110 shadow-[0_0_20px_rgba(0,102,177,0.8)]'
                    : 'bg-bmw-card/90 border border-bmw-border text-bmw-mLightBlue hover:bg-bmw-mBlue hover:text-white hover:scale-105'
                }`}
                title={hotspot.title}
              >
                <span className="absolute -inset-1 rounded-full bg-bmw-mBlue/30 animate-ping opacity-75"></span>
                <Icon className="w-5 h-5 relative z-10" />
              </button>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap px-3 py-1.5 rounded-lg bg-bmw-dark/95 border border-bmw-border text-xs text-white shadow-xl z-30">
                {hotspot.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Hotspot Modal Card Overlay */}
      {activeHotspot && (
        <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-96 glass-card p-5 rounded-2xl border border-bmw-border pointer-events-auto shadow-2xl animate-fadeIn z-30">
          {(() => {
            const h = HOTSPOTS.find(item => item.id === activeHotspot);
            if (!h) return null;
            const Icon = h.icon;
            return (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-bmw-mBlue/20 border border-bmw-mBlue/30 flex items-center justify-center text-bmw-mLightBlue">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base">{h.title}</h3>
                  </div>
                  <button
                    onClick={() => onSelectHotspot(null)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">{h.summary}</p>
                <div className="space-y-1.5 pt-2 border-t border-bmw-border">
                  {h.specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Spec {i + 1}</span>
                      <span className="font-mono font-medium text-bmw-mLightBlue">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
