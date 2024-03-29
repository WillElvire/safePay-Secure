import { LoginFormComponent } from './../../../components/shared/website/form/login-form/login-form.component';
import { Web3FormComponent } from './../../../components/shared/website/form/web3-form/web3-form.component';
import { FormToolComponent } from './../../../components/shared/website/form/form-tool/form-tool.component';
import { userState } from '../../../store/user$/user.state';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { AppFacades } from 'src/app/core/services/facades/app.facades';
import { ServiceModule } from 'src/app/modules/service.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    Web3FormComponent,
    LoginFormComponent,
    NzButtonModule,
    NzIconModule,
    RouterModule,
    FormToolComponent,
    ServiceModule
  ],
  providers: [userState,AppFacades],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  useWeb3: boolean = false;

  constructor(private userState : userState,private appFacade :  AppFacades) {}

  ngOnInit(): void {

  }

}
