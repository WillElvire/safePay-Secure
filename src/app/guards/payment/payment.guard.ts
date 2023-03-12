import { StatesFacades } from 'src/app/core/services/facades/state.facades';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppFacades } from 'src/app/core/services/facades/app.facades';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {

  constructor(private statesFacades : StatesFacades , private router : Router , private appFacades : AppFacades ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.statesFacades.isLoggedIn) {
        return true;
      }
      this.appFacades.nBuildError("Vous devez vous connecter pour effectuer d'autres actions","Login required");
      this.router.navigate(["/auth/login"],{queryParams : {previsousURL : state.url.toString() }});
      return true;
  }

}
