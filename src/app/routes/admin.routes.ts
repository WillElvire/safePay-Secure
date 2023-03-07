import { AccessGuard } from './../guards/access/access.guard';
import { AdminLayoutComponent } from './../layouts/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';

const routes: Routes = [
  {
    path : '',
    component : AdminLayoutComponent,
    canActivate : [AccessGuard],
    children : [
      {
        path : 'index',
        component : UhomeComponent
      },{
        path : '',
        redirectTo : 'index',
        pathMatch : 'full'
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
