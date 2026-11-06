
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'


interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  status: 'Live' | 'In Development';
  link?: ProjectLinks;
}

interface ClientWebsite {
  name: string;
  category: string;
  description: string;
  image: string;
  website: string;
  technologies: string[];
}

interface ProjectLinks {
  github?: string;
  live?: string;
}

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {

  
featuredProject = {
  name: 'My Grade Tracker',
  category: 'Full-Stack Application',
  description: 'A grade management application designedt to help students organize coursework, manage assisgnments, calculate weighted averages, and provide meaningful insight into student performance.',
  technologies: [
    'Angular',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'REST API'
  ],
  image: 'assets/images/projects/grade-tracker.png',
  links: {
    github: 'https://github.com/mbotello12/gradetracker',
    live: 'https://my-grade-tracker.netlify.app'
  }
};

  otherProjects: Project[] = [
    {
      name: 'Barber Scheduling System',
      category: 'SaaS Application',
      description:
        'A multi-business scheduling platform designed to support barbershops, barbers, clients, services, and appointment management through a shared backend.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
      image: 'assets/images/projects/barber-system.png',
      status: 'In Development'
    }
  ];

  clientWebsites: ClientWebsite[] = [
    {
      name: 'Ultimate Storage',
      category: 'Storage',
      description: 'Website design and development for a local storage business.',
      image: 'assets/images/clients/ultimate-storage.png',
      website: 'https://bigbeestorage.com',
      technologies: ['Web Development', 'Responsive Design']
    },
    {
      name: 'Velvet Pumpkin Portraits',
      category: 'Photography',
      description: 'A photography website built to showcase services and create an inviting online experience.',
      image: 'assets/images/clients/velvet-pumpkin.png',
      website: 'https://velvetpumpkinportraits.com',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Bomb Concrete',
      category: 'Concrete Services',
      description: 'A business website presenting services and helping customers connect with the company.',
      image: 'assets/images/clients/bomb-concrete.png',
      website: 'https://bombconcrete.com',
      technologies: ['Web Development', 'Responsive Design']
    },
    {
      name: 'Victory Barbershop',
      category: 'Barbershop',
      description: 'A custom website connecting customers with the shop and its appointment booking experience.',
      image: 'assets/images/clients/victory-barbershop.png',
      website: 'https://victorybarberllc.com',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Setmore']
    },
    {
      name: 'Diamond Coat Epoxy',
      category: 'Epoxy Flooring',
      description: 'A modern business website showcasing epoxy flooring solutions and custom epoxy projects.',
      image: 'assets/images/clients/diamond-coat.png',
      website: 'https://diamondcoatss.com',
      technologies: ['Next.js', 'React', 'Tailwind CSS']
    }
  ];
}