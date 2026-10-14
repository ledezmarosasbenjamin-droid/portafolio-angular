import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-multimedia-lab',
  imports: [CommonModule],
  templateUrl: './multimedia-lab.html',
  styleUrl: './multimedia-lab.css'
})
export class MultimediaLabComponent implements AfterViewInit, OnDestroy {
  @ViewChild('visualizerCanvas') visualizerCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('mathCanvas') mathCanvasRef!: ElementRef<HTMLCanvasElement>;

  public audioService = inject(AudioService);

  // Visualizer properties
  private visualizerAnimationId: number | null = null;
  public visualizerMode = signal<'bars' | 'wave'>('bars');

  // Math Canvas properties
  private mathAnimationId: number | null = null;
  public particleCount = signal<number>(50);
  public colorTheme = signal<'cyberpunk' | 'ocean' | 'neon'>('cyberpunk');
  private mathTime = 0;
  private mathParticles: { x: number; y: number; baseAngle: number; speed: number; radius: number }[] = [];

  // Video player state
  public isVideoPlaying = signal<boolean>(false);
  public videoProgress = signal<number>(25);

  ngAfterViewInit(): void {
    this.initAudioVisualizer();
    this.initMathCanvas();
  }

  ngOnDestroy(): void {
    if (this.visualizerAnimationId) cancelAnimationFrame(this.visualizerAnimationId);
    if (this.mathAnimationId) cancelAnimationFrame(this.mathAnimationId);
  }

  // --- AUDIO VISUALIZER ---
  private initAudioVisualizer(): void {
    const canvas = this.visualizerCanvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const analyser = this.audioService.getAnalyser();

      if (analyser && this.audioService.isPlaying()) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        if (this.visualizerMode() === 'bars') {
          analyser.getByteFrequencyData(dataArray);

          const barWidth = (canvas.width / bufferLength) * 2.2;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * canvas.height * 0.85;

            const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
            gradient.addColorStop(0, '#149ddd');
            gradient.addColorStop(0.5, '#00e676');
            gradient.addColorStop(1, '#ff007f');

            ctx.fillStyle = gradient;
            ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);

            // Reflection effect
            ctx.fillStyle = 'rgba(20, 157, 221, 0.15)';
            ctx.fillRect(x, canvas.height - barHeight * 0.2, barWidth - 2, barHeight * 0.2);

            x += barWidth;
          }
        } else {
          // Oscilloscope Waveform
          analyser.getByteTimeDomainData(dataArray);
          ctx.lineWidth = 3;
          ctx.strokeStyle = '#149ddd';
          ctx.beginPath();

          const sliceWidth = canvas.width / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * canvas.height) / 2;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
            x += sliceWidth;
          }

          ctx.lineTo(canvas.width, canvas.height / 2);
          ctx.stroke();
        }
      } else {
        // Idle ambient sinusoidal wave
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(20, 157, 221, 0.4)';
        ctx.beginPath();
        const t = performance.now() * 0.002;
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + Math.sin(x * 0.03 + t) * 15 * Math.sin(t * 0.5);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '12px Poppins, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Presiona "Iniciar Audio" para activar el visualizador FFT', canvas.width / 2, canvas.height / 2 - 25);
      }

      this.visualizerAnimationId = requestAnimationFrame(render);
    };

    render();
  }

  public setVisualizerMode(mode: 'bars' | 'wave'): void {
    this.audioService.playClickSound();
    this.visualizerMode.set(mode);
  }

  // --- MATHEMATICAL CANVAS PLAYGROUND ---
  private initMathCanvas(): void {
    const canvas = this.mathCanvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.createMathParticles(canvas.width, canvas.height);

    const render = () => {
      ctx.fillStyle = 'rgba(4, 11, 20, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      this.mathTime += 0.02;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const palette = this.getPalette();

      for (let i = 0; i < this.mathParticles.length; i++) {
        const p = this.mathParticles[i];
        p.baseAngle += p.speed;

        // Lissajous / Harmonic motion equations
        const r = 80 + Math.sin(this.mathTime * 0.8 + i) * 50;
        const x = centerX + Math.cos(p.baseAngle * 2 + this.mathTime) * r;
        const y = centerY + Math.sin(p.baseAngle * 3 + this.mathTime) * (r * 0.65);

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = palette[i % palette.length];
        ctx.shadowColor = palette[i % palette.length];
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      this.mathAnimationId = requestAnimationFrame(render);
    };

    render();
  }

  private createMathParticles(width: number, height: number): void {
    this.mathParticles = [];
    const count = this.particleCount();
    for (let i = 0; i < count; i++) {
      this.mathParticles.push({
        x: width / 2,
        y: height / 2,
        baseAngle: (i / count) * Math.PI * 2,
        speed: 0.01 + Math.random() * 0.02,
        radius: Math.random() * 3 + 1.5
      });
    }
  }

  private getPalette(): string[] {
    switch (this.colorTheme()) {
      case 'ocean':
        return ['#00d2ff', '#3a7bd5', '#149ddd', '#a0e9fd'];
      case 'neon':
        return ['#00e676', '#76ff03', '#ffff00', '#00e5ff'];
      case 'cyberpunk':
      default:
        return ['#ff007f', '#00f0ff', '#ffe600', '#7b2cbf'];
    }
  }

  public setTheme(theme: 'cyberpunk' | 'ocean' | 'neon'): void {
    this.audioService.playClickSound();
    this.colorTheme.set(theme);
  }

  public toggleVideoPlay(): void {
    this.audioService.playClickSound();
    this.isVideoPlaying.update(v => !v);
  }
}
