import { MarketPlacePublicationDetail } from './../../../../core/interface/Api';
import { Component, Input, AfterContentInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 's-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss'],
})
export class STableComponent implements AfterContentInit {
  @Input() type: string = 'sell';
  @Input() tableType: string = 'crypto';
  @Input() data!: MarketPlacePublicationDetail[];
  loading = false;
  @Input() pageSize: number = 20;
  @Input() pageIndex = 1;
  total = 1;
  private router = inject(Router);

  onCurrentPageDataChange(event: any) {
    console.log('data changed', event);
  }

  constructor() {
    console.log(this.data);
    // this.userSubscription = this.getPublications;
  }

  ngAfterContentInit(): void {}

  startPayment(data: MarketPlacePublicationDetail , type  : string = "") {
    this.router.navigate(['/payment/transaction/checkout/' + data.product.id], {
      queryParams: {
        amount : data.product.detail.price,
        mean_of_payment :type == 'achat' ? data.product.detail.monnaie_a_recevoir :  data.product.detail.monnaie_echange
      },
    });
  }
}
