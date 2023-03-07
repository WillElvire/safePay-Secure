import { User } from 'src/app/core/interface/Api';
import { UserQuery } from './../../store/user$/user.query';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {
  isCollapsed : boolean = true;
  user  !: User;

  constructor(private userQuery : UserQuery) {
    this.userQuery.selectUser$.subscribe((responce)=>{
      this.user = responce;
      console.log(responce);
    })
  }
  ngAfterViewInit(): void {

  }
}
