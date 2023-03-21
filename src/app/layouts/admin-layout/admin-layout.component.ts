import { AfterViewInit, Component, inject } from '@angular/core';
import { User } from 'src/app/core/interface/Api';
import { AppStateFacade } from 'src/app/core/services/facades/appState.facades';
import { UserQuery } from 'src/app/store/user$/user.query';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent  implements AfterViewInit{

  isCollapsed : boolean = true;
  user  !: User;
  private readonly appSateFacades = inject(AppStateFacade)

  constructor() {
    this.appSateFacades.StatesFacades.selectUser().subscribe((responce)=>{
      this.user = responce;
    })
  }
  ngAfterViewInit(): void {

  }

  logout() {
   this.appSateFacades.logout$();
  }
}
