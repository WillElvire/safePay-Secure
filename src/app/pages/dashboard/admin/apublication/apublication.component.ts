import { Component, OnInit, inject } from '@angular/core';
import { MarketPlacePublicationDetail } from 'src/app/core/interface/Api';
import { AppStateFacade } from 'src/app/core/services/facades/appState.facades';

@Component({
  selector: 'a-apublication',
  templateUrl: './apublication.component.html',
  styleUrls: ['./apublication.component.scss']
})
export class ApublicationComponent implements OnInit {
  private appStateFacades = inject(AppStateFacade);
  publications  : MarketPlacePublicationDetail[] = [];
  p: number = 1;

  ngOnInit(): void {
      this.getAllPublication();
  }
  getAllPublication() {
    this.appStateFacades.AppFacades.getNotification().subscribe((response)=>this.publications = response.returnObject as MarketPlacePublicationDetail[]);
  }
}
