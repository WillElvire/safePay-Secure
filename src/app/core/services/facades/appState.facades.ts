import { defaultUserState } from 'src/app/store/user$/user.states';
import { environment } from '../../../../environments/environment.prod';
import { AppFacades } from './app.facades';
import { StatesFacades } from './state.facades';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AppStateFacade {
  constructor(
    private AppFacades: AppFacades,
    private StatesFacades: StatesFacades,
    private router  : Router
  ) {}

  logout$() {
    this.AppFacades.deleteStorage(environment.STORAGE_USER_KEY);
    this.StatesFacades.updateUserState(defaultUserState());
    return this.navigate("/auth/login");
  }

  navigate(url : string , params ?: any) {
    return this.router.navigate([url]);
  }
}
