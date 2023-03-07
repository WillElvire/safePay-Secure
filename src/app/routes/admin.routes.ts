import { AccessGuard } from './../guards/access/access.guard';
import { AdminLayoutComponent } from './../layouts/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path : '',
    component : AdminLayoutComponent,
    canActivate : [AccessGuard],
    children : [
      {
        path : '',
        redirectTo : 'user',
        pathMatch : 'full'
      },
      {
        path : '',
        loadChildren : ()=> import("../modules/user.module").then((m)=> m.UserModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class adminRoutingModule {

}
