import { Location } from '@angular/common';
import { StatesFacades } from './../../core/services/facades/state.facades';
import { Injectable, inject, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/interface/Api';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationGuard implements CanActivate, OnDestroy {

  private readonly stateFacades  = inject(StatesFacades);
  private user !: User;
  private subscription = new Subscription();
  private location = inject(Location)

  constructor(){
    this.subscription = this.stateFacades.selectUser().subscribe((user)=>{
      this.user = user;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.user.role.name != "Utilisateur") {
      this.location.back()
      return false;
    }
    return false;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
