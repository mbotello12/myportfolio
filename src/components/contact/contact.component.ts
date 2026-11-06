import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email = 'matt.botello12@gmail.com';

  socialLinks = [
    {
      label: 'GitHub',
      description: 'Explore my code',
      url: 'https://github.com/mbotello12'
    },
    {
      label: 'LinkedIn',
      description: 'Connect professionally',
      url: 'https://linkedin.com/in/matthew-botello'
    },
    {
      label: 'Resume',
      description: 'View my experience',
      url: 'assets/documents/resume.pdf'
    }
  ];
}