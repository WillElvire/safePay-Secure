import { AppStateFacade } from './../../core/services/facades/appState.facades';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, OnDestroy, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../core/interface/Api';
import { Location } from '@angular/common';

@Injectable({
  providedIn : 'root'
})
export class UserPoliciesGuard implements CanActivate, OnDestroy {

  private readonly AppStateFacade  = inject(AppStateFacade);
  private readonly rooter = inject(Router);
  private readonly location = inject(Location);

  isLoggedIn = this.AppStateFacade.StatesFacades.isLoggedIn;
  private user !: User ;

  constructor(){
    this.AppStateFacade.StatesFacades.selectUser().subscribe((user)=> this.user = user)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(this.isLoggedIn)

    if(!this.isLoggedIn) {
      this.location.back();
      return false;
    }
    if(["Utilisateur","Business"].includes(this.user.role.name as string)) {
      return true;
    }
    this.rooter.navigate(["/admin/"]);
    return true

  }
  ngOnDestroy(): void {

  }

}
