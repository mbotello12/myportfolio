import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }
  toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
  }
}
