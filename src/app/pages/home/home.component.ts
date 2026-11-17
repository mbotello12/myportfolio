import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private seo: SeoService) {
    this.seo.updatePage(
      'Small Business Websites & Digital Solutions | bot.Ello Development',
      'Helping small businesses build a stronger online presence with professional websites, local SEO, lead capture, booking integrations, and business automation.',
      '/'
    );
  }
}
