import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  private audioService = inject(AudioService);

  public services: ServiceItem[] = [
    {
      icon: 'bi-code-square',
      title: 'Desarrollo Web & Angular 22',
      desc: 'Creación de aplicaciones web SPA reactivas y de alto rendimiento, optimizadas con Signals, standalone components y bundler esbuild de última generación.'
    },
    {
      icon: 'bi-film',
      title: 'Edición Audiovisual & VFX',
      desc: 'Montaje dinámico, corrección de color cinemática (LUTs), gráficos en movimiento y postproducción de video profesional en resolución 4K UHD.'
    },
    {
      icon: 'bi-box',
      title: 'Modelado 3D & Shaders WebGL',
      desc: 'Desarrollo de escenas tridimensionales con Three.js y Blender, iluminación realista PBR, mapeado de texturas y shaders GLSL personalizados.'
    },
    {
      icon: 'bi-palette',
      title: 'Diseño UI/UX & Prototipado',
      desc: 'Diseño centrado en la experiencia de usuario, sistemas de diseño escalables, microinteracciones y prototipos interactivos testeados para accesibilidad.'
    },
    {
      icon: 'bi-soundwave',
      title: 'Diseño Sonoro & Audio Digital',
      desc: 'Producción de pistas ambientales, síntesis sonora matemática con Web Audio API, efectos foley y masterización estéreo para contenidos multimedia.'
    },
    {
      icon: 'bi-cpu',
      title: 'Computación Gráfica & Canvas',
      desc: 'Algoritmos interactivos de renderizado en tiempo real, simulación de partículas físicas, gráficos procedurales y visualizadores de datos.'
    }
  ];

  public onServiceClick(): void {
    this.audioService.playClickSound();
  }
}
