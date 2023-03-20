import { defaultUserState } from 'src/app/store/user$/user.states';
import { environment } from '../../../../environments/environment.prod';
import { AppFacades } from './app.facades';
import { StatesFacades } from './state.facades';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../interface/State';
@Injectable({
  providedIn: 'root',
})
export class AppStateFacade {
  constructor(
    public AppFacades: AppFacades,
    public StatesFacades: StatesFacades,
    private router  : Router
  ) {}

  logout$() {
    this.AppFacades.deleteStorage(environment.STORAGE_USER_KEY);
    this.StatesFacades.updateUserState(defaultUserState());
    return this.navigate("/auth/login");
  }

  updateUser(user : user) {
    this.AppFacades.setStorage({key : environment.STORAGE_USER_TOKEN,value : user.token});
    this.AppFacades.setStorage({key : environment.STORAGE_USER_KEY, value : JSON.stringify(user.user)});
    return this.StatesFacades.updateUserState(user);
  }

  navigate(url : string , params ?: any) {
    return this.router.navigate([url]);
  }
}
