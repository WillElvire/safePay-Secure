import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Publication } from 'src/app/core/interface/Api';

@Component({
  selector: 's-carousel',
  templateUrl: './s-carousel.component.html',
  styleUrls: ['./s-carousel.component.scss']
})
export class SCarouselComponent {
  @Input() title !: string ;
  @Input() data  !: Publication[];
  customOptions: OwlOptions = {
    autoWidth : false,
    loop: true,
    mouseDrag: true,
    lazyLoad : true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Precedent', 'Suivant'],
    center : true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      }
    },
    nav: false,
  };
}
