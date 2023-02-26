import { FormLayoutComponent } from './../layouts/form-layout/form-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes  : Routes = [
  {
    path : '',
    component : FormLayoutComponent,
    children : [
      {
        path  : 'login',
        loadComponent : ()=> import('../pages/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path  : 'register',
        loadComponent : ()=> import('../pages/auth/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
      }
    ]
  }

]
@NgModule({
  declarations  : [],
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class AuthRoutingModule {
  constructor() {

  }
}
