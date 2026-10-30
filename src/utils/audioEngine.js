// Web Audio API engine sound synthesizer for BMW M340i M-Sport inline-6 exhaust notes

class EngineAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.oscillator = null;
    this.gainNode = null;
    this.filterNode = null;
    this.isPlaying = false;
    this.isRevving = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  startIdle() {
    if (this.isPlaying) return;
    this.init();

    try {
      // Create low frequency rumble / idle oscillator (sawtooth for aggressive inline-6 growl)
      this.oscillator = this.audioCtx.createOscillator();
      this.oscillator.type = 'sawtooth';
      this.oscillator.frequency.setValueAtTime(45, this.audioCtx.currentTime); // ~45Hz idle rumble

      // Filter for deep exhaust tone
      this.filterNode = this.audioCtx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(320, this.audioCtx.currentTime);

      // Gain node for volume control
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.15, this.audioCtx.currentTime);

      // Connect nodes
      this.oscillator.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.oscillator.start();
      this.isPlaying = true;
    } catch (e) {
      console.error("Audio context start error:", e);
    }
  }

  rev() {
    if (!this.isPlaying) {
      this.startIdle();
    }
    if (!this.oscillator || !this.filterNode || !this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    this.isRevving = true;

    // Ramp up frequency and filter cutoff for aggressive twin-turbo rev
    this.oscillator.frequency.cancelScheduledValues(now);
    this.filterNode.frequency.cancelScheduledValues(now);

    // Rev curve
    this.oscillator.frequency.setValueAtTime(45, now);
    this.oscillator.frequency.exponentialRampToValueAtTime(180, now + 0.3);
    this.oscillator.frequency.exponentialRampToValueAtTime(70, now + 1.2);

    this.filterNode.frequency.setValueAtTime(320, now);
    this.filterNode.frequency.exponentialRampToValueAtTime(1800, now + 0.3);
    this.filterNode.frequency.exponentialRampToValueAtTime(400, now + 1.2);

    if (this.gainNode) {
      this.gainNode.gain.cancelScheduledValues(now);
      this.gainNode.gain.setValueAtTime(0.15, now);
      this.gainNode.gain.linearRampToValueAtTime(0.35, now + 0.3);
      this.gainNode.gain.linearRampToValueAtTime(0.15, now + 1.2);
    }

    setTimeout(() => {
      this.isRevving = false;
    }, 1200);
  }

  stop() {
    if (!this.isPlaying) return;
    try {
      if (this.oscillator) {
        this.oscillator.stop();
        this.oscillator.disconnect();
        this.oscillator = null;
      }
      if (this.gainNode) {
        this.gainNode.disconnect();
        this.gainNode = null;
      }
      if (this.filterNode) {
        this.filterNode.disconnect();
        this.filterNode = null;
      }
    } catch (e) {
      console.error("Audio stop error:", e);
    }
    this.isPlaying = false;
    this.isRevving = false;
  }
}

export const audioEngine = new EngineAudioEngine();
