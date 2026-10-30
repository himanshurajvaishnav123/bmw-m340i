import React from 'react';
import { Palette, Check } from 'lucide-react';

export const COLORS = [
  { name: 'Portimao Blue', hex: '#0055A5', bg: 'bg-[#0055A5]', description: 'Metallic M Blue' },
  { name: 'Frozen Dark Grey', hex: '#2C3038', bg: 'bg-[#2C3038]', description: 'BMW Individual Matt' },
  { name: 'Sunset Orange', hex: '#D9381E', bg: 'bg-[#D9381E]', description: 'Vibrant Metallic' },
  { name: 'Alpine White', hex: '#F3F4F6', bg: 'bg-[#F3F4F6]', description: 'Solid Racing White' },
];

export default function ColorPicker({ currentColor, onChangeColor }) {
  return (
    <div className="glass-panel p-4 rounded-2xl shadow-2xl border border-bmw-border flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider font-mono text-gray-400 flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5 text-bmw-mBlue" /> Paint Finish
        </span>
        <span className="text-xs font-medium text-white px-2 py-0.5 rounded bg-bmw-card border border-bmw-border">
          {COLORS.find(c => c.hex === currentColor)?.name || 'Custom'}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {COLORS.map((color) => {
          const isSelected = currentColor === color.hex;
          return (
            <button
              key={color.name}
              onClick={() => onChangeColor(color.hex)}
              className={`group relative flex flex-col items-center p-2 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-white/10 border-bmw-mBlue shadow-[0_0_15px_rgba(0,102,177,0.4)]'
                  : 'bg-bmw-card/60 border-bmw-border hover:border-gray-500'
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full mb-1.5 relative shadow-inner" style={{ backgroundColor: color.hex }}>
                {isSelected && (
                  <Check className={`w-4 h-4 ${color.hex === '#F3F4F6' ? 'text-black' : 'text-white'} drop-shadow`} />
                )}
              </div>
              <span className="text-[11px] font-medium text-gray-200 text-center truncate w-full">
                {color.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
