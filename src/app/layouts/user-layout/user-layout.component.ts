import { Subscription } from 'rxjs';
import { User } from 'src/app/core/interface/Api';
import { UserQuery } from './../../store/user$/user.query';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnDestroy {
  isCollapsed : boolean = true;
  condition : boolean = false;
  user  !: User;
  subscription = new Subscription();

  constructor(private userQuery : UserQuery) {
   this.checkUserRole();
  }

  checkUserRole() {
    this.subscription =this.userQuery.selectUser$.subscribe((responce)=>{
      this.user = responce;
      this.condition = this.user.role.name =='Utilisateur';
      console.log(responce);
    })
  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
