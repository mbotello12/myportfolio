
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private seo: SeoService){
    this.seo.updatePage(
      'Contact bot.Ello Development | Let’s Talk',
      'Have a website, local SEO, lead capture, or automation project in mind? Get in touch with bot.Ello Development to start a conversation.',
      '/contact'
    );
  }
}