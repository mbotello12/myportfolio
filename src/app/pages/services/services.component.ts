import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private seo: SeoService) {
    this.seo.updatePage(
      'Website Design, Local SEO & Automation Services | bot.Ello',
      'Explore website design, Google Business Profile setup, local SEO, lead capture, booking integrations, and workflow automation for small businesses.',
      '/services'
    );
  }
}