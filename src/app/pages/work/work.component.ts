
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  constructor(private seo: SeoService){
      this.seo.updatePage(
        'Website & Digital Solutions Portfolio | bot.Ello Development',
        'Explore websites and digital solutions built for real businesses, including service websites, booking integrations, inquiry forms, and online payment experiences.',
        '/work'
      );
    }
  projects = [
    {
      name: 'Diamond Coat Epoxy Solutions',
      category: 'Business Website',
      description:
        "A modern website built to showcase Diamond Coat's epoxy flooring services, highlight its service areas, and give potential customers a straightforward way to request an estimate. The experience puts the company's work and services front and center while making it easy for visitors to take the next step.",
      image: 'assets/images/clients/diamond-coat.png',
      services: ['Website Design & Development', 'Service Pages', 'Lead Generation'],
      url: 'https://diamondcoatss.com'
    },
    {
      name: 'Velvet Pumpkin Portraits',
      category: 'Photography Website',
      description:
        "A photography website designed to showcase the brand's work while making it easier for clients to take the next step. The site combines a custom inquiry form with Pixieset integration, allowing visitors to explore and book between three photography sessions directly through the booking platform.",
      image: 'assets/images/clients/velvet-pumpkin.png',
      services: ['Website Design', 'Inquiry Form Integration', 'Pixieset Booking Integration','Photography Session Booking'],
      url: 'https://velvetpumpkinportraits.com'
    },
    {
      name: 'Ultimate Storage',
      category: 'Business Website',
      description:
        "A business website built to connect customers with three storage locations through a streamlined online experience. Beyond presenting the business and its facilities, the site integrates with Storage Unit Software to support online payments, making it easier for customers to manage their storage needs across locations.",
      image: 'assets/images/clients/ultimate-storage.png',
      services: ['Website Design', 'Online Payment Integration', 'Mulit-Location Integration'],
      url: 'https://bigbeestorage.com'
    },
    {
      name: 'Bomb Concrete',
      category: 'Business Website',
      description:
        "A professional website built to give Bomb Concrete a stronger online presence and clearly showcase its concrete services. The site includes a convenient inquiry form that allows potential customers to submit their information and service requests, creating a direct path from browsing to getting in touch.",
      image: 'assets/images/clients/bomb-concrete.png',
      services: ['Website Design', 'Service Presentation', 'Customer Inquiry Form'],
      url: 'https://bombconcrete.com'
    },
    {
      name: 'Victory Barber Shop',
      category: 'Business Website',
      description:
        "A custom website built to connect customers with Victory Barbershop and simplify the path from discovering the shop to scheduling an appointment. Integrated with Setmore, the experience gives customers a convenient way to explore the business and book their next visit.",
      image: 'assets/images/clients/victory-barbershop.png',
      services: ['Website Design', 'Appointment Booking', 'Setmore Integration'],
      url: 'https://victorybarberllc.com'
    },
    {
      name: 'J&R Land Services',
      category: 'In Production',
      description:
        "A refreshed online presence that brings J&R's tree services, lawn care, and land improvements together in one organized experience. Built with mobile users in mind, the website makes it easier for customers to explore services and connect with a local, owner-operated business.",
      image: 'assets/images/clients/jr-land-services.png',
      services: ['Website Design', 'Service Organization', 'Mobile Experience'],
      url: ''
    }
  ];
}