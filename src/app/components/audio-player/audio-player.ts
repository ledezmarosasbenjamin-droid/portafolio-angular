import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-audio-player',
  imports: [CommonModule],
  templateUrl: './audio-player.html',
  styleUrl: './audio-player.css'
})
export class AudioPlayerComponent {
  public audioService = inject(AudioService);
  public isMinimized = signal<boolean>(false);

  public toggleMinimize(): void {
    this.audioService.playClickSound();
    this.isMinimized.update(v => !v);
  }

  public onVolumeChange(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    this.audioService.setVolume(val);
  }
}
