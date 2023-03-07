import { AfterViewInit, Component } from '@angular/core';
import { User } from 'src/app/core/interface/Api';
import { UserQuery } from 'src/app/store/user$/user.query';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent  implements AfterViewInit{

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
