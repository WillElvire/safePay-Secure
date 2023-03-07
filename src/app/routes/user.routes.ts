import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';
import { AccessGuard } from '../guards/access/access.guard';
import { UserLayoutComponent } from '../layouts/user-layout/user-layout.component';

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
