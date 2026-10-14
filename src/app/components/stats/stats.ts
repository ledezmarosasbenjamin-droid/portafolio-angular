import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

interface StatItem {
  icon: string;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css'
})
export class StatsComponent implements OnInit {
  private audioService = inject(AudioService);

  public stats = signal<StatItem[]>([
    { icon: 'bi-film', target: 35, suffix: '+', label: 'Proyectos Multimedia', sublabel: 'Videos, apps y animaciones terminadas', current: 0 },
    { icon: 'bi-gpu-card', target: 1250, suffix: '+', label: 'Horas de Renderizado', sublabel: 'Procesamiento en GPU y postproducción', current: 0 },
    { icon: 'bi-box-seam', target: 48, suffix: '+', label: 'Modelos & Efectos 3D', sublabel: 'Assets interactivos y shaders WebGL', current: 0 },
    { icon: 'bi-award', target: 100, suffix: '%', label: 'Compromiso de Calidad', sublabel: 'Optimización y estándares web modernos', current: 0 },
  ]);

  ngOnInit(): void {
    this.animateCounters();
  }

  private animateCounters(): void {
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      this.stats.update(items =>
        items.map(item => ({
          ...item,
          current: Math.round(item.target * easeProgress)
        }))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  public triggerStatSound(): void {
    this.audioService.playClickSound();
  }
}
