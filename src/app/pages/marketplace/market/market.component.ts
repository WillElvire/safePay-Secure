import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map,of,take} from 'rxjs';
import { apiFunctionService } from 'src/app/core/services/function/api.function';
import { CryptoIcon } from 'src/app/core/types/crypto';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
  providers : [apiFunctionService]
})
export class MarketComponent  implements OnInit {


  constructor(){

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
      //this.cryptos$.
  }
}
