import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-market-nav',
  templateUrl: './market-nav.component.html',
  styleUrls: ['./market-nav.component.scss']
})
/**
 * @author willelvire
 * @description The component for the market page
 */
export class MarketNavComponent {

  @Input() fixable : boolean = false;
  pageY :  number = 0;

  //listen the scroll
  @HostListener('window:scroll', ['$event']) onScrollEvent($event : any){
    this.pageY = window.pageYOffset;
    //console.log(this.pageY);
  }

}
