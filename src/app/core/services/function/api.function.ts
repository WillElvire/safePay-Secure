import { CryptoExchange, CryptoIcon } from './../../types/crypto';
import { HttpService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, publishReplay, refCount, shareReplay} from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class apiFunctionService {

  private exchange : string  = `exchangerate/`;
  private icons : string =  `assets/`;

  cryptoIcons$ : Observable<CryptoIcon[]> = this.getCryptoIcons();
  cryptoExchange$ = (currency1 : string  , currency2 : string) : Observable<CryptoExchange> =>   {
    return this.getExchangeRate(currency1,currency2);
  };

  constructor(private api : HttpService){
  }

  getExchangeRate(currency1 : string  , currency2 : string) : Observable<CryptoExchange> {
    const endpoint = `${this.exchange}${currency1}/${currency2}`
    return this.api.get<CryptoExchange>(endpoint).pipe(shareReplay(1));
  }

  private getCryptoIcons() : Observable<CryptoIcon[]> {
    const endpoint =  `${this.icons}icons/32` ;
    return this.api.get<CryptoIcon[]>(endpoint).pipe( publishReplay(1),refCount() );
  }

}


