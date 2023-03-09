import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';


@Component({
  selector: 'app-market-full',
  templateUrl: './market-full.component.html',
  styleUrls: ['./market-full.component.scss']
})
export class MarketFullComponent {

  type : string = 'buy';
  checkDefault : boolean = true;

  constructor(private appFacades : AppFacades){

  }

}
