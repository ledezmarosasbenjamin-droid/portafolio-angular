import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { StatsComponent } from './components/stats/stats';
import { SkillsComponent } from './components/skills/skills';
import { ResumeComponent } from './components/resume/resume';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ServicesComponent } from './components/services/services';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { PortfolioService } from './services/portfolio.service';

declare const AOS: any;

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private portfolioService = inject(PortfolioService);

  ngOnInit(): void {
    // Initialize AOS animation if available in window
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 700,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // Scroll spy to update active navigation item
    window.addEventListener('scroll', () => {
      const sections = ['hero', 'about', 'stats', 'skills', 'resume', 'portfolio', 'services', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            this.portfolioService.setActiveSection(sectionId);
            break;
          }
        }
      }
    });
  }
}
