import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent {
  private audioService = inject(AudioService);

  public testimonials: Testimonial[] = [
    {
      quote: 'Excelente capacidad técnica demostrada en la integración de la arquitectura Angular 22 con componentes visuales de alto rendimiento y programación de audio procedural.',
      name: 'Dr. Roberto Mendoza',
      role: 'Docente Titular de Programación Gráfica y Multimedia',
      avatar: 'assets/img/testimonials/testimonials-1.jpg',
      rating: 5
    },
    {
      quote: 'El demoreel audiovisual y el diseño de la interfaz superaron nuestras expectativas. El flujo de trabajo con componentes modernos y efectos de canvas fue impecable.',
      name: 'Sofía Valenzuela',
      role: 'Directora Creativa en Pulsar Media Lab',
      avatar: 'assets/img/testimonials/testimonials-2.jpg',
      rating: 5
    },
    {
      quote: 'Destaco la prolijidad en el código TypeScript y el uso eficiente de Web Audio API para generar experiencias sonoras interactivas sin dependencias externas pesadas.',
      name: 'Ing. Carlos Gutiérrez',
      role: 'Evaluador de Proyectos de Sistemas & Multimedia',
      avatar: 'assets/img/testimonials/testimonials-3.jpg',
      rating: 5
    }
  ];

  public currentIndex = signal<number>(0);

  public next(): void {
    this.audioService.playClickSound();
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
  }

  public prev(): void {
    this.audioService.playClickSound();
    this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  public setIndex(idx: number): void {
    this.audioService.playClickSound();
    this.currentIndex.set(idx);
  }
}
