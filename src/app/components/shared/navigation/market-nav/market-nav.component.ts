import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-market-nav',
  templateUrl: './market-nav.component.html',
  styleUrls: ['./market-nav.component.scss']
})
export class MarketNavComponent {

  pageY :  number = 0;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event : any){
    this.pageY = window.pageYOffset;
    console.log(this.pageY);
  }
}
