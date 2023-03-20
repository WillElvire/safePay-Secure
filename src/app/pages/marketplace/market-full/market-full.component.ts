import { Subscription } from 'rxjs';
import { MarketPlacePublicationDetail } from './../../../core/interface/Api';
import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';

@Component({
  selector: 'app-market-full',
  templateUrl: './market-full.component.html',
  styleUrls: ['./market-full.component.scss'],
})
export class MarketFullComponent implements OnDestroy, OnInit {
  type: string = 'buy';
  checkDefault: boolean = true;
  datas: MarketPlacePublicationDetail[] = [];
  subscription = new Subscription();
  buyPublication: MarketPlacePublicationDetail[] = [];
  sellPublication: MarketPlacePublicationDetail[] = [];
  tableToTransfer: MarketPlacePublicationDetail[] = [];

  constructor(private appFacades: AppFacades) {}

  ngOnInit(): void {
    this.subscription = this.appFacades
      .getPublications()
      .subscribe((response) => {
        this.datas = response.returnObject as MarketPlacePublicationDetail[];
        this.mapPublicationTable(this.datas);
        this.tableToTransfer = this.buyPublication;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getValue() {
    if (this.type == 'buy') return (this.tableToTransfer = this.buyPublication);
    return (this.tableToTransfer = this.sellPublication);
  }

  mapPublicationTable(data : any) {
    data.forEach((element : any) => {
      if (element.product.detail.title?.includes('VENTE')) {
        this.sellPublication.push(element);
        console.log(this.sellPublication);
      }
      if (element.product.detail.title?.includes('ACHAT')) {
        console.log(this.buyPublication);
        this.buyPublication.push(element);
      }
    });
  }
}
