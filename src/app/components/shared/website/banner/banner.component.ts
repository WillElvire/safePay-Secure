import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnDestroy {

  isConnected : boolean = false;
  subscription = new Subscription();

  constructor(private stateService  : StatesFacades) {
   this.subscription = this.stateService.selectUser().subscribe((user)=>{
     this.isConnected = user.email != "";
     console.log(user)
   });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
