import { CountryDialCode, MResultMessage, User } from './../../interface/Api';
import { CryptoExchange, CryptoIcon } from './../../types/crypto';
import { HttpService } from './../api/api.service';
import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, map, publishReplay, refCount, shareReplay} from 'rxjs';

@Injectable()
export class apiFunctionService {

  private exchange : string  = `exchangerate/`;
  private icons : string =  `assets/`;
  private readonly  api  = inject(HttpService);
  cryptoIconsSelf$ : Observable<CryptoIcon[]>  =  this.getCryptoIcons();
  countryCode$ : Observable<CountryDialCode[]> = this.getCoutryCode();
  allRoles$    : Observable<MResultMessage>    = this.getUsersRole();
  localCurreny$: Observable<CryptoIcon[]>      = this.getLocalCurrency();
  cryptoIcons$ : Observable<CryptoIcon[]>      = forkJoin([this.localCurreny$, this.cryptoIconsSelf$]).pipe(
    map(([localCurreny$, cryptoIconsSelf$]) => [
      ...localCurreny$,
      ...cryptoIconsSelf$,
    ])
  );

  cryptoExchange$ = (currency1 : string  , currency2 : string) : Observable<CryptoExchange> =>   {
    return this.getExchangeRate(currency1,currency2);
  };

  constructor(){

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
    return this.api.get<CountryDialCode[]>("json/country.json").pipe(shareReplay(1));
  }

  private getUsersRole() : Observable<MResultMessage> {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>("api/role").pipe(shareReplay(1));
  }

  registerUser(user : User) : Observable<MResultMessage> {
    this.api.setApiType("rest");
    return this.api.post<MResultMessage>({endpoint : `api/users`, data : user}).pipe(shareReplay(1));
  }

  getLocalCurrency() {
    this.api.setApiType("assets");
    return this.api.get<CryptoIcon[]>("json/localCurrency.json").pipe(shareReplay(1));
  }

  loginUser(data : Required<{email : string , password : string}>){
   this.api.setApiType("rest");
   return this.api.post<MResultMessage>({endpoint : "api/users/login",data}).pipe(shareReplay(1));
  }

  getUserAddress(id: string) {
   this.api.setApiType("rest");
   return this.api.get<MResultMessage>(`api/address/user/${id}`).pipe(shareReplay(1));
  }

  deleteUserAddress(id: string) {
    this.api.setApiType("rest");
    return this.api.delete<MResultMessage>(`api/address/${id}`).pipe(shareReplay(1));
  }

  addUserAddress(data : any) {
    this.api.setApiType("rest");
    return this.api.post<MResultMessage>({endpoint : `api/address`,data }).pipe(shareReplay(1));
  }

  addPublication(data : any) {
    this.api.setApiType("rest");
    return this.api.post<MResultMessage>({endpoint : `api/publication`,data }).pipe(shareReplay(1));
  }

  getPublicationById(id : string) {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/publication/poster/` + id).pipe(shareReplay(1));
  }

  deletePublication(id : string) {
    this.api.setApiType("rest");
    return this.api.delete<MResultMessage>(`api/publication/`+ id).pipe(shareReplay(1));
  }

  getLastPublication() {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/publication/last`).pipe(shareReplay(1));
  }


  getNotification() {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/publication/notification`).pipe(shareReplay(1));
  }

  getAllPublication() {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/publication`).pipe(shareReplay(1));
  }

  getAllPlans()  {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/plan`).pipe(shareReplay(1));
  }

  getReportById(id : string) {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/users/${id}/report`).pipe(shareReplay(1));
  }

  planSubscription(data : any) {
    this.api.setApiType("rest");
    return this.api.post<MResultMessage>({endpoint : `api/transactions/plan/subscription`,data}).pipe(shareReplay(1))
  }


  getTransactionHistory(id : string) {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/transactions/${id}`).pipe(shareReplay(1));
  }


  activePublication(id : string) {
    this.api.setApiType("rest");
    return this.api.get<MResultMessage>(`api/publication/${id}/active`).pipe(shareReplay(1));
  }

  getReceiptFileForBilling(){
    this.api.setApiType("assets");
    return this.api.getHtml(`receipt/invoice.html`).pipe(shareReplay(1));
  }
}


