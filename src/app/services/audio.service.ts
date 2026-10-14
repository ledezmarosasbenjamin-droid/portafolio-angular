import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioCtx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private gainNode: GainNode | null = null;
  private isSynthesizing = false;
  private synthInterval: any = null;

  public readonly isPlaying = signal<boolean>(false);
  public readonly volume = signal<number>(0.4);
  public readonly currentTrack = signal<string>('Lo-Fi Synthwave Chill - Multimedia Lab');

  constructor() {}

  private initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume(), this.audioCtx.currentTime);
      this.gainNode.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public getAnalyser(): AnalyserNode | null {
    if (!this.audioCtx) {
      this.initAudio();
    }
    return this.analyser;
  }

  public togglePlay(): void {
    if (this.isPlaying()) {
      this.stopAmbientSynth();
      this.isPlaying.set(false);
    } else {
      this.initAudio();
      this.startAmbientSynth();
      this.isPlaying.set(true);
    }
  }

  public setVolume(val: number): void {
    this.volume.set(val);
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(val, this.audioCtx.currentTime);
    }
  }

  // Procedural synthesizer: Creates a pleasant ambient melodic chord loop using oscillators
  private startAmbientSynth(): void {
    if (this.isSynthesizing || !this.audioCtx || !this.gainNode) return;
    this.isSynthesizing = true;

    // Musical notes (Pentatonic F major: F3, A3, C4, D4, F4, G4, A4)
    const notes = [174.61, 220.0, 261.63, 293.66, 349.23, 392.0, 440.0, 523.25];
    let step = 0;

    const playChord = () => {
      if (!this.isSynthesizing || !this.audioCtx || !this.gainNode) return;

      const baseNote = notes[step % notes.length];
      const harmonyNote = notes[(step + 2) % notes.length];
      const rootNote = notes[Math.floor(Math.random() * notes.length)];

      this.playTone(baseNote, 2.5, 'sine', 0.15);
      this.playTone(harmonyNote, 2.0, 'triangle', 0.1);
      if (step % 2 === 0) {
        this.playTone(rootNote * 0.5, 3.0, 'sine', 0.2); // Bass
      }
      step++;
    };

    playChord();
    this.synthInterval = setInterval(playChord, 1800);
  }

  private stopAmbientSynth(): void {
    this.isSynthesizing = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  private playTone(freq: number, duration: number, type: OscillatorType = 'sine', level = 0.2): void {
    if (!this.audioCtx || !this.gainNode) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      const now = this.audioCtx.currentTime;
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(level, now + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch (e) {
      // AudioContext state handling
    }
  }

  // Sound effects
  public playClickSound(): void {
    this.initAudio();
    if (!this.audioCtx || !this.gainNode) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const now = this.audioCtx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);

      gain.gain.setValueAtTime(0.15 * this.volume(), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }

  public playSuccessSound(): void {
    this.initAudio();
    if (!this.audioCtx) return;

    const chords = [523.25, 659.25, 783.99, 1046.5]; // C E G C
    chords.forEach((freq, i) => {
      setTimeout(() => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const now = this.audioCtx.currentTime;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.15 * this.volume(), now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.42);
      }, i * 80);
    });
  }
}
