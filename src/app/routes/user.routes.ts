import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';
import { AccessGuard } from '../guards/access/access.guard';
import { UserLayoutComponent } from '../layouts/user-layout/user-layout.component';
import { UAddPublicationComponent } from '../pages/dashboard/user/upublication/add-publication/add-publication.component';
import { UAddressComponent } from '../pages/dashboard/user/uaddress/uaddress.component';
import { UaccountComponent } from '../pages/dashboard/user/uaccount/uaccount.component';

const routes: Routes = [
  {
    path : '',
    component :UserLayoutComponent,
    children : [
      {
        path: 'home',
        component: UhomeComponent,
      },
      {
        path: 'publication/add',
        component: UAddPublicationComponent,
      },
      {
        path: 'account',
        component: UaccountComponent,
      },
      {
        path: 'safe/connect',
        component: UAddressComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
    canActivate : [AccessGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
