import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class ResumeComponent {
  public portfolioService = inject(PortfolioService);
  public audioService = inject(AudioService);

  public onItemClick(): void {
    this.audioService.playClickSound();
  }
}
