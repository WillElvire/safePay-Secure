import { Component, OnInit, inject } from '@angular/core';
import { MarketPlacePublicationDetail, Publication } from 'src/app/core/interface/Api';
import { AppStateFacade } from 'src/app/core/services/facades/appState.facades';

@Component({
  selector: 'a-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.scss']
})
export class AhomeComponent implements OnInit{

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
