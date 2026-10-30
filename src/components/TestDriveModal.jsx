import React from 'react';
import { X, Sparkles, Send } from 'lucide-react';

export default function TestDriveModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bmw-dark/80 backdrop-blur-sm">
      <div className="glass-card w-full max-w-md rounded-3xl border border-bmw-border p-8 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-bmw-mBlue/20 border border-bmw-mBlue/30 flex items-center justify-center mx-auto mb-4 text-bmw-mLightBlue">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Book a Test Drive</h2>
          <p className="text-sm text-gray-400">Experience the Pure Driving Dynamics of the M340i xDrive.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Test Drive Request Sent!'); }}>
          <input type="text" placeholder="Full Name" className="w-full bg-bmw-dark p-3 rounded-lg border border-bmw-border text-white text-sm focus:outline-none focus:border-bmw-mBlue" required />
          <input type="email" placeholder="Email Address" className="w-full bg-bmw-dark p-3 rounded-lg border border-bmw-border text-white text-sm focus:outline-none focus:border-bmw-mBlue" required />
          <select className="w-full bg-bmw-dark p-3 rounded-lg border border-bmw-border text-white text-sm focus:outline-none focus:border-bmw-mBlue">
            <option>Select Preferred Dealership</option>
            <option>BMW M Motorsport City</option>
            <option>BMW Downtown Auto</option>
          </select>
          <button type="submit" className="w-full py-3.5 rounded-lg bg-gradient-to-r from-bmw-mBlue via-blue-600 to-bmw-mRed text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
            Submit Request <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
