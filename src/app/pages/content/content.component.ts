import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataSimulation } from '../../data/dataSimulation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  photoAlt: string = '';
  photoCaption: string = '';
  contentTitle: string = '';
  contentNewsArticle: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataSimulation.filter((article) => article.id === id)[0];

    this.contentTitle = result.articleTitle;
    this.contentNewsArticle = result.completeArticle;
    this.photoCover = result.photo;
    this.photoAlt = result.photoTitle;
    this.photoCaption = result.photoCaption;
  }
}
