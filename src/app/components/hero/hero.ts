import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { AudioService } from '../../services/audio.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  public portfolioService = inject(PortfolioService);
  public audioService = inject(AudioService);

  public readonly typedText = signal<string>('');
  private currentRoleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingTimer: any = null;

  private animationFrameId: number | null = null;
  private particles: Particle[] = [];
  private mouseX = -1000;
  private mouseY = -1000;

  ngAfterViewInit(): void {
    this.startTypewriter();
    this.initParticleCanvas();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private startTypewriter(): void {
    const roles = this.portfolioService.personalInfo.typingRoles;
    const currentRole = roles[this.currentRoleIndex];

    if (!this.isDeleting) {
      this.typedText.set(currentRole.substring(0, this.currentCharIndex + 1));
      this.currentCharIndex++;

      if (this.currentCharIndex === currentRole.length) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.startTypewriter(), 2000);
        return;
      }
    } else {
      this.typedText.set(currentRole.substring(0, this.currentCharIndex - 1));
      this.currentCharIndex--;

      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % roles.length;
        this.typingTimer = setTimeout(() => this.startTypewriter(), 500);
        return;
      }
    }

    const speed = this.isDeleting ? 40 : 90;
    this.typingTimer = setTimeout(() => this.startTypewriter(), speed);
  }

  private initParticleCanvas(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particleCount = Math.min(window.innerWidth < 768 ? 30 : 65, 80);
    this.particles = [];
    const colors = ['rgba(20, 157, 221, 0.7)', 'rgba(255, 255, 255, 0.6)', 'rgba(0, 230, 118, 0.5)'];

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce from walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Interactive mouse gravity repulsion
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 2;
          p.y -= (dy / dist) * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect nearby particles with lines
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(20, 157, 221, ${0.25 * (1 - dist2 / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(render);
    };

    render();
  }

  public onMouseMove(event: MouseEvent): void {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
  }

  public onMouseLeave(): void {
    this.mouseX = -1000;
    this.mouseY = -1000;
  }

  public navigateTo(sectionId: string): void {
    this.audioService.playClickSound();
    const elem = document.getElementById(sectionId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  }
}
