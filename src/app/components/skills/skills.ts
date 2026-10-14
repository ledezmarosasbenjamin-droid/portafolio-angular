import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

interface Skill {
  name: string;
  percentage: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements OnInit {
  private audioService = inject(AudioService);

  public skillsCol1: Skill[] = [
    { name: 'Angular 22 & TypeScript', percentage: 95, category: 'Desarrollo Frontend', icon: 'bi-code-slash' },
    { name: 'Programación Gráfica (HTML5 Canvas & WebGL)', percentage: 90, category: 'Computación Gráfica', icon: 'bi-brush' },
    { name: 'Edición de Video & VFX (Premiere / After Effects)', percentage: 88, category: 'Producción Audiovisual', icon: 'bi-camera-reels' },
    { name: 'Modelado 3D & Shaders (Blender / Three.js)', percentage: 85, category: '3D & Animación', icon: 'bi-box' },
  ];

  public skillsCol2: Skill[] = [
    { name: 'Diseño UI/UX (Figma & Adobe Suite)', percentage: 92, category: 'Diseño de Interfaces', icon: 'bi-palette' },
    { name: 'Producción de Audio & Web Audio API', percentage: 86, category: 'Sonido Digital', icon: 'bi-soundwave' },
    { name: 'CSS3 Avanzado, Bootstrap 5 & Animaciones', percentage: 94, category: 'Estilos Web', icon: 'bi-layers' },
    { name: 'Optimización Web & Arquitectura Frontend', percentage: 90, category: 'Performance', icon: 'bi-speedometer2' },
  ];

  public animated = signal<boolean>(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.animated.set(true);
    }, 400);
  }

  public onSkillHover(): void {
    this.audioService.playClickSound();
  }
}
