import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { UserQuery } from 'src/app/store/user$/user.query';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/interface/Api';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate , OnDestroy {

  user !: User;
  subscription  = new Subscription();

  constructor(private UserQuery : UserQuery,private location : Location ,private appFacades : AppFacades ){
    this.subscription = this.UserQuery.selectUser$.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.user);
    if(!!this.user?.id) {
      return true;
    }
    this.location.back();
    this.appFacades.nBuildError("Desolé vous n'etes pas authorisé à aller vers cette page","Access denied");
    return false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
