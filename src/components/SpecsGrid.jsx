import React from 'react';
import { Gauge, Zap, Flame, Compass, Activity, Timer } from 'lucide-react';

export default function SpecsGrid() {
  const specs = [
    { label: 'Engine Type', value: 'M TwinPower Turbo Inline-6', icon: Flame, color: 'text-bmw-mRed' },
    { label: 'Power Output', value: '374 HP', icon: Zap, color: 'text-yellow-400' },
    { label: 'Torque', value: '500 Nm', icon: Activity, color: 'text-purple-400' },
    { label: 'Acceleration', value: '4.4s (0-100 km/h)', icon: Timer, color: 'text-emerald-400' },
    { label: 'Drive System', value: 'xDrive AWD', icon: Compass, color: 'text-bmw-mBlue' },
    { label: 'Transmission', value: '8-Speed Steptronic', icon: Gauge, color: 'text-gray-300' },
  ];

  return (
    <section id="specs" className="py-20 bg-bmw-darker border-y border-bmw-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Specifications</h2>
          <div className="w-20 h-1 bg-bmw-m-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-bmw-border hover:border-bmw-mBlue/50 transition-all duration-300 flex flex-col items-center text-center">
              <div className={`p-4 rounded-full bg-bmw-card mb-5 ${spec.color}`}>
                <spec.icon className="w-8 h-8" />
              </div>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">{spec.label}</h3>
              <p className="text-xl font-bold text-white tracking-tight">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
