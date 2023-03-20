import { MarketPlacePublicationDetail } from './../../../../core/interface/Api';
import { Component, Input, AfterContentInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 's-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss']
})
export class STableComponent implements AfterContentInit {

  @Input() type : string = 'sell';
  @Input() tableType : string = 'crypto';
  @Input() data !: MarketPlacePublicationDetail[];
  loading = false;
  @Input() pageSize : number = 20;
  @Input() pageIndex = 1;
  total = 1;

  onCurrentPageDataChange(event : any) {
    console.log('data changed',event);
  }

  constructor(){
    console.log(this.data)
   // this.userSubscription = this.getPublications;
  }

  ngAfterContentInit(): void {

  }

}
