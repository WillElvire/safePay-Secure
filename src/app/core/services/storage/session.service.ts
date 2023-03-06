import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class SessionService {

  constructor(){

  }

  get(key : string) {
    return sessionStorage.getItem(key);
  }

  set(parametre : Required<{key : string , value : any}>) {
    sessionStorage.setItem(parametre.key, parametre.value);
  }

  delete(key : string ) {
    sessionStorage.removeItem(key);
  }
}
