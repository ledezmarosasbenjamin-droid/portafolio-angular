import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  public portfolioService = inject(PortfolioService);
  public audioService = inject(AudioService);

  public scrollToTop(): void {
    this.audioService.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
