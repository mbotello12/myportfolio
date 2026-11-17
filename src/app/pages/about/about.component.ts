import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private seo: SeoService) {
    this.seo.updatePage(
      'About bot.Ello Development | Practical Digital Solutions',
      'Meet the developer behind bot.Ello Development. Learn about the practical, people-first approach to websites and digital solutions for small businesses.',
      '/about'
    );
  }
}
