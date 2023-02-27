import { userState } from './../../../store/user.state';
import { LoginFormComponent } from './../../../components/shared/form/login-form/login-form.component';
import { Web3FormComponent } from './../../../components/shared/form/web3-form/web3-form.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { AppFacades } from 'src/app/core/services/facades/app.facades';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    Web3FormComponent,
    LoginFormComponent,
    NzButtonModule,
    NzIconModule,
    RouterModule
  ],
  providers: [userState,AppFacades],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  useWeb3: boolean = true;

  constructor(private userState : userState,private appFacade :  AppFacades) {}

  ngOnInit(): void {

  }

  getUserState(event : any) {
    const childCompRes  = event;
    this.userState.emit(childCompRes);
    if(childCompRes.code == "success")
    return this.appFacade.mBuildSuccess(childCompRes.response);
    return this.appFacade.mBuildError(childCompRes.response);

  }
}
