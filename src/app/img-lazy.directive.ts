import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img:not([loading])',
})
export class ImgLazyDirective {
  constructor(element: ElementRef) {
    element.nativeElement.setAttribute('loading', 'lazy');
  }
}
