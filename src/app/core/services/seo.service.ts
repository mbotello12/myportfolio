
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  private readonly baseUrl = 'https://botellodevelopment.com';

  updatePage(title: string, description: string, path: string): void {
    this.title.setTitle(title);

    this.meta.updateTag({
      name: 'description',
      content: description
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: `${this.baseUrl}${path}`
    });

    this.updateCanonical(`${this.baseUrl}${path}`);
  }

  private updateCanonical(url: string): void {
    let canonical = this.document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }
}