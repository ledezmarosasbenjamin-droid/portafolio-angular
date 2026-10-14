import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  public portfolioService = inject(PortfolioService);
  public audioService = inject(AudioService);

  public formData = {
    name: '',
    email: '',
    subject: '',
    service: 'Desarrollo Web & Angular 22',
    message: ''
  };

  public isSubmitting = signal<boolean>(false);
  public isSubmitted = signal<boolean>(false);

  public onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.isSubmitting.set(true);
    this.audioService.playClickSound();

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.audioService.playSuccessSound();

      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        service: 'Desarrollo Web & Angular 22',
        message: ''
      };

      setTimeout(() => {
        this.isSubmitted.set(false);
      }, 6000);
    }, 1000);
  }
}
