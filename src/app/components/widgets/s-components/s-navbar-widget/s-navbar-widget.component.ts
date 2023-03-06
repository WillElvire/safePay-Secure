import { UserQuery } from 'src/app/store/user$/user.query';
import { Component } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { environment } from 'src/environments/environment.prod';
import { defaultUserState } from 'src/app/store/user$/user.states';

@Component({
  selector: 's-navbar-widget',
  template: `
    <ul nz-menu>
      <li nz-menu-item routerLink="/user/">
        <span nz-icon nzType="home" nzTheme="outline"></span>
        <span style="margin-left:3% !important ;">Dashboard     </span>
      </li>
      <li nz-menu-item routerLink="/user/safe/connect">
      <span nz-icon nzType="block" nzTheme="outline"></span>
        <span style="margin-left:3% !important ;">Safe Connect     </span>
      </li>

      <li nz-menu-item routerLink="/user/cart/">
        <span nz-icon nzType="shopping-cart" nzTheme="outline"></span>
        <span style="margin-left:3% !important ;">Mon pannier     </span>
      </li>
      <li nz-menu-item (click)="logout()">
        <span nz-icon nzType="logout" nzTheme="outline"></span>
        <span style="margin-left:3% !important ;">Déconnexion   </span>
      </li>
    </ul>
  `,
  styles: [
    `
     li{
       width :100% !important;

     }
    `
  ],
})
export class SNavbarWidgetComponent {

  constructor(private userQuery :  UserQuery , private appFacades : AppFacades){

  }
  logout(){
    this.appFacades.deleteStorage(environment.STORAGE_USER_KEY);
    this.userQuery.update(defaultUserState());
  }
}
