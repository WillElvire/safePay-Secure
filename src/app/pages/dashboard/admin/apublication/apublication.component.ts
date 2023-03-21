import { Component, OnInit, inject } from '@angular/core';
import { take } from 'rxjs';
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

  activePublication(id : string) {
    this.appStateFacades.AppFacades.activePublication(id).pipe(take(1)).subscribe((response)=>{
      this.getAllPublication();
      this.appStateFacades.AppFacades.mBuildSuccess(response.message);
      console.log("response",response)
    },(err)=>{
      this.appStateFacades.AppFacades.mBuildError(err.error.message ? err.error.message  : err.message )
    })
  }
}
