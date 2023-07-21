import { Component } from '@angular/core';
import {} from '../../data/dataSimulation';
import { dataSimulation } from '../../data/dataSimulation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent {
  articles = dataSimulation;
  private id: string | null = '0';

  constructor() {}
}
