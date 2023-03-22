import { Publication } from './../../../../core/interface/Api';
import { Router } from '@angular/router';
import { Component, Input, inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 's-carousel',
  templateUrl: './s-carousel.component.html',
  styleUrls: ['./s-carousel.component.scss']
})
export class SCarouselComponent {
  @Input() title !: string ;
  @Input() data  !: Publication[];
  private readonly router  = inject(Router);
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


  fetchData(index : number , item : any){
    return item.item;
 }

 navigate(id :string){
   this.router.navigate([`/payment/transaction/checkout/${id}`])
 }

 startPayment(publication : Publication){

 }
}
