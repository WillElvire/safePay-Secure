import { Component, OnInit, inject } from '@angular/core';
import { take } from 'rxjs';
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

  activePublication(id : string) {
    this.appStateFacades.AppFacades.activePublication(id).pipe(take(1)).subscribe((response)=>{
      this.getAllPublication();
      this.appStateFacades.AppFacades.mBuildSuccess(response.message);
      console.log("response",response)
    },(err)=>{
      this.appStateFacades.AppFacades.mBuildSuccess(err.error.message ? err.error.message  : err.message )
    })
  }

}
