import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { StoryComponent } from '../components/story/story.component';
import { FeaturedComponent } from '../components/featured/featured.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, StoryComponent, FeaturedComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
