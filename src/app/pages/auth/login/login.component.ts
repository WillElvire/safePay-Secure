import { LoginFormComponent } from './../../../components/shared/form/login-form/login-form.component';
import { Web3FormComponent } from './../../../components/shared/form/web3-form/web3-form.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';

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
  providers: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  useWeb3: boolean = true;

  constructor() {}

  ngOnInit(): void {

  }
}
