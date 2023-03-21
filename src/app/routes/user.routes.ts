import { BusinessRoleGuard } from './../guards/authorisation/business.guard';
import { AuthorisationGuard } from './../guards/authorisation/authorisation.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';
import { AccessGuard } from '../guards/access/access.guard';
import { UserPoliciesGuard } from '../guards/policies/user.dash.guard';
import { UserLayoutComponent } from '../layouts/user-layout/user-layout.component';
import { UAddPublicationComponent } from '../pages/dashboard/user/upublication/add-publication/add-publication.component';
import { UAddressComponent } from '../pages/dashboard/user/uaddress/uaddress.component';
import { UaccountComponent } from '../pages/dashboard/user/uaccount/uaccount.component';
import { UcompteComponent } from '../pages/dashboard/user/ucompte/ucompte.component';
import { UsoldeComponent } from '../pages/dashboard/user/usolde/usolde.component';
import { UtransactionComponent } from '../pages/dashboard/user/utransaction/utransaction.component';
import { UnotificationComponent } from '../pages/dashboard/user/unotification/unotification.component';

const routes: Routes = [
  {
    path : '',
    component :UserLayoutComponent,
    canActivate : [AccessGuard,UserPoliciesGuard],
    children : [
      {
        path: 'home',
        component: UhomeComponent,

      },
      {
        path: 'publication/add',
        component: UAddPublicationComponent,
        canActivate : [AuthorisationGuard]
      },
      {
        path: 'account',
        component: UaccountComponent,
      },
      {
        path: 'compte',
        component: UcompteComponent,
      },
      {
        path : 'solde',
        component : UsoldeComponent
      },
      {
        path : 'transaction',
        component : UtransactionComponent
      },
      {
        path : 'notification',
        component : UnotificationComponent,
        canActivate : [BusinessRoleGuard]
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
