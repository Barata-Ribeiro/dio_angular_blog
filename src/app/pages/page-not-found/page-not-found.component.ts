import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Not Found | Sector 67');
  }
}
