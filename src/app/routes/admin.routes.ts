import { AccessGuard } from './../guards/access/access.guard';
import { AdminLayoutComponent } from './../layouts/admin-layout/admin-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AhomeComponent } from '../pages/dashboard/admin/ahome/ahome.component';
import { ApublicationComponent } from '../pages/dashboard/admin/apublication/apublication.component';
import { AroleComponent } from '../pages/dashboard/admin/arole/arole.component';
import { AtransactionComponent } from '../pages/dashboard/admin/atransaction/atransaction.component';
import { AtransactiontypeComponent } from '../pages/dashboard/admin/atransactiontype/atransactiontype.component';

const routes: Routes = [
  {
    path : '',
    component : AdminLayoutComponent,
    canActivate : [AccessGuard],
    children : [
      {
        path : 'index',
        component : AhomeComponent
      },
      {
        path : 'publications',
        component : ApublicationComponent
      },
      {
        path : 'roles',
        component : AroleComponent
      },
      {
        path : 'transactions',
        component : AtransactionComponent
      },
      {
        path : 'transaction-type',
        component : AtransactiontypeComponent
      },
      {
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
