import React, { useState } from "react";
import { Volume2, VolumeX, Flame } from "lucide-react";
import { audioEngine } from "../utils/audioEngine";

export default function SoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      audioEngine.startIdle();
      setIsPlaying(true);
    }
  };

  const playRev = () => {
    if (!isPlaying) {
      audioEngine.startIdle();
      setIsPlaying(true);
    }
    audioEngine.rev();
  };

  return (
    <section id="sound" className="py-20 max-w-4xl mx-auto px-4">
      <div className="glass-card p-8 rounded-3xl border border-bmw-border flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Hear the Engine
          </h3>
          <p className="text-sm text-gray-400">
            Feel the aggressive growl of the M TwinPower Inline-6 engine.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleSound}
            className={`px-6 py-3 rounded-full font-bold uppercase text-xs tracking-wider border transition-all ${
              isPlaying
                ? "bg-bmw-dark border-bmw-mRed text-bmw-mRed"
                : ///

                  "bg-bmw-mBlue text-white border-transparent hover:scale-105"
            }`}
          >
            {isPlaying ? (
              <VolumeX className="w-5 h-5 inline mr-2" />
            ) : (
              <Volume2 className="w-5 h-5 inline mr-2" />
            )}

            {isPlaying ? "Mute" : "Start Idle"}
          </button>
          <button
            onClick={playRev}
            disabled={!isPlaying}
            className={`px-8 py-3 rounded-full font-bold uppercase text-xs tracking-wider bg-bmw-mRed text-white hover:bg-bmw-mDarkRed transition-all flex items-center gap-2 ${!isPlaying && "opacity-50 cursor-not-allowed"}`}
          >
            <Flame className="w-4 h-4" />
            Rev Engine
          </button>
        </div>
      </div>
    </section>
  );
}
