import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  photoCover: string =
    'https://disneyplusbrasil.com.br/wp-content/uploads/2021/05/Tony-Stark-Substituto.jpg';
  photoAlt: string = 'Tony Stark looking at camera with his blaster aimed.';
  photoCaption: string = 'Tony Star is Iron Man!';
  contentTitle: string = 'Shocking! Tony Stark is Iron Man.';
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate. Corrupti amet ex debitis modi voluptate architecto nemo quod, labore illum voluptas aut sunt reiciendis, ea a, velit blanditiis quo.';
}
