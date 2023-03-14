import { Component, Input } from '@angular/core';
import { string } from 'prop-types';
import { Subscription } from 'rxjs';
import { StatesFacades } from 'src/app/core/services/facades/state.facades';

@Component({
  selector: 'app-market-banner',
  templateUrl: './market-banner.component.html',
  styleUrls: ['./market-banner.component.scss']
})
export class MarketBannerComponent {
  @Input() titre !: string ;
  @Input() keyWord !: string;
  @Input() middleWord !:string;

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
