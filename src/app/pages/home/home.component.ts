import { Component, HostListener, OnInit } from '@angular/core';
import { dataSimulation } from '../../data/dataSimulation';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent implements OnInit {
  articles = dataSimulation;
  isMobile!: boolean;

  constructor(private titleService: Title) {
    this.isMobile = window.innerWidth < 769;
  }
  ngOnInit(): void {
    this.titleService.setTitle('Home | Sector 67');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.isMobile = event.target.innerWidth < 769;
  }

  isLastIndex(index: number): boolean {
    if (this.isMobile) return index === 5;
    else return index === 4 || index === 5;
  }
}
