import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  public portfolioService = inject(PortfolioService);
  public audioService = inject(AudioService);

  public scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.audioService.playClickSound();
    this.portfolioService.setActiveSection(sectionId);
    this.portfolioService.closeMobileNav();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public toggleMobileMenu(): void {
    this.audioService.playClickSound();
    this.portfolioService.toggleMobileNav();
  }
}
