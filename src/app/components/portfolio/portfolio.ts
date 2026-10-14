import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, PortfolioItem } from '../../services/portfolio.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  public portfolioService = inject(PortfolioService);
  public audioService = inject(AudioService);

  public readonly activeFilter = signal<string>('all');

  public readonly filteredItems = computed(() => {
    const filter = this.activeFilter();
    const items = this.portfolioService.portfolioItems;
    if (filter === 'all') return items;
    return items.filter(item => item.category === filter);
  });

  public setFilter(filter: string): void {
    this.audioService.playClickSound();
    this.activeFilter.set(filter);
  }

  public openModal(item: PortfolioItem, event?: Event): void {
    if (event) event.preventDefault();
    this.audioService.playClickSound();
    this.portfolioService.selectProject(item);
  }

  public closeModal(): void {
    this.audioService.playClickSound();
    this.portfolioService.selectProject(null);
  }
}
