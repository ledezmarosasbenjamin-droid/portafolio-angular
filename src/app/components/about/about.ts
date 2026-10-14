import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  public portfolioService = inject(PortfolioService);
  public audioService = inject(AudioService);

  public onBadgeClick(): void {
    this.audioService.playClickSound();
  }
}
