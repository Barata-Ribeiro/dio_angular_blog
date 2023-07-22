import { Component, OnInit } from '@angular/core';
import { dataSimulation } from '../../data/dataSimulation';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent implements OnInit {
  articles = dataSimulation;

  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Home | Sector 67');
  }
}
