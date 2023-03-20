import { Location } from '@angular/common';
import { StatesFacades } from './../../core/services/facades/state.facades';
import { Injectable, inject, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../core/interface/Api';


@Injectable({
  providedIn: 'root'
})
export class BusinessRoleGuard implements CanActivate, OnDestroy {

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

    if(this.user.role.name != "Business") {
      this.location.back()
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
