
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillCategories: SkillCategory[] = [
    {
      number: '01',
      title: 'Frontend Development',
      description: 'Building responsive, user-focused interfaces and interactive web experiences.',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'React',
        'Next.js',
        'Tailwind CSS'
      ]
    },
    {
      number: '02',
      title: 'Backend Engineering',
      description: 'Developing application logic, APIs, and the systems that power web applications.',
      skills: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'Spring Data JPA',
        'Hibernate',
        'DTO Design'
      ]
    },
    {
      number: '03',
      title: 'Data & Infrastructure',
      description: 'Working with relational data, persistence, and application environments.',
      skills: [
        'PostgreSQL',
        'SQL',
        'H2 Database',
        'Docker',
        'Git',
        'GitHub'
      ]
    },
    {
      number: '04',
      title: 'Platforms & Delivery',
      description: 'Taking projects from development to deployment and supporting real-world business needs.',
      skills: [
        'Netlify',
        'Render',
        'WordPress',
        'DNS & Hosting',
        'SEO',
        'REST Integrations',
        'Webhooks'
      ]
    }
  ];
}