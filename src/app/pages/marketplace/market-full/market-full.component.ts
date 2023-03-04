import { Component, AfterViewInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-market-full',
  templateUrl: './market-full.component.html',
  styleUrls: ['./market-full.component.scss']
})
export class MarketFullComponent {

  type : string = 'buy';
  checkDefault : boolean = true;

}
