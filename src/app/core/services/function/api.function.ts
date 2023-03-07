import { CountryDialCode, MResultMessage, User } from './../../interface/Api';
import { CryptoExchange, CryptoIcon } from './../../types/crypto';
import { HttpService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, publishReplay, refCount, shareReplay} from 'rxjs';

@Injectable()
export class apiFunctionService {

  private exchange : string  = `exchangerate/`;
  private icons : string =  `assets/`;

  cryptoIcons$ : Observable<CryptoIcon[]> = this.getCryptoIcons();
  countryCode$ : Observable<CountryDialCode[]> = this.getCoutryCode();
  allRoles$    : Observable<MResultMessage>  = this.getUsersRole();

  cryptoExchange$ = (currency1 : string  , currency2 : string) : Observable<CryptoExchange> =>   {
    return this.getExchangeRate(currency1,currency2);
  };

  constructor(private api : HttpService){
  }

  private getExchangeRate(currency1 : string  , currency2 : string) : Observable<CryptoExchange> {
    this.api.setApiType("crypto");
    const endpoint = `${this.exchange}${currency1}/${currency2}`
    return this.api.get<CryptoExchange>(endpoint).pipe(shareReplay(1));
  }

  private getCryptoIcons() : Observable<CryptoIcon[]> {
    this.api.setApiType("crypto");
    const endpoint =  `${this.icons}icons/32` ;
    return this.api.get<CryptoIcon[]>(endpoint).pipe( publishReplay(1),refCount() );
  }


  private getCoutryCode()  : Observable<CountryDialCode[]> {
    this.api.setApiType("assets");
    return this.api.get<CountryDialCode[]>("country.json").pipe(shareReplay(1));
  }

  private getUsersRole() : Observable<MResultMessage> {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>("api/role").pipe(shareReplay(1));
  }


  registerUser(user : User) : Observable<MResultMessage> {
    this.api.setApiType("rest");
    return this.api.post<MResultMessage>({endpoint : "api/users", data : user}).pipe(shareReplay(1));
  }

  loginUser(data : Required<{email : string , password : string}>){
   this.api.setApiType("rest");
   return this.api.post<MResultMessage>({endpoint : "api/users/login",data}).pipe(shareReplay(1));
  }
}


